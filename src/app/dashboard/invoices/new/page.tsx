import InvoiceGenerator from "@/components/InvoiceGenerator";
import { getClients } from "@/app/actions";

export default async function NewInvoicePage() {
  const clients = await getClients();
  return <InvoiceGenerator savedClients={clients} />;
}
