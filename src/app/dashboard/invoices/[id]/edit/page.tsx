import { getClients, getInvoice } from '@/app/actions';
import InvoiceGenerator from '@/components/InvoiceGenerator';
import { notFound } from 'next/navigation';
import { InvoiceData } from '@/types/invoice';
import { CURRENCIES } from '@/lib/constants';

export default async function EditInvoicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Await params in Next.js 15
  const invoice = await getInvoice(id);
  const clients = await getClients();

  if (!invoice) {
    notFound();
  }

  // Map database invoice to frontend InvoiceData interface
  const initialData: InvoiceData = {
    invoiceNumber: invoice.invoiceNumber,
    date: invoice.date.toISOString().split('T')[0],
    dueDate: invoice.dueDate.toISOString().split('T')[0],
    businessDetails: {
      name: invoice.businessName || '',
      address: invoice.businessAddress || '',
      city: invoice.businessCity || '',
      postalCode: invoice.businessZip || '',
      country: invoice.businessCountry || '',
      email: invoice.businessEmail || '',
      phone: invoice.businessPhone || '',
      logo: invoice.businessLogo || null,
    },
    customerDetails: {
      name: invoice.clientName,
      address: invoice.clientAddress?.split(',')[0] || '', // Rough parsing from stored string
      city: '', // Stored as single string, so we can't easily split back perfectly without change schema
      postalCode: '',
      country: '', 
      email: invoice.clientEmail || '',
      phone: ''
    },
    // We lost granular customer address fields in current schema snapshot approach
    // For now, put full address in address field or leave empty if mostly mapped
    
    lineItems: invoice.lineItems.map((item: { id: string; description: string; quantity: number; rate: number; amount: number }) => ({
        id: item.id,
        description: item.description,
        quantity: item.quantity,
        rate: item.rate,
        amount: item.amount
    })),
    currency: CURRENCIES.find(c => c.code === invoice.currency) || CURRENCIES[0],
    taxRate: invoice.taxRate,
    subtotal: invoice.subtotal,
    taxAmount: invoice.taxAmount,
    total: invoice.total,
    notes: invoice.notes || '',
    paymentTerms: invoice.paymentTerms || '',
    type: (invoice.type as 'INVOICE' | 'QUOTATION') || 'INVOICE'
  };

  return (
    <InvoiceGenerator 
        savedClients={clients} 
        initialData={initialData} 
        invoiceId={id} // Pass ID to trigger UPDATE instead of CREATE
    />
  );
}
