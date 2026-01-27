import { getInvoices } from '@/app/actions';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus } from 'lucide-react';
import Search from '@/components/Search';
 
export default async function QuotationsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const invoices = await getInvoices('QUOTATION', query);
 
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Quotations</h2>
        <Link href="/dashboard/invoices/new?type=QUOTATION">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Quotation
          </Button>
        </Link>
      </div>
 
      <div className="flex items-center gap-4">
        <Search placeholder="Search quotations..." />
      </div>
 
      <Card>
        <CardContent className="p-0">
          {invoices.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
                {query ? 'No quotations found matching your search.' : 'No quotations found. Create your first one!'}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quotation #</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
                    <TableCell>{invoice.date.toLocaleDateString()}</TableCell>
                    <TableCell>{invoice.clientName || 'N/A'}</TableCell>
                    <TableCell>{invoice.status}</TableCell>
                    <TableCell className="text-right">{invoice.currency} {invoice.total.toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                        <Link href={`/dashboard/invoices/${invoice.id}/edit`}>
                            <Button variant="ghost" size="sm">Edit</Button>
                        </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
