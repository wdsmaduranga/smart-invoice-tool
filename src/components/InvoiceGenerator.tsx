'use client';

import { useState, useEffect, useTransition } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button'; // Ensure Button is imported
import InvoiceForm from './InvoiceForm';
import InvoicePreview from './InvoicePreview';
import { InvoiceData, LineItem, Currency } from '@/types/invoice';
import { saveInvoice } from '@/app/actions'; // Import server action
import { toast } from 'sonner'; // Import toast
import { useRouter } from 'next/navigation';
import { Loader2, Save } from 'lucide-react';

import { CURRENCIES } from '@/lib/constants';

const initialInvoiceData: InvoiceData = {
  invoiceNumber: '',
  date: '',
  dueDate: '',
  businessDetails: {
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    email: '',
    phone: '',
    logo: null
  },
  customerDetails: {
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    email: '',
    phone: ''
  },
  lineItems: [
    {
      id: '1',
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0
    }
  ],
  currency: CURRENCIES[0],
  taxRate: 0,
  subtotal: 0,
  taxAmount: 0,
  total: 0,
  notes: '',
  paymentTerms: ''
};



import { Client } from '@prisma/client';

interface InvoiceGeneratorProps {
  savedClients?: Client[];
  initialData?: InvoiceData;
  invoiceId?: string;
}

export default function InvoiceGenerator({ savedClients = [], initialData, invoiceId }: InvoiceGeneratorProps) {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(initialData || initialInvoiceData);
  const [hasMounted, setHasMounted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // Initialize dynamic fields after component mounts ONLY if no initialData
  useEffect(() => {
    if (!initialData) {
      const now = Date.now();
      const today = new Date().toISOString().split('T')[0];
      const dueDate = new Date(now + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      
      setInvoiceData(prev => ({
        ...prev,
        invoiceNumber: `INV-${now}`,
        date: today,
        dueDate: dueDate
      }));
    }
    setHasMounted(true);
  }, [initialData]);

  // Calculate totals whenever line items or tax rate changes
  useEffect(() => {
    const subtotal = invoiceData.lineItems.reduce((sum, item) => sum + item.amount, 0);
    const taxAmount = subtotal * (invoiceData.taxRate / 100);
    const total = subtotal + taxAmount;

    setInvoiceData(prev => ({
      ...prev,
      subtotal,
      taxAmount,
      total
    }));
  }, [invoiceData.lineItems, invoiceData.taxRate]);

  const updateInvoiceData = (field: keyof InvoiceData, value: string | number | Currency) => {
    setInvoiceData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateBusinessDetails = (field: string, value: string | File | null) => {
    setInvoiceData(prev => ({
      ...prev,
      businessDetails: {
        ...prev.businessDetails,
        [field]: value
      }
    }));
  };

  const updateCustomerDetails = (field: string, value: string) => {
    setInvoiceData(prev => ({
      ...prev,
      customerDetails: {
        ...prev.customerDetails,
        [field]: value
      }
    }));
  };

  const updateLineItem = (id: string, field: keyof LineItem, value: string | number) => {
    setInvoiceData(prev => ({
      ...prev,
      lineItems: prev.lineItems.map(item => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };
          if (field === 'quantity' || field === 'rate') {
            updatedItem.amount = updatedItem.quantity * updatedItem.rate;
          }
          return updatedItem;
        }
        return item;
      })
    }));
  };

  const addLineItem = () => {
    const newItem: LineItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0
    };
    setInvoiceData(prev => ({
      ...prev,
      lineItems: [...prev.lineItems, newItem]
    }));
  };

  const removeLineItem = (id: string) => {
    setInvoiceData(prev => ({
      ...prev,
      lineItems: prev.lineItems.filter(item => item.id !== id)
    }));
  };

  // Don't render until component has mounted to prevent hydration mismatch
  if (!hasMounted) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Invoice Generator</h2>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Invoice Generator</h2>
          <p className="text-gray-600">Create professional invoices with PDF export functionality</p>
        </div>
        <div className="flex gap-2">
            <Button
                onClick={() => {
                    startTransition(async () => {
                        const result = await saveInvoice(invoiceData, invoiceId);
                        if (result?.error) {
                            toast.error(result.error);
                        } else {
                            toast.success('Invoice saved successfully!');
                            router.push('/dashboard');
                        }
                    });
                }}
                disabled={isPending}
            >
                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                Save Invoice
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="space-y-6">
          <InvoiceForm
            invoiceData={invoiceData}
            currencies={CURRENCIES}
            updateInvoiceData={updateInvoiceData}
            updateBusinessDetails={updateBusinessDetails}
            updateCustomerDetails={updateCustomerDetails}
            updateLineItem={updateLineItem}
            addLineItem={addLineItem}
            removeLineItem={removeLineItem}
            savedClients={savedClients}
          />
        </div>

        {/* Preview Section */}
        <div className="lg:sticky lg:top-8">
          <Card className="p-6">
            <InvoicePreview invoiceData={invoiceData} />
          </Card>
        </div>
      </div>
    </div>
  );
}