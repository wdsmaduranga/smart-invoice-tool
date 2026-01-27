import InvoiceGenerator from "@/components/InvoiceGenerator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section for SEO */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Smart Invoice & Quotation Tool
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Professional Generator - Create invoices and quotes in seconds
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Our free online tool helps businesses create professional invoices and quotations with ease. 
            Features include PDF export, multi-currency support, and customizable templates. 
            Perfect for freelancers and small businesses.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-8">
            <span className="bg-white px-3 py-1 rounded-full shadow">✓ 100% Free</span>
            <span className="bg-white px-3 py-1 rounded-full shadow">✓ PDF Export</span>
            <span className="bg-white px-3 py-1 rounded-full shadow">✓ Multi-Currency</span>
          </div>
          
          <div className="flex justify-center gap-4 mb-12">
            <a href="/login" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Login / Sign Up
            </a>
             <a href="/dashboard" className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Go to Dashboard
            </a>
          </div>
        </div>
      </section>
      
      <InvoiceGenerator />
      
      {/* Features Section for SEO */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Smart Invoice Tool?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Streamline your billing process with our comprehensive invoice and quotation tool
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">PDF Export</h4>
              <p className="text-gray-600">Download your invoices as high-quality PDF files ready for printing or digital sharing.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Multi-Currency Support</h4>
              <p className="text-gray-600">Support for 10+ major currencies including USD, EUR, GBP, LKR, and more.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Preview</h4>
              <p className="text-gray-600">See your invoice update in real-time as you make changes with our live preview feature.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section for SEO */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Is the invoice generator completely free?
              </h4>
              <p className="text-gray-600">
                Yes, our tool is 100% free. Create unlimited invoices and quotations, export to PDF, and use all features without any cost.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                What currencies are supported?
              </h4>
              <p className="text-gray-600">
                We support 10+ major currencies including USD, EUR, GBP, LKR (Sri Lankan Rupee), INR, JPY, CAD, AUD, CHF, and CNY.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Can I add my company logo to invoices?
              </h4>
              <p className="text-gray-600">
                Yes, you can easily upload your company logo and it will appear on both the preview and PDF export of your invoice.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Do I need to create an account?
              </h4>
              <p className="text-gray-600">
                No registration is required. You can start creating professional invoices immediately without signing up or providing personal information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
