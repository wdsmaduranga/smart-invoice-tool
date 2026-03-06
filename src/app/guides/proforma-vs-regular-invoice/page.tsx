import type { Metadata } from "next";
import Link from "next/link";
import { Clock, HelpCircle, FileText, ArrowRight, BookOpen, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "What is a Proforma Invoice and When to Use It? | Smart Invoice Tool",
  description: "Learn the difference between a proforma invoice and a standard invoice, when to send one, and how it impacts your accounting process.",
  keywords: "proforma invoice, what is a proforma invoice, proforma vs regular invoice, when to use proforma, proforma invoice example",
  openGraph: {
    title: "What is a Proforma Invoice and When to Use It?",
    description: "Understand the purpose of a proforma invoice, how it differs from a regular invoice, and exactly when you should be using it.",
    url: "https://smartinvoicetool.com/guides/proforma-vs-regular-invoice",
  },
  alternates: {
    canonical: "/guides/proforma-vs-regular-invoice",
  },
};

export default function ProformaInvoiceGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-4 px-4">
        <div className="container mx-auto max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-blue-600">Guides</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Proforma vs Regular Invoice</span>
          </nav>
        </div>
      </div>

      <section className="bg-white pt-12 pb-8 px-4 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Business Strategy</span>
            <span className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 5 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            What is a Proforma Invoice and When to Use It?
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Accounting terminology can be confusing. While most people are familiar with standard invoices and quotes, the &quot;proforma invoice&quot; often causes head-scratching. In this guide, we break down exactly what it is, how it works, and when your business should use one.
          </p>
        </div>
      </section>

      <article className="py-12 px-4">
        <div className="container mx-auto max-w-3xl space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What is a Proforma Invoice?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              A <strong>proforma invoice</strong> is a preliminary bill of sale sent to buyers in advance of a shipment or delivery of goods/services. The term &quot;pro forma&quot; is Latin for &quot;as a matter of form.&quot;
            </p>
            <p className="text-slate-600 leading-relaxed">
              It outlines the items to be shipped, their value, weight, and other essential details, giving the buyer a precise estimate of what to expect. Critically, a proforma invoice is <em>not</em> a final demand for payment and thus does not hold the same legal or accounting weight as a final commercial invoice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Proforma vs. Quotation vs. Regular Invoice</h2>
            <div className="overflow-hidden bg-white border border-slate-200 rounded-xl shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <tr>
                    <th className="p-4 font-semibold">Document Type</th>
                    <th className="p-4 font-semibold">Purpose</th>
                    <th className="p-4 font-semibold">Accounting Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900 flex items-center gap-2"><HelpCircle className="w-4 h-4 text-slate-400"/> Quotation</td>
                    <td className="p-4 text-slate-600">An initial estimate of costs before any agreement is made.</td>
                    <td className="p-4 text-slate-600">None. Not recorded in books.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900 flex items-center gap-2"><Layers className="w-4 h-4 text-emerald-500"/> Proforma Invoice</td>
                    <td className="p-4 text-slate-600">A detailed commitment of the final costs after the buyer has agreed, but before final delivery.</td>
                    <td className="p-4 text-slate-600">None. Does not trigger accounts payable/receivable.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900 flex items-center gap-2"><FileText className="w-4 h-4 text-blue-500"/> Regular Invoice</td>
                    <td className="p-4 text-slate-600">Final, legally binding demand for payment after goods/services are delivered.</td>
                    <td className="p-4 text-slate-600">Recorded as Accounts Receivable (for you) and Accounts Payable (for client).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">When Should You Use a Proforma Invoice?</h2>
            <ul className="space-y-4">
              <li className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <strong className="text-emerald-900 block mb-1">1. For Customs and International Shipping</strong>
                <span className="text-emerald-800 text-sm">Customs officials need to know the value of items coming into a country to assess duties and taxes. A proforma provides this detail before the actual sale is finalized.</span>
              </li>
              <li className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <strong className="text-emerald-900 block mb-1">2. When Requiring Advance Payment</strong>
                <span className="text-emerald-800 text-sm">If you need a client to pay upfront before you manufacture goods or start a broad service, a proforma shows them exactly what they are paying for without messing up their immediate accounting books until delivery.</span>
              </li>
              <li className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <strong className="text-emerald-900 block mb-1">3. Securing Internal Purchase Orders</strong>
                <span className="text-emerald-800 text-sm">Many large corporations require a proforma invoice to get internal approval to cut a Purchase Order (PO).</span>
              </li>
            </ul>
          </section>

          <div className="bg-emerald-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Looking to create an invoice?</h2>
            <p className="text-emerald-100 mb-6">Create professional regular or proforma invoices using our easy tool. No sign-up required.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white text-emerald-600 font-bold py-3 px-6 rounded-lg hover:bg-emerald-50 transition-colors">
              Create Invoice Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" /> Keep Learning
            </h2>
            <Link href="/guides/invoice-vs-quotation" className="group flex items-center justify-between bg-white border border-slate-200 rounded-xl p-5 hover:border-emerald-300 hover:shadow-sm transition-all">
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">Invoice vs. Quotation: What&quot;s the Difference?</p>
                <p className="text-sm text-slate-500 mt-1">5 min read</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
