export interface Currency {
  code: string;
  symbol: string;
  name: string;
}

export interface BusinessDetails {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  email: string;
  phone: string;
  logo: string | null;
}

export interface CustomerDetails {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  email: string;
  phone: string;
}

export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface InvoiceData {
  invoiceNumber: string;
  date: string;
  dueDate: string;
  businessDetails: BusinessDetails;
  customerDetails: CustomerDetails;
  lineItems: LineItem[];
  currency: Currency;
  taxRate: number;
  subtotal: number;
  taxAmount: number;
  total: number;
  notes: string;
  paymentTerms: string;
}