import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Briefcase, FileText, CheckCircle, ArrowRight, BookOpen, DollarSign, Shield, AlertCircle } from "lucide-react";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "The Ultimate Guide to Invoicing for Freelancers | Smart Invoice Tool",
  description: "Learn how to manage invoices as a freelancer. From setting payment terms to tracking overdue payments, requiring deposits, and everything you need for successful freelance billing.",
  keywords: "freelance invoicing, freelancer invoice guide, how to invoice clients, freelance payment terms, freelance billing tips, deposit invoice freelancer, freelance late payment",
  openGraph: {
    title: "The Ultimate Guide to Invoicing for Freelancers",
    description: "Learn the best practices of invoicing as a freelancer, setting clear payment terms, and ensuring you get paid quickly and efficiently.",
    url: "https://smartinvoicetool.com/guides/freelance-invoicing-guide",
  },
  alternates: {
    canonical: "/guides/freelance-invoicing-guide",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Ultimate Guide to Invoicing for Freelancers",
  "description": "A comprehensive guide to invoicing for freelancers: payment terms, deposits, late payment management, and professional billing practices.",
  "url": "https://smartinvoicetool.com/guides/freelance-invoicing-guide",
  "datePublished": "2025-02-10",
  "dateModified": "2025-04-14",
  "author": { "@type": "Organization", "name": "Smart Invoice Tool", "url": "https://smartinvoicetool.com" },
  "publisher": { "@type": "Organization", "name": "Smart Invoice Tool", "url": "https://smartinvoicetool.com" },
  "inLanguage": "en-US",
};

