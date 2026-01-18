export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Terms of Service</h1>
          
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
          
          <div className="prose prose-slate prose-lg max-w-none">
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing or using Smart Invoice Tool (&quot;the Service&quot;), you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, then you may not access the Service.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. Use of Service</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You agree to use our service only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>You provide accurate information when creating invoices.</li>
                <li>You do not use the service for fraudulent activities.</li>
                <li>You maintain the security of your account credentials.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. User Accounts</h2>
              <p className="text-slate-600 leading-relaxed">
                When you create an account with us, you must provide us information that is accurate, complete, and current at all times. 
                Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Smart Invoice Tool and its licensors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                In no event shall Smart Invoice Tool, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, 
                special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

             <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">6. Changes to Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those 
                revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
