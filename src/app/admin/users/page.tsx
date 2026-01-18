'use client';

import { useEffect, useState, useTransition } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getUsers, updateUserRole, deleteUser } from '@/app/actions';
import { toast } from 'sonner';
import { Loader2, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface User {
    id: string;
    name: string | null;
    email: string | null;
    role: string;
    createdAt: Date;
    _count: { invoices: number };
}

export default function AdminUsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    useEffect(() => {
        loadUsers();
    }, []);

    async function loadUsers() {
        const data = await getUsers();
        setUsers(data as unknown as User[]);
        setIsLoading(false);
    }

    const handleRoleChange = async (userId: string, newRole: string) => {
        startTransition(async () => {
             const result = await updateUserRole(userId, newRole as 'USER' | 'ADMIN');
             if (result.success) {
                 toast.success('User role updated');
                 loadUsers();
                 router.refresh();
             } else {
                 toast.error('Failed to update role');
             }
        });
    };

    const handleDelete = async (userId: string) => {
        if (!confirm('Are you sure? This action cannot be undone.')) return;
        
        startTransition(async () => {
             const result = await deleteUser(userId);
             if (result.success) {
                 toast.success('User deleted');
                 loadUsers();
                 router.refresh();
             } else {
                 toast.error('Failed to delete user');
             }
        });
    };

    if (isLoading) return <div className="p-8"><Loader2 className="animate-spin" /></div>;

    return (
        <div className="container mx-auto p-6 max-w-7xl">
            <h1 className="text-3xl font-bold mb-6">User Management</h1>
            <Card>
                <CardHeader>
                    <CardTitle>All Users ({users.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Invoices</TableHead>
                                <TableHead>Joined</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.name || 'No Name'}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <Select 
                                            defaultValue={user.role} 
                                            onValueChange={(val) => handleRoleChange(user.id, val)}
                                            disabled={isPending}
                                        >
                                            <SelectTrigger className="w-[100px]">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="USER">User</SelectItem>
                                                <SelectItem value="ADMIN">Admin</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                    <TableCell>{user._count.invoices}</TableCell>
                                    <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                                    <TableCell className="text-right">
                                        <Button 
                                            variant="destructive" 
                                            size="sm"
                                            onClick={() => handleDelete(user.id)}
                                            disabled={isPending}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
