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

      {/* SEO Content Section: How to Make an Invoice */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How to Create an Invoice Online
            </h3>
            <p className="text-gray-600">
              Follow these simple steps to generate your professional invoice in under two minutes.
            </p>
          </div>
          
          <div className="space-y-8 text-gray-700">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">1. Add Your Business Details</h4>
              <p>Start by entering your company name, email address, physical address, and phone number. This ensures your client knows exactly who the invoice is from. You can also upload a professional business logo to build trust.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">2. Enter the Client&apos;s Information</h4>
              <p>Input the &quot;Bill To&quot; details, including your client&apos;s name or company, their billing address, and contact information. A correct billing address is crucial for large organizations where invoices are processed by a dedicated accounts payable department.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">3. Itemize Your Products or Services</h4>
              <p>Clearly list the services provided or items sold. Include detailed descriptions, quantities, and the unit price. Our online generator will automatically calculate the line totals, keeping your math error-free.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">4. Set the Terms and Taxes</h4>
              <p>Add any applicable sales tax, VAT, or discounts. Don&apos;t forget to define the payment terms (e.g., Net 30, Due on Receipt) in the notes section, and provide clear payment instructions such as bank account details or PayPal payment links.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">5. Download as PDF</h4>
              <p>Once everything looks perfect in the live preview, click the download button to generate a clean, professional PDF invoice that is ready to be emailed to your client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section: Why Professional Invoicing Matters */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Use a Dedicated Invoice Generator?
          </h3>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              As a freelancer, contractor, or small business owner, managing your cash flow is critical to your success. A common pitfall is relying on disorganized Word documents or messy Excel spreadsheets to bill clients. This not only looks unprofessional but also dramatically increases the chances of calculation errors and missing payment terms.
            </p>
            <p>
              Our <strong>Smart Invoice Tool</strong> is designed to solve this exact problem. By formatting your data into a legally compliant, standardized layout, you remove the friction between delivering your work and getting paid. A beautifully formatted, PDF-ready invoice signals to your clients that you are a serious professional, which in turn encourages faster payment times.
            </p>
            <p>
              Furthermore, using our web-based tool means you don&apos;t have to download bulky software or pay expensive monthly subscriptions. It operates securely in your browser, ensuring that your financial data and client information remain private. Whether you are creating a preliminary quotation, a proforma invoice, or a final billing statement, our responsive generator scales to meet your exact business needs.
            </p>
          </div>
        </div>
      </section>

      {/* New Section: Supported Invoice Types */}
      <section className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Types of Invoices You Can Create
            </h3>
            <p className="text-indigo-200 max-w-2xl mx-auto">
              Our free generator supports all standard commercial invoicing formats required by modern accounting standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-xl font-bold mb-2 text-blue-300">Standard Invoice</h4>
              <p className="text-sm text-indigo-100">The standard billing document listing the completed services or products, quantities, prices, payment terms, and overall balance due.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-xl font-bold mb-2 text-blue-300">Proforma Invoice</h4>
              <p className="text-sm text-indigo-100">A preliminary bill sent before work begins or products are delivered. It acts as an estimate and commits the seller to the listed price.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-xl font-bold mb-2 text-blue-300">Commercial Invoice</h4>
              <p className="text-sm text-indigo-100">Specifically designed for importing and exporting goods across borders, containing required details for international customs declarations.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-xl font-bold mb-2 text-blue-300">Quotation / Estimate</h4>
              <p className="text-sm text-indigo-100">Sent to prospective clients detailing the cost of proposed projects. Once approved, it can be quickly converted into a standard invoice.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-xl font-bold mb-2 text-blue-300">Retainer Invoice</h4>
              <p className="text-sm text-indigo-100">Sent to clients upfront to secure an advance payment before periodic services commence, common in agency or consulting contracts.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-xl font-bold mb-2 text-blue-300">Credit Note / Invoice</h4>
              <p className="text-sm text-indigo-100">Issued to adjust, reduce, or completely void the value of a previously sent invoice due to adjustments, errors, or returns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Invoicing Best Practices */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Best Practices for Smarter Invoicing
            </h3>
            <p className="text-gray-600">
              Adopt these professional invoicing strategies to minimize late payments and maintain a healthy cash flow.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex-shrink-0 flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Outline Clear Terms (Net 15 / Net 30)</h4>
                <p className="text-gray-650 text-sm">Always state the exact payment deadline and acceptable payment methods. Defining terms like &quot;Net 30&quot; (due in 30 days) or &quot;Due on Receipt&quot; sets expectations early and leaves no room for confusion.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex-shrink-0 flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Send Invoices Instantly</h4>
                <p className="text-gray-650 text-sm">Do not delay your billing. The best time to send an invoice is immediately upon completing a milestone or delivering the project when the value you provided is still fresh in the client&apos;s mind.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex-shrink-0 flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Itemize Everything to Prevent Questions</h4>
                <p className="text-gray-650 text-sm">Provide clear, granular descriptions for all charges instead of a single lump sum. Clients are much quicker to approve and process bills that show exactly what hours, materials, or tasks are being charged.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex-shrink-0 flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Follow Up Gently but Systematically</h4>
                <p className="text-gray-650 text-sm">Send a friendly payment reminder three to five days before an invoice becomes due, and immediately if the deadline passes. Consistency shows clients that you take your billing seriously.</p>
              </div>
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
