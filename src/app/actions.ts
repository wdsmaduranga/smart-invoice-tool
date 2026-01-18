'use server'

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';



const RegisterSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
});

export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', {
            ...Object.fromEntries(formData),
            redirectTo: '/dashboard',
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function register(prevState: string | undefined, formData: FormData) {
    const validatedFields = RegisterSchema.safeParse(Object.fromEntries(formData));

    if (!validatedFields.success) {
        return 'Invalid fields.';
    }

    const { email, password, name } = validatedFields.data;

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return 'User already exists.';
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        // Auto login not supported in server action easily without redirect, 
        // just return success message or redirect to login
    } catch {
        return 'Failed to register user.';
    }

    // Success indicator (in a real app we might redirect)
    return 'success';
}

import { InvoiceData } from '@/types/invoice';
import { auth } from '@/auth';

export async function saveInvoice(data: InvoiceData, id?: string) {
    const session = await auth();
    if (!session?.user?.id) {
        return { error: 'Not authenticated' };
    }

    try {
        // Transform InvoiceData to Prisma Schema
        // Note: dates from JSON/form might be strings, handle accordingly
        const invoiceData = {
            invoiceNumber: data.invoiceNumber,
            date: new Date(data.date),
            dueDate: new Date(data.dueDate),
            status: 'DRAFT',

            currency: data.currency.code,
            taxRate: data.taxRate,
            taxAmount: data.taxAmount,
            subtotal: data.subtotal,
            total: data.total,
            notes: data.notes,
            paymentTerms: data.paymentTerms,

            businessName: data.businessDetails.name,
            businessAddress: data.businessDetails.address,
            businessCity: data.businessDetails.city,
            businessZip: data.businessDetails.postalCode,
            businessCountry: data.businessDetails.country,
            businessEmail: data.businessDetails.email,
            businessPhone: data.businessDetails.phone,
            businessLogo: data.businessDetails.logo,

            clientName: data.customerDetails.name,
            clientEmail: data.customerDetails.email,
            clientAddress: `${data.customerDetails.address}, ${data.customerDetails.city} ${data.customerDetails.postalCode}, ${data.customerDetails.country}`,

            userId: session.user.id,

            lineItems: {
                create: data.lineItems.map(item => ({
                    description: item.description,
                    quantity: item.quantity,
                    rate: item.rate,
                    amount: item.amount
                }))
            }
        };

        if (id) {
            await prisma.lineItem.deleteMany({ where: { invoiceId: id } });
            await prisma.invoice.update({
                where: { id },
                data: invoiceData
            });
        } else {
            await prisma.invoice.create({
                data: invoiceData
            });
        }

        revalidatePath('/dashboard');
        return { success: true };
    } catch (error) {
        console.error('Save error:', error);
        return { error: 'Failed to save invoice' };
    }
}

export async function getInvoices() {
    const session = await auth();
    if (!session?.user?.id) return [];

    const invoices = await prisma.invoice.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: 'desc' },
    });

    return invoices;
}

// --- Client Actions ---

export async function getClients() {
    const session = await auth();
    if (!session?.user?.id) return [];

    return await prisma.client.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: 'desc' },
    });
}

const ClientSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email().optional().or(z.literal('')),
    address: z.string().optional(),
    phone: z.string().optional(),
});

export async function saveClient(prevState: unknown, formData: FormData) {
    const session = await auth();
    console.log('saveClient session:', session?.user);
    if (!session?.user?.id) return { error: 'Not authenticated' };

    const parsed = ClientSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        address: formData.get('address'),
        phone: formData.get('phone'),
    });

    if (!parsed.success) {
        return { error: 'Invalid fields' };
    }

    try {
        await prisma.client.create({
            data: {
                ...parsed.data,
                userId: session.user.id,
            },
        });
        revalidatePath('/dashboard/clients');
        return { success: true };
    } catch {
        return { error: 'Failed to save client' };
    }
}

export async function deleteClient(id: string) {
    const session = await auth();
    if (!session?.user?.id) return { error: 'Not authenticated' };

    try {
        await prisma.client.delete({
            where: { id, userId: session.user.id }
        });
        revalidatePath('/dashboard/clients');
        return { success: true };
    } catch {
        return { error: 'Failed' };
    }
}

export async function getInvoice(id: string) {
    const session = await auth();
    if (!session?.user?.id) return null;

    const invoice = await prisma.invoice.findUnique({
        where: { id, userId: session.user.id },
        include: {
            lineItems: true
        }
    });

    return invoice;
}

export async function getAdminStats() {
    const session = await auth();
    // In a real app, you'd check session?.user?.role === 'ADMIN' here
    // For now, we'll allow access but we should enforce role check either here or in the page
    if (!session?.user?.id) return null;

    // Check Role
    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { role: true }
    });

    if ((user as any)?.role !== 'ADMIN') {
        return { error: 'Unauthorized' };
    }

    const [totalUsers, totalInvoices, totalRevenue] = await Promise.all([
        prisma.user.count(),
        prisma.invoice.count(),
        prisma.invoice.aggregate({
            _sum: {
                total: true
            }
        })
    ]);

    return {
        totalUsers,
        totalInvoices,
        totalRevenue: totalRevenue._sum.total || 0
    };
}

export async function getUsers() {
    const session = await auth();
    if (session?.user?.role !== 'ADMIN') return [];

    return await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
            _count: {
                select: { invoices: true }
            }
        }
    });
}

export async function updateUserRole(userId: string, newRole: 'USER' | 'ADMIN') {
    const session = await auth();
    if (session?.user?.role !== 'ADMIN') return { error: 'Unauthorized' };

    try {
        await prisma.user.update({
            where: { id: userId },
            data: { role: newRole }
        });
        revalidatePath('/admin/users');
        return { success: true };
    } catch {
        return { error: 'Failed to update role' };
    }
}

export async function deleteUser(userId: string) {
    const session = await auth();
    if (session?.user?.role !== 'ADMIN') return { error: 'Unauthorized' };

    try {
        await prisma.user.delete({
            where: { id: userId }
        });
        revalidatePath('/admin/users');
        return { success: true };
    } catch {
        return { error: 'Failed to delete user' };
    }
}

export async function getDailyRevenue() {
    const session = await auth();
    if (session?.user?.role !== 'ADMIN') return [];

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const invoices = await prisma.invoice.findMany({
        where: {
            createdAt: { gte: thirtyDaysAgo }
        },
        select: {
            createdAt: true,
            total: true
        }
    });

    const revenueMap = new Map<string, number>();
    for (let i = 0; i < 30; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().split('T')[0];
        revenueMap.set(dateStr, 0);
    }

    invoices.forEach((inv: { createdAt: Date; total: number }) => {
        const dateStr = inv.createdAt.toISOString().split('T')[0];
        if (revenueMap.has(dateStr)) {
            revenueMap.set(dateStr, (revenueMap.get(dateStr) || 0) + inv.total);
        }
    });

    return Array.from(revenueMap.entries())
        .map(([date, amount]) => ({ date, amount }))
        .sort((a, b) => a.date.localeCompare(b.date));
}








