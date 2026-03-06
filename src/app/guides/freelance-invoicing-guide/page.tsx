import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Briefcase, FileText, CheckCircle, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "The Ultimate Guide to Invoicing for Freelancers | Smart Invoice Tool",
  description: "Learn how to manage invoices as a freelancer. From setting payment terms to tracking overdue payments and everything you need for successful freelance billing.",
  keywords: "freelance invoicing, freelancer invoice guide, how to invoice clients, freelance payment terms, freelance billing tips",
  openGraph: {
    title: "The Ultimate Guide to Invoicing for Freelancers",
    description: "Learn the best practices of invoicing as a freelancer, setting clear payment terms, and ensuring you get paid quickly and efficiently.",
    url: "https://smartinvoicetool.com/guides/freelance-invoicing-guide",
  },
  alternates: {
    canonical: "/guides/freelance-invoicing-guide",
  },
};

export default function FreelanceInvoicingGuidePage() {
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
            <span className="text-slate-900 font-medium">Freelance Invoicing Guide</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-white pt-12 pb-8 px-4 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Freelancing</span>
            <span className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 8 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            The Ultimate Guide to Invoicing for Freelancers
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            As a freelancer, your invoicing process is just as important as the quality of your work. If you don&quot;t bill correctly, you don&quot;t get paid. This comprehensive guide covers everything from establishing payment terms to dealing with late-paying clients.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-3xl space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Your Invoicing Process Matters</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              When transitioning from traditional employment to freelancing, one of the biggest changes is that a paycheck no longer magically appears in your bank account every two weeks. You have to actively request payment for your services. A proper invoicing process ensures that you maintain a steady cash flow and presents you as a professional business owner rather than a hobbyist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Establish Clear Terms Before You Start</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The biggest mistake new freelancers make is waiting until the end of a project to discuss payment terms. Everything should be agreed upon in your initial contract or proposal.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <Briefcase className="w-6 h-6 text-indigo-500 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">Upfront Deposits</h3>
                <p className="text-slate-600 text-sm">Always require a deposit before starting work. A 50% upfront / 50% upon completion model is standard for most freelance projects.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <Clock className="w-6 h-6 text-indigo-500 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">Net Payment Terms</h3>
                <p className="text-slate-600 text-sm">Decide if you use &quot;Net 15&quot; or &quot;Net 30&quot;. As a freelancer, tighter terms like &quot;Net 15&quot; or &quot;Due on Receipt&quot; are usually better for your cash flow.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Make Invoices Easy to Read and Pay</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Your client should be able to look at your invoice and instantly know: who it&quot;s from, what it&quot;s for, how much is owed, and how to pay it. Avoid confusing jargon and format your document professionally.
            </p>
            <ul className="space-y-3">
              {[
                "Itemize your work clearly (e.g., 'Website Design - Homepage' instead of just 'Web Work')",
                "Include direct links to pay online (PayPal, Stripe, or Bank Transfer details)",
                "Send invoices as a PDF to prevent accidental editing",
                "Ensure your invoice is mobile-friendly, as many clients open emails on their phones",
              ].map((tip, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Dealing with Late Payments</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Every freelancer eventually deals with a client who pays late. Your goal is to be politely persistent. Here is a standard follow-up schedule:
            </p>
            <div className="border-l-4 border-indigo-500 pl-6 space-y-4">
              <div>
                <strong className="text-slate-900 block">3 Days Before Due Date:</strong>
                <span className="text-slate-600 text-sm">Send a friendly reminder that a payment is coming up.</span>
              </div>
              <div>
                <strong className="text-slate-900 block">Day After Due Date:</strong>
                <span className="text-slate-600 text-sm">Send a direct message stating the invoice is now overdue.</span>
              </div>
              <div>
                <strong className="text-slate-900 block">7 Days Overdue:</strong>
                <span className="text-slate-600 text-sm">Apply your agreed-upon late fee and resend the updated invoice.</span>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-indigo-600 rounded-2xl p-8 text-white text-center">
            <FileText className="w-10 h-10 mx-auto mb-4 text-indigo-200" />
            <h2 className="text-2xl font-bold mb-3">Professional Invoices Built for Freelancers</h2>
            <p className="text-indigo-100 mb-6">Create fully customizable, PDF-ready invoices instantly with our free tool.</p>
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
              <BookOpen className="w-5 h-5 text-indigo-600" /> Keep Learning
            </h2>
            <Link
              href="/guides/how-to-write-an-invoice"
              className="group flex items-center justify-between bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-sm transition-all"
            >
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">How to Write a Professional Invoice</p>
                <p className="text-sm text-slate-500 mt-1">6 min read</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
