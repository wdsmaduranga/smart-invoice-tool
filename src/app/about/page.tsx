import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Shield, Globe, FileText, CheckCircle, Users, Heart, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Smart Invoice Tool - Free Professional Invoice Generator",
  description: "Learn about Smart Invoice Tool — our mission is to help freelancers and small businesses create professional invoices instantly. Free, private, and no sign-up required.",
  keywords: "about smart invoice tool, invoice generator company, free invoice software, professional invoicing, freelance billing tool",
  openGraph: {
    title: "About Smart Invoice Tool - Free Professional Invoice Generator",
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
            We believe professional invoicing should be free, simple, and accessible to businesses of all sizes — anywhere in the world.
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

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Story</h2>
            <div className="w-16 h-1 bg-blue-600 rounded mx-auto"></div>
          </div>
          <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
            <p className="text-lg leading-relaxed">
              Smart Invoice Tool was born out of a simple frustration: why does creating a professional invoice have to be so complicated — or expensive? As freelancers and small business owners ourselves, we experienced firsthand the friction of using bloated, subscription-based invoicing platforms just to bill a client for a few hours of work.
            </p>
            <p className="text-lg leading-relaxed">
              We built Smart Invoice Tool to eliminate that friction entirely. Our goal was straightforward — create a tool that any freelancer, consultant, or small business owner could open in a browser, fill in a few fields, and download a polished, professional PDF invoice in under two minutes. No account creation. No credit card. No monthly fees. Just a clean, reliable tool that works.
            </p>
            <p className="text-lg leading-relaxed">
              Today, Smart Invoice Tool is used by thousands of professionals across the globe — from independent designers in Europe to IT consultants in Asia to handymen in North America. Every feature we add is guided by one principle: does this genuinely help someone get paid faster?
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Creating a professional invoice takes less than two minutes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Fill In Your Details",
                desc: "Enter your business name, client information, and a description of the services or products provided. Add line items with quantities and unit prices.",
              },
              {
                step: "02",
                title: "Preview Instantly",
                desc: "As you type, a live preview updates in real time. Adjust the currency, add your logo, set payment terms, and ensure everything looks exactly right.",
              },
              {
                step: "03",
                title: "Download as PDF",
                desc: "Click 'Download PDF' to instantly save a high-quality, print-ready invoice to your device. Send it to your client via email — that's it.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center">
                <div className="text-5xl font-black text-blue-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who It&apos;s For</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Smart Invoice Tool is designed for anyone who needs to bill clients professionally, without complexity.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <Users className="w-6 h-6" />, title: "Freelancers", desc: "Writers, designers, developers, photographers, and creatives who invoice clients project-by-project." },
              { icon: <Target className="w-6 h-6" />, title: "Consultants", desc: "Business, IT, and marketing consultants who need clean, professional invoices for hourly or project billing." },
              { icon: <FileText className="w-6 h-6" />, title: "Small Businesses", desc: "Shops, agencies, and service businesses that need fast invoicing without enterprise-level complexity." },
              { icon: <Zap className="w-6 h-6" />, title: "Contractors", desc: "Construction, plumbing, electrical, and trade contractors who need simple, clear invoices for each job." },
              { icon: <Heart className="w-6 h-6" />, title: "Non-Profits", desc: "Organizations that need to issue receipts or invoices for goods and services in a clean format." },
              { icon: <Globe className="w-6 h-6" />, title: "Global Users", desc: "Professionals worldwide who need multi-currency support and internationally accepted invoice formats." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              At Smart Invoice Tool, we&apos;re on a mission to empower freelancers and small businesses by removing the friction from getting paid. We&apos;ve built a tool that prioritizes speed, privacy, and professionalism — without the heavy price tag.
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
                  <p className="text-slate-600">Generate professional invoices in seconds. No complex setup or learning curve required. Open the page, fill it in, download your PDF.</p>
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
                  <p className="text-slate-600">Your data stays on your device. We don&apos;t store your invoice details on our servers — your client information and business data remain completely private.</p>
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
                  <p className="text-slate-600">Support for multiple currencies and professional formats accepted worldwide. Whether you bill in USD, EUR, GBP, INR, or LKR — we have you covered.</p>
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
                  "Automatic tax calculations",
                  "Mobile-friendly interface",
                  "Instant live preview",
                  "Company logo upload",
                  "Multi-currency support",
                  "No account required",
                  "Data stays on your device",
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
            Join thousands of freelancers and businesses who trust Smart Invoice Tool for their billing needs. It&apos;s free, fast, and requires no sign-up.
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
