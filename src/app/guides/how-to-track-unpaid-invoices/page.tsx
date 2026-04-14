import type { Metadata } from "next";
import Link from "next/link";
import { Clock, TrendingUp, Mail, AlertCircle, ArrowRight, BookOpen, CheckCircle, Shield, PhoneCall } from "lucide-react";

export const revalidate = 86400; // ISR: revalidate once per day

export const metadata: Metadata = {
  title: "How to Track Unpaid Invoices and Get Paid Faster | Smart Invoice Tool",
  description: "Learn effective strategies to track unpaid invoices, set up an accounts receivable system, and write follow-up emails that get clients to pay. Practical templates included.",
  keywords: "unpaid invoices, how to track invoices, getting paid faster, accounts receivable, invoice follow up emails, past due invoices, overdue invoice, invoice reminder",
  openGraph: {
    title: "How to Track Unpaid Invoices and Get Paid Faster",
    description: "Discover exactly how to manage your outstanding invoices and politely follow up to secure the funds you are owed.",
    url: "https://smartinvoicetool.com/guides/how-to-track-unpaid-invoices",
  },
  alternates: {
    canonical: "/guides/how-to-track-unpaid-invoices",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Track Unpaid Invoices and Get Paid Faster",
  "description": "Learn effective strategies to track unpaid invoices, organize your accounts receivable, and write follow-up emails that get clients to pay.",
  "url": "https://smartinvoicetool.com/guides/how-to-track-unpaid-invoices",
  "datePublished": "2025-03-01",
  "dateModified": "2025-04-14",
  "author": { "@type": "Organization", "name": "Smart Invoice Tool", "url": "https://smartinvoicetool.com" },
  "publisher": { "@type": "Organization", "name": "Smart Invoice Tool", "url": "https://smartinvoicetool.com" },
  "inLanguage": "en-US",
  "isPartOf": { "@type": "WebSite", "name": "Smart Invoice Tool", "url": "https://smartinvoicetool.com" }
};

export default function TrackUnpaidInvoicesGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

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
            <span className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 9 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            How to Track Unpaid Invoices and Get Paid Faster
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Creating an invoice is only the first step. Ensuring that invoice actually gets paid — on time — is where true business management lies. Over 60% of small businesses report that late payments negatively affect their cash flow. This guide gives you a proven system to track outstanding invoices, write effective follow-up emails, and protect yourself legally when clients don&apos;t pay.
          </p>
          {/* Author block */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100">
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-teal-600 text-sm">SI</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Smart Invoice Team</p>
              <p className="text-xs text-slate-500">Published March 2025 · Updated April 2025</p>
            </div>
          </div>
        </div>
      </section>

      <article className="py-12 px-4">
        <div className="container mx-auto max-w-3xl space-y-12">

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Importance of an Accounts Receivable System</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you send invoices via email and just wait to see bank deposits show up, you do not have a system — you have a hope. Without a structured approach, invoices get buried in inboxes, forgotten by both clients and yourself, and you have no clear picture of how much money your business is actually owed at any given moment.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Accounts receivable (AR) refers to all the money owed to your business for goods or services already delivered. Keeping your AR organized is not just good practice — it directly determines whether your business can pay its own bills on time.
            </p>
            <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row gap-6 shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Track Everything in One Place</h3>
                <p className="text-slate-600 text-sm">Whether you use a spreadsheet or dedicated software, you need a single ledger that records: Invoice Number, Client Name, Invoice Date, Amount, Due Date, and Current Status (Sent, Viewed, Paid, Overdue). Reviewing this list weekly takes five minutes and can save you thousands.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Setting Up Your Invoice Tracking Spreadsheet</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              You don&apos;t need expensive software to get started. A simple spreadsheet with the following columns is enough to manage your receivables effectively when you&apos;re a solo freelancer or small business:
            </p>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead className="bg-teal-700 text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Column</th>
                    <th className="text-left p-4 font-semibold">What to Enter</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Invoice #", "INV-001, INV-002... (sequential)"],
                    ["Client", "Company or individual name"],
                    ["Issue Date", "Date you sent the invoice"],
                    ["Due Date", "Payment deadline"],
                    ["Amount", "Total amount owed (with currency)"],
                    ["Status", "Sent / Viewed / Paid / Overdue"],
                    ["Follow-up Date", "When to send the next reminder"],
                    ["Notes", "Any relevant payment discussions"],
                  ].map(([col, desc]) => (
                    <tr key={col} className="hover:bg-slate-50">
                      <td className="p-4 font-semibold text-slate-800">{col}</td>
                      <td className="p-4 text-slate-600">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm bg-teal-50 border border-teal-200 rounded-lg p-4">
              💡 <strong>Pro tip:</strong> Colour-code your "Status" column: green for Paid, yellow for Sent/Due Soon, and red for Overdue. A quick visual scan at the start of each week tells you exactly where your attention is needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Invoice Status Labels Explained</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Using consistent status labels across all your invoices removes ambiguity. Here are the four standard statuses and what they mean:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Sent", color: "bg-blue-50 border-blue-200", dot: "bg-blue-500", desc: "Invoice delivered to the client. Payment has not yet been received." },
                { label: "Viewed", color: "bg-purple-50 border-purple-200", dot: "bg-purple-500", desc: "Client has opened the invoice. Use this if your tool tracks email open rates." },
                { label: "Paid", color: "bg-green-50 border-green-200", dot: "bg-green-500", desc: "Payment received and confirmed. Archive the invoice for tax records." },
                { label: "Overdue", color: "bg-red-50 border-red-200", dot: "bg-red-500", desc: "Past the due date with no payment. Immediately trigger your follow-up workflow." },
              ].map(({ label, color, dot, desc }) => (
                <div key={label} className={`border rounded-xl p-4 ${color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${dot}`}></span>
                    <span className="font-bold text-slate-900">{label}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">The Follow-Up Timeline</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              When an invoice becomes past due, awkwardness frequently stops business owners from reaching out. Automate your thought process by adhering to a strict follow-up schedule. The key is to be professional, persistent, and never emotionally reactive.
            </p>

            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <h3 className="font-bold text-slate-900">1. The &quot;Before It&apos;s Due&quot; Reminder (3 Days Prior)</h3>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-slate-600 mb-3">Keep it extremely friendly. This is just a helpful nudge, not a demand. Many clients genuinely appreciate budget reminders.</p>
                  <div className="bg-slate-50 p-3 rounded text-sm font-mono text-slate-700 leading-relaxed">
                    Subject: Friendly Reminder — Invoice #1234 Due Friday<br /><br />
                    &quot;Hi [Name], Hope you&apos;re having a great week! Just a quick, friendly reminder that invoice #1234 for $500 is due this Friday, [Date]. I&apos;ve attached a copy for your convenience. Please don&apos;t hesitate to reach out if you have any questions!&quot;
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-amber-50 p-4 border-b border-amber-100 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <h3 className="font-bold text-slate-900">2. The &quot;Overdue&quot; Notice (1–3 Days Late)</h3>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-slate-600 mb-3">Direct, but assume positive intent — they may have simply forgotten or the invoice went to spam.</p>
                  <div className="bg-slate-50 p-3 rounded text-sm font-mono text-slate-700 leading-relaxed">
                    Subject: Invoice #1234 — Payment Overdue<br /><br />
                    &quot;Hi [Name], I&apos;m writing to follow up on invoice #1234 (attached) for $500, which was due on [Date]. Could you let me know if this has been processed or if you need an alternative payment method? I appreciate your prompt attention to this.&quot;
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-orange-50 p-4 border-b border-orange-100 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">3. The &quot;Second Notice&quot; (7 Days Late)</h3>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-slate-600 mb-3">More firm. Make it clear the delay is affecting your business and request an update.</p>
                  <div className="bg-slate-50 p-3 rounded text-sm font-mono text-slate-700 leading-relaxed">
                    Subject: Second Notice — Invoice #1234 Now 7 Days Overdue<br /><br />
                    &quot;Hi [Name], Invoice #1234 for $500 is now 7 days past due. I need to request that payment be made by [Date + 5 days]. Please confirm receipt of this email and let me know when to expect payment. If there is an issue, I am happy to discuss payment arrangements.&quot;
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-red-50 p-4 border-b border-red-100 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold text-slate-900">4. The &quot;Late Fee&quot; Enforcement (14 Days Late)</h3>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-slate-600 mb-3">Firm professional boundaries. Introduce the late fee as stated in your original payment terms.</p>
                  <div className="bg-slate-50 p-3 rounded text-sm font-mono text-slate-700 leading-relaxed">
                    Subject: URGENT — Invoice #1234 Now 14 Days Overdue + Late Fee Applied<br /><br />
                    &quot;Hi [Name], Invoice #1234 is now two weeks past due. Per my payment terms, a late fee of 1.5% has been applied. The updated total is $507.50. Please find the revised invoice attached and remit payment by [Date] to avoid further penalties.&quot;
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Protecting Yourself: Late Fees and Payment Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              A late fee only works if it was agreed upon before the invoice was sent. The best way to protect yourself legally is to include your payment terms clearly in your initial contract or proposal, and repeat them on every invoice.
            </p>
            <div className="space-y-3">
              {[
                "State your late fee rate explicitly: e.g., '1.5% per month (18% per annum) applied to balances unpaid after the due date'",
                "Include payment terms on every invoice in the Notes section (e.g., 'Net 15 — Late fees apply after [date]')",
                "Get client signatures on your initial contract or a written email confirmation before starting work",
                "Keep all correspondence about payment in writing — emails and messages are legally admissible evidence",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-white border border-slate-200 p-4 rounded-lg">
                  <Shield className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">When They Still Don&apos;t Pay</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If emails are going unanswered beyond 21 days, it&apos;s time to escalate. Pick up the phone. A two-minute phone call can resolve a payment dispute that dozens of emails could not — sometimes the email simply ended up in spam, or the accounts department changed personnel.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              If the client is actively avoiding you, pause all ongoing work until the balance is cleared. As a last resort — typically 60–90 days past due — you have the following options:
            </p>
            <div className="space-y-3">
              {[
                { title: "Small Claims Court", desc: "For amounts under the local small claims limit (varies by country/state), this is a cost-effective route. Filing fees are low and you don't need a lawyer." },
                { title: "Debt Collection Agency", desc: "They will recover the debt for a commission (typically 20–40% of the amount owed). Good for amounts where legal action isn't worth your time." },
                { title: "Write It Off as a Bad Debt", desc: "In many countries, you can deduct an unpaid invoice as a business loss on your taxes. Consult your accountant — you may recover part of the loss at tax time." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4 bg-white border border-slate-200 p-5 rounded-xl">
                  <PhoneCall className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">{title}</p>
                    <p className="text-slate-600 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Prevention: Getting Paid on Time from the Start</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The best way to manage unpaid invoices is to reduce their occurrence in the first place. These practices dramatically improve your on-time payment rate:
            </p>
            <div className="space-y-3">
              {[
                "Require a 30–50% deposit before beginning any project",
                "Invoice immediately upon delivery — every day you wait is a day added to payment time",
                "Offer multiple payment options (bank transfer, credit card, PayPal, etc.)",
                "Use a professional PDF invoice with all required fields — unprofessional invoices get deprioritized",
                "Include a direct payment link on the invoice itself",
                "Set calendar alerts for every invoice due date and follow-up schedule",
                "For repeat clients, consider a retainer or recurring billing arrangement",
              ].map((tip, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-white border border-slate-200 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-teal-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Simplify your invoicing</h2>
            <p className="text-teal-100 mb-6">Create clear, professional invoices that include proper due dates, payment terms, and late fee clauses — all free.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white text-teal-600 font-bold py-3 px-6 rounded-lg hover:bg-teal-50 transition-colors">
              Create Invoice <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" /> Related Guides
            </h2>
            <div className="space-y-3">
              {[
                { href: "/guides/how-to-write-an-invoice", title: "How to Write a Professional Invoice", time: "6 min read" },
                { href: "/guides/freelance-invoicing-guide", title: "The Ultimate Guide to Invoicing for Freelancers", time: "8 min read" },
                { href: "/guides/top-10-invoicing-mistakes", title: "Top 10 Invoicing Mistakes Small Businesses Make", time: "7 min read" },
                { href: "/guides/invoice-vs-quotation", title: "Invoice vs. Quotation: What\u2019s the Difference?", time: "5 min read" },
              ].map(({ href, title, time }) => (
                <Link key={href} href={href} className="group flex items-center justify-between bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-sm transition-all">
                  <div>
                    <p className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">{title}</p>
                    <p className="text-sm text-slate-500 mt-1">{time}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
