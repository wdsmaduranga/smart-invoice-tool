import InvoiceGenerator from "@/components/InvoiceGenerator";
import { getClients } from "@/app/actions";

export default async function NewInvoicePage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const clients = await getClients();
  const initialType = (type === 'QUOTATION') ? 'QUOTATION' : 'INVOICE';

  return <InvoiceGenerator savedClients={clients} initialType={initialType} />;
}
