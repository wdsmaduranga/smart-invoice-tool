import type { Metadata } from "next";
import Link from "next/link";
import { Clock, AlertTriangle, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Top 10 Invoicing Mistakes Small Businesses Make | Smart Invoice Tool",
  description: "Avoid these common invoicing mistakes that delay payments and hurt your cash flow. Learn how to optimize your billing process.",
  keywords: "invoicing mistakes, billing errors, small business invoicing, how to not invoice, invoice errors, late payments",
  openGraph: {
    title: "Top 10 Invoicing Mistakes Small Businesses Make",
    description: "Discover the most common billing errors that result in delayed payments and how to fix them easily.",
    url: "https://smartinvoicetool.com/guides/top-10-invoicing-mistakes",
  },
  alternates: {
    canonical: "/guides/top-10-invoicing-mistakes",
  },
};

export default function InvoicingMistakesGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-4 px-4">
        <div className="container mx-auto max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-amber-600">Guides</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Top 10 Invoicing Mistakes</span>
          </nav>
        </div>
      </div>

      <section className="bg-white pt-12 pb-8 px-4 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">Best Practices</span>
            <span className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 7 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Top 10 Invoicing Mistakes Small Businesses Make (And How to Fix Them)
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every billing error adds days, or even weeks, to your payment timeline. Discover the most common invoicing mistakes businesses make—and how to ensure your invoices get paid on time, every time.
          </p>
        </div>
      </section>

      <article className="py-12 px-4">
        <div className="container mx-auto max-w-3xl space-y-12">
          
          <section>
            <p className="text-slate-600 leading-relaxed mb-8">
              Cash flow is the lifeblood of any small business. While finding new clients and doing great work is essential, failing to manage your invoicing process can leave your bank account dry. If you find yourself constantly chasing down payments, you might be making one of these common mistakes.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "1. Forgetting to Issue the Invoice Promptly",
                  desc: "The longer you wait to send an invoice, the longer the client will take to pay. Send invoices immediately upon completion of services or product delivery while the value you provided is still fresh in the client's mind."
                },
                {
                  title: "2. Not Specifying Clear Payment Terms",
                  desc: "Never leave the due date blank or set it to 'Upon Receipt' without previous conversation. Stick to standard terms like Net 15 or Net 30, and make sure the exact due date (e.g., 'Due by October 15, 2026') is printed visibly on the invoice."
                },
                {
                  title: "3. Sending Invoices to the Wrong Person",
                  desc: "Mailing the invoice to your main point of contact when it should go directly to the Accounts Payable department is a recipe for delay. Always ask 'Who should I send invoices to?' upfront."
                },
                {
                  title: "4. Ambiguous Line Items",
                  desc: "Billing for 'Web Services - $2,000' is likely to get pushback. Be specific: 'Website Redesign: 5 Pages, Mobile Optimization, and 1 Month Support - $2,000'."
                },
                {
                  title: "5. Missing Payment Instructions",
                  desc: "Do you want a check, wire transfer, or PayPal? Ensure your banking details, links, or mailing address are bold and clear at the bottom of the invoice."
                },
                {
                  title: "6. Typos and Mathematical Errors",
                  desc: "An invoice with incorrect math looks unprofessional and gives the client an excuse to delay payment while they ask for a revision. Always use an automated invoice generator to calculate taxes and totals."
                },
                {
                  title: "7. Failing to Establish Late Fees",
                  desc: "If there's no penalty for paying late, clients will prioritize the bills that do have penalties. Specify late terms, like '1.5% interest per month applied to late payments'."
                },
                {
                  title: "8. Not Following Up",
                  desc: "You cannot be passive about getting paid. Set calendar reminders to follow up courteously the day before an invoice is due, and firmly if it passes the deadline."
                },
                {
                  title: "9. Unprofessional Formatting",
                  desc: "A messy word document doesn't inspire confidence. Use branded, cleanly aligned PDF invoices with your logo to communicate authority and professionalism."
                },
                {
                  title: "10. Surprise Charges",
                  desc: "Never add unexpected fees or expenses to an invoice without prior authorization. This breaks trust and guarantees payment disputes. Keep everything transparent."
                }
              ].map((mistake, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{mistake.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{mistake.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-amber-500 rounded-2xl p-8 text-white text-center">
            <AlertTriangle className="w-10 h-10 mx-auto mb-4 text-amber-100" />
            <h2 className="text-2xl font-bold mb-3">Stop making invoice errors</h2>
            <p className="text-amber-50 mb-6">Our automated system handles the math, formatting, and layout for you.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white text-amber-600 font-bold py-3 px-6 rounded-lg hover:bg-amber-50 transition-colors">
              Create Mistake-Free Invoice <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-600" /> Keep Learning
            </h2>
            <Link href="/guides/how-to-track-unpaid-invoices" className="group flex items-center justify-between bg-white border border-slate-200 rounded-xl p-5 hover:border-amber-300 hover:shadow-sm transition-all">
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">How to Track Unpaid Invoices</p>
                <p className="text-sm text-slate-500 mt-1">6 min read</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
