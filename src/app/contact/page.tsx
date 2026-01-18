import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Smart Invoice Tool - Get Help & Support",
  description: "Contact Smart Invoice Tool for support, feedback, or questions about our free invoice generator. We're here to help with your invoicing needs.",
  keywords: "contact smart invoice tool, invoice generator support, help with invoicing, customer service",
  openGraph: {
    title: "Contact Smart Invoice Tool - Get Help & Support",
    description: "Contact Smart Invoice Tool for support, feedback, or questions about our free invoice generator.",
    url: "https://smartinvoicetool.com/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Contact Us
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              We&apos;d love to hear from you! Whether you have questions about using Smart Invoice Tool, 
              suggestions for new features, or need technical support, we&apos;re here to help.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
                <p className="text-gray-600 mb-4">
                  Need help with creating invoices or using our features? Our support team is ready to assist you.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-semibold">Response Time: Within 24 hours</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Feedback</h3>
                <p className="text-gray-600 mb-4">
                  Have ideas for improving Smart Invoice Tool? We value your feedback and suggestions.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold">We review all feedback</p>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Is Smart Invoice Tool really free?</h4>
                  <p className="text-gray-600">Yes, our invoice generator is 100% free with no hidden costs or limitations.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Do I need to create an account?</h4>
                  <p className="text-gray-600">No registration is required. You can start creating invoices immediately.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Can I add my company logo?</h4>
                  <p className="text-gray-600">Yes, you can upload your company logo and it will appear on your invoices.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Still Need Help?</h3>
              <p className="text-gray-600 mb-4">
                If you can&apos;t find the answer you&apos;re looking for, please don&apos;t hesitate to reach out to us.
              </p>
              <a 
                href="mailto:support@smartinvoicetool.com" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send us an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
