import type { Metadata } from "next";
import Link from "next/link";
import { Clock, TrendingUp, Mail, AlertCircle, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Track Unpaid Invoices and Get Paid Faster | Smart Invoice Tool",
  description: "Learn effective strategies to track unpaid invoices, organize your accounts receivable, and write follow-up emails that get clients to pay.",
  keywords: "unpaid invoices, how to track invoices, getting paid faster, accounts receivable, invoice follow up emails, past due invoices",
  openGraph: {
    title: "How to Track Unpaid Invoices and Get Paid Faster",
    description: "Discover exactly how to manage your outstanding invoices and politely follow up to secure the funds you are owed.",
    url: "https://smartinvoicetool.com/guides/how-to-track-unpaid-invoices",
  },
  alternates: {
    canonical: "/guides/how-to-track-unpaid-invoices",
  },
};

export default function TrackUnpaidInvoicesGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-4 px-4">
        <div className="container mx-auto max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-teal-600">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-teal-600">Guides</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Tracking Unpaid Invoices</span>
          </nav>
        </div>
      </div>

      <section className="bg-white pt-12 pb-8 px-4 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold bg-teal-100 text-teal-700 px-3 py-1 rounded-full">Cash Flow Management</span>
            <span className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 6 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            How to Track Unpaid Invoices and Get Paid Faster
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Creating an invoice is only the first step. Ensuring that invoice actually gets paid—on time—is where true business management lies. Here are proven strategies for tracking outstanding invoices and successfully requesting payment.
          </p>
        </div>
      </section>

      <article className="py-12 px-4">
        <div className="container mx-auto max-w-3xl space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Importance of an Accounts Receivable System</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you send invoices via email and just wait to see bank deposits show up, you do not have a system; you have a hope. Over 60% of small businesses experience late payments every year, purely because they lose track of who owes them what.
            </p>
            <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row gap-6 shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Track Everything in One Place</h3>
                <p className="text-slate-600 text-sm">Whether you use spreadsheet templates or dedicated accounting software, you need a single ledger that records: Invoice Date, Client Name, Amount, Due Date, and Current Status (Sent, Viewed, Paid, Overdue).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">The Follow-Up Timeline</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              When an invoice becomes past due, awkwardness frequently stops business owners from reaching out. Automate your thought process by adhering to a strict follow-up schedule.
            </p>
            
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <h3 className="font-bold text-slate-900">1. The &quot;Before It&apos;s Due&quot; Reminder (3 Days Prior)</h3>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-slate-600 mb-3">Keep it extremely friendly. This is just a helpful nudge.</p>
                  <div className="bg-slate-50 p-3 rounded text-sm font-mono text-slate-700">
                    &quot;Hi [Name], Hope you&apos;re having a great week! Just sending a quick, friendly reminder that invoice #1234 is due on Friday. I&apos;ve attached a copy here for your convenience. Let me know if you have any questions!&quot;
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-amber-50 p-4 border-b border-amber-100 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <h3 className="font-bold text-slate-900">2. The &quot;Overdue&quot; Notice (1-3 Days Late)</h3>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-slate-600 mb-3">Direct, but assume positive intent (e.g., they just forgot).</p>
                  <div className="bg-slate-50 p-3 rounded text-sm font-mono text-slate-700">
                    &quot;Hi [Name], I&apos;m writing to check on the status of invoice #1234 (attached) for $500, which was due on [Date]. Please let me know if this has already been processed, or if you need an alternative payment link.&quot;
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-red-50 p-4 border-b border-red-100 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold text-slate-900">3. The &quot;Late Fee&quot; Enforcement (14 Days Late)</h3>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-slate-600 mb-3">Firm professional boundries. Introduce the late fee.</p>
                  <div className="bg-slate-50 p-3 rounded text-sm font-mono text-slate-700">
                    &quot;Hi [Name], Invoice #1234 is now two weeks past due. Per my payment terms, a late fee of 1.5% has now been added to the balance. The new total is $507.50. Please find the updated invoice attached and remit payment by [Date] to avoid further penalties.&quot;
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">When They Still Don&apos;t Pay</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If emails are going unanswered after 30 days, escalate to a phone call. Sometimes emails simply get lost in spam filters or buried in an inbox. A quick, polite phone call can instantly clear up a miscommunication.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If the client is actively avoiding you, you may need to pause all current work for them until the balance is cleared. As a last resort (usually past 60-90 days), you can look into small claims court or pass the debt onto a collections agency, though these options usually fracture the business relationship permanently.
            </p>
          </section>

          <div className="bg-teal-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Simplify your invoicing</h2>
            <p className="text-teal-100 mb-6">Create clear, professional invoices that include proper due dates and payment terms.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white text-teal-600 font-bold py-3 px-6 rounded-lg hover:bg-teal-50 transition-colors">
              Create Invoice <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" /> Keep Learning
            </h2>
            <Link href="/guides/freelance-invoicing-guide" className="group flex items-center justify-between bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-sm transition-all">
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">The Ultimate Guide to Invoicing for Freelancers</p>
                <p className="text-sm text-slate-500 mt-1">8 min read</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
