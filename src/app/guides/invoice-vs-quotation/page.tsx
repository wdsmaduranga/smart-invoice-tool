import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight, Clock, BookOpen, CheckCircle, AlertCircle } from "lucide-react";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Invoice vs. Quotation: What's the Difference? | Smart Invoice Tool",
  description: "Understand the difference between an invoice and a quotation. Learn when to use each document, how to convert a quote to an invoice, and best practices for freelancers and small businesses.",
  keywords: "invoice vs quotation, quote vs invoice, difference between invoice and quotation, when to send quotation, when to send invoice, estimate vs invoice, proforma invoice",
  openGraph: {
    title: "Invoice vs. Quotation: What's the Difference?",
    description: "Learn when to use an invoice versus a quotation, how they differ, and how to convert a quote into an invoice.",
    url: "https://smartinvoicetool.com/guides/invoice-vs-quotation",
  },
  alternates: {
    canonical: "/guides/invoice-vs-quotation",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Invoice vs. Quotation: What's the Difference?",
  "description": "Understand the key differences between an invoice and a quotation and learn when to use each document in your billing lifecycle.",
  "url": "https://smartinvoicetool.com/guides/invoice-vs-quotation",
  "datePublished": "2025-02-15",
  "dateModified": "2025-04-14",
  "author": { "@type": "Organization", "name": "Smart Invoice Tool", "url": "https://smartinvoicetool.com" },
  "publisher": { "@type": "Organization", "name": "Smart Invoice Tool", "url": "https://smartinvoicetool.com" },
  "inLanguage": "en-US",
};

