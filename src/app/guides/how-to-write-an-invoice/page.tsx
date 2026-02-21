import type { Metadata } from "next";
import Link from "next/link";
import { FileText, CheckCircle, AlertCircle, ArrowRight, Clock, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Write a Professional Invoice - Complete Guide | Smart Invoice Tool",
  description: "Learn how to write a professional invoice step-by-step. Discover what every invoice must include, how to format it correctly, set payment terms, and ensure you get paid on time.",
  keywords: "how to write an invoice, professional invoice guide, invoice format, invoice elements, invoice payment terms, how to create invoice",
  openGraph: {
    title: "How to Write a Professional Invoice - Complete Guide",
    description: "Step-by-step guide to creating a professional invoice. Everything from required elements to payment terms and common mistakes.",
    url: "https://smartinvoicetool.com/guides/how-to-write-an-invoice",
  },
  alternates: {
    canonical: "/guides/how-to-write-an-invoice",
  },
};

export default function HowToWriteInvoicePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 py-4 px-4">
        <div className="container mx-auto max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-blue-600">Guides</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">How to Write a Professional Invoice</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-white pt-12 pb-8 px-4 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Invoicing Basics</span>
            <span className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 6 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            How to Write a Professional Invoice
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you&apos;re a freelancer sending your first invoice or a small business owner looking to sharpen your billing process, this guide walks you through exactly what a professional invoice needs — and how to make sure you get paid on time.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-3xl space-y-12">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What is an Invoice?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              An invoice is a formal document sent from a seller (you) to a buyer (your client) that requests payment for goods or services rendered. It serves as a legally significant record of the transaction and forms the basis of your accounts receivable.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Unlike a receipt — which confirms that payment has already been made — an invoice is a <strong>request for payment</strong>. It specifies exactly what was delivered, how much is owed, and by when payment is expected. A properly constructed invoice protects both you and your client.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Essential Elements Every Invoice Must Include</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              A professional invoice should contain the following information. Missing any of these can delay payment, cause confusion, or even make the invoice legally unenforceable in some jurisdictions.
            </p>
            <div className="space-y-4">
              {[
                {
                  number: "1",
                  title: "The Word \"Invoice\"",
                  desc: "This seems obvious, but many people forget to explicitly label the document as an invoice. This removes all ambiguity for accounting departments and tax purposes."
                },
                {
                  number: "2",
                  title: "A Unique Invoice Number",
                  desc: "Every invoice must have a unique reference number (e.g., INV-001 or INV-2025-047). This is essential for your own record-keeping and is often required by clients' accounting systems when they process payments."
                },
                {
                  number: "3",
                  title: "Invoice Date & Due Date",
                  desc: "The invoice date is when you issued the invoice. The due date is when payment is expected. Common payment terms are 'Net 15' (due in 15 days), 'Net 30' (30 days), or 'Due on Receipt'."
                },
                {
                  number: "4",
                  title: "Your Business Information",
                  desc: "Include your full name or business name, mailing address, email address, and phone number. If you're VAT/GST registered, include your tax registration number."
                },
                {
                  number: "5",
                  title: "Client's Information",
                  desc: "Include your client's full name or company name, their billing address, and a contact name (e.g., accounts payable department). This avoids the invoice getting lost in large organizations."
                },
                {
                  number: "6",
                  title: "Itemized List of Services or Products",
                  desc: "List each product or service as a separate line item. Include a description, quantity, unit price, and the total for each line. Clear itemization prevents disputes and shows exactly what the client is paying for."
                },
                {
                  number: "7",
                  title: "Subtotal, Tax, and Total",
                  desc: "Show the subtotal (before tax), any applicable taxes (VAT, GST, sales tax) as a separate line, and the final total amount due. Always show the currency clearly (e.g., USD $1,500.00)."
                },
                {
                  number: "8",
                  title: "Payment Methods & Instructions",
                  desc: "Tell your client how to pay you. Include your bank account details, PayPal address, payment link, or any other accepted payment method. The easier you make it for them to pay, the faster you'll receive your money."
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-4 bg-white p-5 rounded-xl border border-slate-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Payment Terms Best Practices</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Your payment terms directly affect how quickly you get paid. Here are the most commonly used terms and when to use them:
            </p>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left p-4 font-semibold text-slate-700">Term</th>
                    <th className="text-left p-4 font-semibold text-slate-700">Meaning</th>
                    <th className="text-left p-4 font-semibold text-slate-700">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Due on Receipt", "Payment expected immediately", "Small or one-time clients"],
                    ["Net 7", "Payment due in 7 days", "Short projects, trusted clients"],
                    ["Net 15", "Payment due in 15 days", "Standard freelance work"],
                    ["Net 30", "Payment due in 30 days", "Established businesses, agencies"],
                    ["Net 60", "Payment due in 60 days", "Enterprise/corporate clients"],
                  ].map(([term, meaning, bestFor]) => (
                    <tr key={term} className="hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-900">{term}</td>
                      <td className="p-4 text-slate-600">{meaning}</td>
                      <td className="p-4 text-slate-600">{bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 leading-relaxed mt-4 text-sm bg-blue-50 border border-blue-200 rounded-lg p-4">
              💡 <strong>Pro tip:</strong> Add a late payment clause to your invoices, for example: &quot;Invoices unpaid after 30 days are subject to a 1.5% monthly late fee.&quot; This gives clients an incentive to pay on time.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Invoice Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                "Sending the invoice to the wrong person or email address",
                "Forgetting to include your bank account or payment details",
                "Not specifying the due date (clients may delay indefinitely)",
                "Using non-sequential invoice numbers that confuse accounting systems",
                "Leaving out the currency — especially important for international clients",
                "Vague line item descriptions like 'Services rendered' instead of specific work",
                "Not following up after the due date passes",
              ].map((mistake, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-red-50 border border-red-100 p-4 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm">{mistake}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Tips for Getting Paid Faster</h2>
            <div className="space-y-3">
              {[
                "Send your invoice immediately when work is delivered — don't delay",
                "Use a professional PDF format (not a Word doc or handwritten note)",
                "Make payment super easy: include a direct payment link if possible",
                "Send a polite reminder 3–5 days before the due date",
                "Follow up the day after the due date if payment hasn't arrived",
                "For new clients, consider requiring a 50% deposit before starting work",
                "State your late fee policy clearly on every invoice",
              ].map((tip, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-green-50 border border-green-100 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
            <FileText className="w-10 h-10 mx-auto mb-4 text-blue-200" />
            <h2 className="text-2xl font-bold mb-3">Ready to make your first invoice?</h2>
            <p className="text-blue-100 mb-6">Use Smart Invoice Tool to create a professional, PDF-ready invoice in under 2 minutes — completely free.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Create Invoice Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Related Articles */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" /> Related Guides
            </h2>
            <Link
              href="/guides/invoice-vs-quotation"
              className="group flex items-center justify-between bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Invoice vs. Quotation: What&apos;s the Difference?</p>
                <p className="text-sm text-slate-500 mt-1">5 min read</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