export default function FreelanceInvoicingGuidePage() {
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
            <Link href="/" className="hover:text-indigo-600">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-indigo-600">Guides</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Freelance Invoicing Guide</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-white pt-12 pb-8 px-4 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Freelancing</span>
            <span className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 10 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            The Ultimate Guide to Invoicing for Freelancers
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            As a freelancer, your invoicing process is just as important as the quality of your work. If you don&apos;t bill correctly, you don&apos;t get paid. This comprehensive guide covers everything from writing your first invoice to setting up professional payment terms, requiring deposits, handling late payers, and protecting your business legally.
          </p>
          {/* Author block */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-indigo-600 text-sm">SI</span>
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

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Your Invoicing Process Matters</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              When transitioning from traditional employment to freelancing, one of the biggest changes is that a paycheck no longer automatically appears in your bank account every two weeks. You have to actively request payment for your services — every single time you complete work.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              A survey of UK freelancers found that 71% experienced late payment in the past year, with the average outstanding balance reaching over £6,000. The root cause in most cases? Unclear payment terms, delayed invoicing, and lack of follow-up systems.
            </p>
            <p className="text-slate-600 leading-relaxed">
              A proper invoicing process ensures you maintain a steady cash flow and presents you as a professional business owner rather than a hobbyist. Clients who receive clean, well-structured invoices consistently pay faster than those who receive informal payment requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Establish Clear Terms Before You Start</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The biggest mistake new freelancers make is waiting until the end of a project to discuss payment terms. Everything should be agreed upon in your initial contract or proposal — before a single hour of work begins.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <Briefcase className="w-6 h-6 text-indigo-500 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">Upfront Deposits</h3>
                <p className="text-slate-600 text-sm">Always require a deposit before starting work. A 50% upfront / 50% upon completion model is standard for most freelance projects. For new clients or large projects, consider 100% upfront for small amounts.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <Clock className="w-6 h-6 text-indigo-500 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">Net Payment Terms</h3>
                <p className="text-slate-600 text-sm">Decide if you use &ldquo;Net 15&rdquo; or &ldquo;Net 30&rdquo;. As a freelancer, tighter terms like &ldquo;Net 15&rdquo; or &ldquo;Due on Receipt&rdquo; are typically better for your cash flow. Negotiate Net terms with your client before starting.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <DollarSign className="w-6 h-6 text-indigo-500 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">Late Fee Policy</h3>
                <p className="text-slate-600 text-sm">State your late fee rate in your contract AND on every invoice. A common rate is 1.5% per month (18% annually). This creates a financial incentive for timely payment.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <Shield className="w-6 h-6 text-indigo-500 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">Written Contracts</h3>
                <p className="text-slate-600 text-sm">Even a simple email confirmation of scope, price, and payment terms counts. Keep all agreements in writing — verbal agreements are nearly impossible to enforce.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How to Structure Your Freelance Invoice</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Every freelance invoice must include these core sections to be professionally complete and legally effective:
            </p>
            <div className="space-y-3">
              {[
                { num: "01", title: "Header", desc: "The word 'INVOICE' prominently displayed. Your name/business name and logo if you have one." },
                { num: "02", title: "Invoice Details", desc: "A unique invoice number, invoice date, and due date. Without these, it's just a note, not an invoice." },
                { num: "03", title: "Your Contact Info", desc: "Your email, phone, address, and tax ID (if applicable). Clients need this to process your payment." },
                { num: "04", title: "Client Info", desc: "Client name, company, billing address. For large companies, address it to the Accounts Payable department." },
                { num: "05", title: "Itemized Work", desc: "List every task or deliverable separately. Include: description, hours/quantity, rate, and line total. Be specific." },
                { num: "06", title: "Totals", desc: "Subtotal, any applicable tax (VAT/GST), discounts, and the bold grand total with currency specified." },
                { num: "07", title: "Payment Instructions", desc: "How to pay you: bank transfer details, PayPal email, Stripe link, or any other method. Make it easy." },
                { num: "08", title: "Terms & Notes", desc: "Payment terms (Net 15), late fee clause, and any project-specific notes like &ldquo;50% deposit received&rdquo;." },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex gap-4 bg-white border border-slate-200 p-4 rounded-xl">
                  <span className="text-2xl font-black text-indigo-100 flex-shrink-0 w-10 text-right">{num}</span>
                  <div>
                    <p className="font-semibold text-slate-900">{title}</p>
                    <p className="text-slate-600 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Make Invoices Easy to Read and Pay</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Your client should be able to look at your invoice and instantly know: who it&apos;s from, what it&apos;s for, how much is owed, and how to pay it. Avoid confusing jargon and format your document professionally.
            </p>
            <ul className="space-y-3">
              {[
                "Itemize your work clearly (e.g., 'Homepage Design — 8 hours @ $85/hr' instead of just 'Design work')",
                "Include direct links to pay online (PayPal, Stripe, bank transfer details)",
                "Always send invoices as a PDF to prevent accidental editing and ensure consistent formatting",
                "Keep descriptions client-friendly — avoid technical jargon your client may not understand",
                "Include your project/PO number if the client requires one for their accounting system",
              ].map((tip, idx) => (
                <li key={idx} className="flex gap-3 items-start list-none">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Freelance Invoicing for Different Work Types</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              How you structure your invoice depends on the nature of your freelance work:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { type: "Hourly Projects", advice: "Log your hours in a time-tracking app. On the invoice, show: task description, hours logged, and your hourly rate. Attach a time log for complete transparency." },
                { type: "Fixed-Price Projects", advice: "Break the fixed price into deliverable milestones (e.g., Discovery 20%, Design 40%, Development 30%, Launch 10%). Invoice at each milestone." },
                { type: "Retainer Clients", advice: "Send a recurring invoice at the start of each month for the agreed retainer amount. Automate this with your invoicing tool to save time." },
                { type: "Product Sales", advice: "List each product as a line item with quantity and unit price. Include shipping costs as a separate line. Specify delivery timeline in the notes." },
              ].map(({ type, advice }) => (
                <div key={type} className="bg-white border border-slate-200 rounded-xl p-5">
                  <p className="font-bold text-slate-900 mb-2">{type}</p>
                  <p className="text-slate-600 text-sm">{advice}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Dealing with Late Payments</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Every freelancer eventually deals with a client who pays late. Your goal is to be politely persistent without damaging the relationship — unless the client is clearly acting in bad faith.
            </p>
            <div className="border-l-4 border-indigo-500 pl-6 space-y-5">
              {[
                { time: "3 Days Before Due Date", action: "Send a friendly reminder email. Attach the invoice again. Keep it warm and positive." },
                { time: "Day After Due Date", action: "Send a direct message stating the invoice is now overdue. Ask for a status update and ETA for payment." },
                { time: "7 Days Overdue", action: "Apply your agreed-upon late fee. Send an updated invoice with the new total and firm language." },
                { time: "14 Days Overdue", action: "Send a formal letter of demand. Consider pausing any ongoing work until payment is cleared." },
                { time: "30+ Days Overdue", action: "Consider involving a collections agency or small claims court. Weigh the cost against the amount owed." },
              ].map(({ time, action }) => (
                <div key={time}>
                  <strong className="text-slate-900 block">{time}:</strong>
                  <span className="text-slate-600 text-sm">{action}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Red Flags: Clients Who May Not Pay</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              After experience with multiple clients, most freelancers can spot problem payers early. Watch out for these warning signs before you start work:
            </p>
            <div className="space-y-3">
              {[
                "Pushes back heavily on a small deposit requirement",
                "Asks for work to start before signing any contract or agreement",
                "Cannot tell you who the invoice should be sent to (no clear accounts payable contact)",
                "Makes vague promises about payment timelines ('we always pay on time, don't worry')",
                "Has no reviews, testimonials, or online presence you can verify",
                "Rushes you to start immediately but has a vague scope of work",
              ].map((flag, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-red-50 border border-red-100 p-4 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm">{flag}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-indigo-600 rounded-2xl p-8 text-white text-center">
            <FileText className="w-10 h-10 mx-auto mb-4 text-indigo-200" />
            <h2 className="text-2xl font-bold mb-3">Professional Invoices Built for Freelancers</h2>
            <p className="text-indigo-100 mb-6">Create fully customizable, PDF-ready invoices instantly with our free tool. No signup required.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Start Free Invoice <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Related Articles */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" /> Related Guides
            </h2>
            <div className="space-y-3">
              {[
                { href: "/guides/how-to-write-an-invoice", title: "How to Write a Professional Invoice", time: "9 min read" },
                { href: "/guides/how-to-track-unpaid-invoices", title: "How to Track Unpaid Invoices and Get Paid Faster", time: "9 min read" },
                { href: "/guides/top-10-invoicing-mistakes", title: "Top 10 Invoicing Mistakes Small Businesses Make", time: "7 min read" },
                { href: "/guides/invoice-vs-quotation", title: "Invoice vs. Quotation: What\u2019s the Difference?", time: "7 min read" },
              ].map(({ href, title, time }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center justify-between bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                  <div>
                    <p className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">{title}</p>
                    <p className="text-sm text-slate-500 mt-1">{time}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
