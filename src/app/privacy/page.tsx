export default function PrivacyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
          
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
          
          <div className="prose prose-slate prose-lg max-w-none">
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We collect information you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Create an account or profile.</li>
                <li>Create, edit, or save invoices.</li>
                <li>Request customer support or communicate with us.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, including accounting and invoicing features. 
                We may also use the information to send you technical notices, updates, security alerts, and support messages.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. Data Storage & Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                Your invoice data is stored securely and is only accessible by you.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. Cookies and Tracking</h2>
              <p className="text-slate-600 leading-relaxed">
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

             <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. Third-Party Services</h2>
              <p className="text-slate-600 leading-relaxed">
                We may employ third-party companies and individuals to facilitate our Service (&quot;Service Providers&quot;), to provide the Service on our behalf, 
                to perform Service-related services or to assist us in analyzing how our Service is used.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">6. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:support@smartinvoicetool.com" className="text-blue-600 hover:underline">support@smartinvoicetool.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