export default function InvoiceVsQuotationPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 py-4 px-4">
        <div className="container mx-auto max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-blue-600">Guides</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Invoice vs. Quotation</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-white pt-12 pb-8 px-4 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Invoicing Basics</span>
            <span className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 7 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Invoice vs. Quotation: What&apos;s the Difference?
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            If you&apos;ve ever been unsure whether to send an invoice or a quotation to a client, you&apos;re not alone. These two documents serve very different purposes in the billing lifecycle, and mixing them up can cause confusion, payment delays, and awkward conversations about money. This guide explains every difference clearly.
          </p>
          {/* Author block */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-blue-600 text-sm">SI</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Smart Invoice Team</p>
              <p className="text-xs text-slate-500">Published February 2025 · Updated April 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-3xl space-y-12">

          {/* Quick Comparison */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Comparison at a Glance</h2>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold"></th>
                    <th className="text-left p-4 font-semibold">Quotation</th>
                    <th className="text-left p-4 font-semibold">Invoice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["When sent", "Before work begins", "After work is completed"],
                    ["Purpose", "Estimate the cost", "Request payment"],
                    ["Legally binding?", "Usually not", "Yes (when accepted)"],
                    ["Requires payment?", "No", "Yes"],
                    ["Includes due date?", "No", "Yes"],
                    ["Includes invoice number?", "No", "Yes (required)"],
                    ["Called also", "Quote, Estimate, Proposal", "Bill, Tax Invoice"],
                  ].map(([aspect, quote, invoice]) => (
                    <tr key={aspect} className="hover:bg-slate-50">
                      <td className="p-4 font-semibold text-slate-700">{aspect}</td>
                      <td className="p-4 text-slate-600">{quote}</td>
                      <td className="p-4 text-slate-600">{invoice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* What is a Quotation */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What is a Quotation?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              A <strong>quotation</strong> (also called a quote, estimate, or proposal) is a document you send to a prospective client <em>before</em> any work begins. It sets out exactly what services or products you plan to provide and what the expected cost will be.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              When a client asks &quot;How much will this cost?&quot; — your answer is a quotation. The client can either accept, reject, or negotiate the quote. Once they accept it, both parties have agreed to the scope and price.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Quotations are particularly important for service businesses and contractors where the scope of work needs to be agreed upon before starting. They protect you from scope creep (clients adding work without additional payment) and protect the client from surprise costs.
            </p>
            <p className="text-slate-600 leading-relaxed">
              A well-written quotation should include: your business details, client details, a description of the proposed work, a price breakdown per item or service, the total cost, an expiry date (e.g., &quot;Valid for 30 days&quot;), and your terms and conditions.
            </p>
            <div className="mt-4 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <p className="text-slate-700 text-sm"><strong>Example:</strong> A web designer sends a quotation for $2,500 to build a 5-page website, with itemized costs for design, development, and revisions. The client reviews and approves it. Work begins.</p>
            </div>
          </section>

          {/* What is an Invoice */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What is an Invoice?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              An <strong>invoice</strong> is a document you send to a client <em>after</em> work has been completed (or at an agreed billing milestone) requesting payment. It is a formal demand for money owed, and once issued, it creates a legal obligation for the client to pay within the stated terms.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Unlike a quotation, an invoice has a specific due date. It provides a permanent financial record for both parties and is required for proper bookkeeping and tax compliance. In many countries, VAT or GST invoices are a legal requirement for registered businesses.
            </p>
            <p className="text-slate-600 leading-relaxed">
              An invoice should match the originally agreed price from the quotation (unless additional work was authorized). Any discrepancies between the quote and invoice should be discussed with the client before sending.
            </p>
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-slate-700 text-sm"><strong>Example:</strong> The same web designer completes the website and sends invoice INV-042 for $2,500, due in 14 days, with bank account details and a payment link. This matches the approved quotation.</p>
            </div>
          </section>

          {/* What is a Proforma Invoice */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What About a Proforma Invoice?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              A <strong>proforma invoice</strong> sits between a quotation and a final invoice. It is a preliminary bill that looks like a real invoice but is explicitly marked as &quot;Proforma&quot; — meaning it is not a demand for payment yet.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Proforma invoices are commonly used in international trade to declare the value of goods for customs purposes, or in advance of delivering a service to give the client an official document to get internal budget approval before committing.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Quotation", color: "bg-indigo-50 border-indigo-200 text-indigo-700", note: "Before work. No payment required. Estimate only." },
                { label: "Proforma Invoice", color: "bg-amber-50 border-amber-200 text-amber-700", note: "Before payment. For customs or budget approval purposes." },
                { label: "Tax Invoice", color: "bg-green-50 border-green-200 text-green-700", note: "After work. Payment required. Legally binding." },
              ].map(({ label, color, note }) => (
                <div key={label} className={`border rounded-xl p-4 ${color}`}>
                  <p className="font-bold mb-1">{label}</p>
                  <p className="text-slate-600 text-sm">{note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Billing lifecycle */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">The Typical Billing Lifecycle</h2>
            <div className="space-y-3">
              {[
                { step: "1", label: "Client inquiry", desc: "Client asks about your services and pricing" },
                { step: "2", label: "Send Quotation", desc: "You send a detailed quote with scope and cost" },
                { step: "3", label: "Client approves", desc: "Client accepts the quote (verbal, email, or signature)" },
                { step: "4", label: "Work begins", desc: "You deliver the agreed services or products" },
                { step: "5", label: "Send Invoice", desc: "You invoice the client for the completed work" },
                { step: "6", label: "Client pays", desc: "Payment is made by the due date" },
                { step: "7", label: "Issue receipt", desc: "Optionally confirm receipt of payment" },
              ].map(({ step, label, desc }) => (
                <div key={step} className="flex gap-4 items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step}
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-lg px-4 py-3 flex items-center justify-between">
                    <span className="font-semibold text-slate-900">{label}</span>
                    <span className="text-slate-500 text-sm hidden sm:block">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* When to use which */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">When to Use Each Document</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">Q</span>
                  Use a Quotation when...
                </h3>
                <ul className="space-y-2">
                  {[
                    "A client asks for a price estimate",
                    "The project scope needs to be agreed upon",
                    "You want to outline deliverables before starting",
                    "Submitting a formal bid or tender",
                    "The price may change based on client feedback",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">I</span>
                  Use an Invoice when...
                </h3>
                <ul className="space-y-2">
                  {[
                    "Work has been completed or delivered",
                    "You've reached a billing milestone",
                    "Requesting a deposit or upfront payment",
                    "Billing for recurring services (monthly)",
                    "You need a formal payment record for taxes",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Common mistakes */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Mistakes When Using Quotes and Invoices</h2>
            <div className="space-y-3">
              {[
                "Sending an invoice without first getting an approved quotation — leads to payment disputes",
                "Not including an expiry date on your quotation — clients may accept months later at the old price",
                "Treating a quotation as legally binding — only a signed contract or accepted invoice creates a firm obligation",
                "Changing the amount on the final invoice without informing the client first",
                "Not converting the quotation number to an invoice number — always use sequential invoice numbering",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-amber-50 border border-amber-100 p-4 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Converting a Quote to Invoice */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Converting a Quotation into an Invoice</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Once work is complete and the client has approved the quote, converting it to an invoice is straightforward. The core content (line items, prices, descriptions) stays the same — you just change the document type and add the necessary invoice fields:
            </p>
            <div className="space-y-3">
              {[
                "Change the document title from 'Quotation' to 'Invoice'",
                "Add a unique invoice number (e.g., INV-001)",
                "Add the invoice date (today's date)",
                "Add a payment due date",
                "Add your bank account details or payment method",
                "Remove any 'quote valid until' expiry language",
              ].map((step, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-white border border-slate-200 p-4 rounded-lg text-sm text-slate-700">
                  <span className="font-bold text-blue-600 flex-shrink-0">{idx + 1}.</span>
                  {step}
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
            <FileText className="w-10 h-10 mx-auto mb-4 text-blue-200" />
            <h2 className="text-2xl font-bold mb-3">Create your invoice or quotation now</h2>
            <p className="text-blue-100 mb-6">Smart Invoice Tool supports both invoices and quotations — free, fast, and no sign-up required.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Create for Free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Related */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" /> Related Guides
            </h2>
            <div className="space-y-3">
              {[
                { href: "/guides/how-to-write-an-invoice", title: "How to Write a Professional Invoice", time: "9 min read" },
                { href: "/guides/proforma-vs-regular-invoice", title: "Proforma vs Regular Invoice: Key Differences", time: "5 min read" },
                { href: "/guides/how-to-track-unpaid-invoices", title: "How to Track Unpaid Invoices and Get Paid Faster", time: "9 min read" },
                { href: "/guides/freelance-invoicing-guide", title: "The Ultimate Guide to Invoicing for Freelancers", time: "8 min read" },
              ].map(({ href, title, time }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center justify-between bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <div>
                    <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{title}</p>
                    <p className="text-sm text-slate-500 mt-1">{time}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
