import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Invoicing Guides & Tips - Smart Invoice Tool",
  description: "Free guides and tips on invoicing, quotations, billing, and getting paid faster. Learn how to write a professional invoice, understand payment terms, and manage your billing.",
  keywords: "invoicing guides, how to write an invoice, invoice tips, quotation guide, billing best practices, freelance invoicing",
  openGraph: {
    title: "Invoicing Guides & Tips - Smart Invoice Tool",
    description: "Free guides on invoicing, quotations, and billing best practices to help you get paid faster.",
    url: "https://smartinvoicetool.com/guides",
  },
  alternates: {
    canonical: "/guides",
  },
};

const guides = [
  {
    slug: "how-to-write-an-invoice",
    title: "How to Write a Professional Invoice",
    description: "A complete step-by-step guide to creating a professional invoice. Learn what every invoice must include, how to format it, and best practices for getting paid on time.",
    readTime: "6 min read",
    category: "Invoicing Basics",
    tags: ["Invoice", "Getting Paid", "Freelancing"],
  },
  {
    slug: "invoice-vs-quotation",
    title: "Invoice vs. Quotation: What's the Difference?",
    description: "Confused about when to send an invoice versus a quotation? This guide explains the difference, when to use each document, and how to convert a quote into an invoice.",
    readTime: "5 min read",
    category: "Invoicing Basics",
    tags: ["Quotation", "Invoice", "Billing"],
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/20 rounded-full mb-6 border border-blue-400/30">
            <BookOpen className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Invoicing Guides & Tips</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about invoicing, billing, and getting paid — written for freelancers and small business owners.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {guide.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {guide.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed flex-1 text-sm">
                    {guide.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-blue-600 rounded-2xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-3">Ready to create your invoice?</h2>
            <p className="text-blue-100 mb-6">Put your knowledge to use — create a professional invoice in seconds.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Create Free Invoice
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
