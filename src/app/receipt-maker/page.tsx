import InvoiceGenerator from "@/components/InvoiceGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Online Receipt Maker & Generator | Smart Invoice Tool",
  description: "Create professional receipts instantly with our free online receipt maker. Download as PDF, customize with your logo, and send to customers in seconds.",
  keywords: "receipt maker, free receipt generator, create receipt online, pdf receipt maker, cash receipt generator",
  openGraph: {
    title: "Free Online Receipt Maker & Generator",
    description: "Create professional receipts instantly with our free online receipt maker. No sign-up required.",
    url: "https://smartinvoicetool.com/receipt-maker",
  },
  alternates: {
    canonical: "/receipt-maker",
  },
};

export default function ReceiptMakerPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section for SEO */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Free Online Receipt Maker
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Generate professional, print-ready PDF receipts in seconds
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Need to provide proof of payment to a customer? Our free receipt generator lets you instantly create customized cash receipts, sales receipts, and payment confirmations. Download as a PDF immediately with no sign-up required.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-8">
            <span className="bg-white px-3 py-1 rounded-full shadow">✓ 100% Free</span>
            <span className="bg-white px-3 py-1 rounded-full shadow">✓ Instant PDF Download</span>
            <span className="bg-white px-3 py-1 rounded-full shadow">✓ No Signup Needed</span>
          </div>
        </div>
      </section>
      
      {/* The Tool itself */}
      <InvoiceGenerator />
      
      {/* How to Make a Receipt Section */}
      <section className="bg-white py-16 text-gray-700">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How to Create a Receipt Online
            </h3>
            <p className="text-gray-600">
              Transform our generator into a professional receipt maker in just a few clicks.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-emerald-50 p-6 rounded-lg shadow-sm border border-emerald-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">1. Change the Title</h4>
              <p>In the top right corner of the generator, simply delete the word &quot;INVOICE&quot; and type &quot;RECEIPT&quot; or &quot;CASH RECEIPT&quot;. This immediately changes the legal nature of the document.</p>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg shadow-sm border border-emerald-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">2. Add Payment Details</h4>
              <p>Enter the customer&apos;s information and list exactly what was purchased. In the &quot;Notes&quot; or &quot;Terms&quot; section, prominently write &quot;PAID IN FULL&quot; and specify the payment method used (e.g., &quot;Paid via Credit Card ending in 1234&quot;).</p>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg shadow-sm border border-emerald-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">3. Download and Send</h4>
              <p>Review the live preview to ensure all amounts are correct, then click download to instantly generate a branded PDF receipt to immediately email to your customer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use a Receipt Maker */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            The Importance of Providing Written Receipts
          </h3>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              A receipt is critical for both you and your customer. It acts as the final, legal acknowledgment that a transaction has been completed and that the buyer has paid the agreed-upon amount. Without a receipt, your customer may not be able to expense the purchase through their own accounting department or claim warranties on physical goods.
            </p>
            <p>
              Using our <strong>online receipt maker</strong> ensures that you provide a consistent, professional record for every transaction. Unlike handwritten receipt books from the local office supply store, our digital PDFs look incredibly professional, clearly itemize taxes, and are completely free. You can use this tool to generate rent receipts, petty cash receipts, donation receipts, and standard business sales receipts.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
