import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Shield, Globe, FileText, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Smart Invoice Tool - Professional Invoice Generator",
  description: "Learn about Smart Invoice Tool, the free professional invoice generator. Our mission is to help businesses worldwide create professional invoices with ease.",
  keywords: "about smart invoice tool, invoice generator company, free invoice software, professional invoicing",
  openGraph: {
    title: "About Smart Invoice Tool - Professional Invoice Generator",
    description: "Learn about Smart Invoice Tool, the free professional invoice generator helping businesses worldwide.",
    url: "https://smartinvoicetool.com/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Simplifying Invoicing for Everyone
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We believe professional invoicing should be free, simple, and accessible to businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border border-slate-100">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-600 font-medium">Free Forever</div>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0">
              <div className="text-4xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-slate-600 font-medium">Sign-up Required</div>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-slate-600 font-medium">Currencies Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              At Smart Invoice Tool, we&apos;re on a mission to empower freelancers and small businesses by removing the friction from getting paid. we&apos;ve built a tool that prioritizes speed, privacy, and professionalism without the heavy price tag.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Lightning Fast</h3>
                  <p className="text-slate-600">Generate professional invoices in seconds. No complex setup or learning curve required.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Shield className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Privacy First</h3>
                  <p className="text-slate-600">Your data stays on your device. We don&apos;t store your invoice details on our servers.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Globe className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Global Ready</h3>
                  <p className="text-slate-600">Support for multiple currencies and professional formats accepted worldwide.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  "No hidden fees or subscriptions",
                  "Professional PDF export",
                  "Customizable templates",
                  "Automatic calculations",
                  "Mobile-friendly interface",
                  "Instant preview"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your First Invoice?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of freelancers and businesses who trust Smart Invoice Tool for their billing needs.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30"
          >
            <FileText className="w-5 h-5" />
            Create Free Invoice
          </Link>
        </div>
      </section>
    </main>
  );
}
