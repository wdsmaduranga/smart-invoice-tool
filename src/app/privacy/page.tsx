import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Smart Invoice Tool",
  description:
    "Read the Smart Invoice Tool Privacy Policy. Learn how we handle your data, use cookies, and display advertising through Google AdSense.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>

          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">
            <span>Last updated: January 27, 2025</span>
          </div>

          <div className="prose prose-slate prose-lg max-w-none space-y-8">

            <section>
              <p className="text-slate-600 leading-relaxed">
                Welcome to <strong>Smart Invoice Tool</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), accessible at{" "}
                <a href="https://smartinvoicetool.com" className="text-blue-600 hover:underline">
                  smartinvoicetool.com
                </a>
                . This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our free invoice generator tool.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Please read this policy carefully. If you disagree with its terms, please stop using our site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We collect minimal information to provide our service:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>
                  <strong>Invoice Data:</strong> All invoice content you enter (business name, client details, line items) is processed entirely in your browser. We do <strong>not</strong> transmit or store this data on our servers.
                </li>
                <li>
                  <strong>Account Information:</strong> If you choose to create an account, we collect your email address and name.
                </li>
                <li>
                  <strong>Usage Data:</strong> We automatically collect certain usage data when you visit the site, including your IP address, browser type, pages visited, and time spent on pages. This is collected through Google Analytics.
                </li>
                <li>
                  <strong>Contact Information:</strong> If you contact us for support, we collect the information you provide in your message.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>To operate and improve the Smart Invoice Tool service</li>
                <li>To respond to your support requests and inquiries</li>
                <li>To analyze website traffic and user behavior to improve our content</li>
                <li>To serve relevant advertisements through Google AdSense (see Section 5)</li>
                <li>To monitor and prevent fraud and abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. Data Storage &amp; Security</h2>
              <p className="text-slate-600 leading-relaxed">
                Your invoice data is processed locally in your browser and is <strong>never sent to our servers</strong>. We take reasonable technical and organizational measures to protect any account data we do hold from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to operate our site and serve advertising. Cookies are small text files stored on your device. We use the following types:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-3">
                <li>
                  <strong>Essential Cookies:</strong> Required for the site to function correctly (e.g., authentication sessions).
                </li>
                <li>
                  <strong>Analytics Cookies (Google Analytics):</strong> Used to understand how visitors interact with our site. Data collected is aggregated and anonymous. You can opt out via{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Google Analytics Opt-out Browser Add-on
                  </a>.
                </li>
                <li>
                  <strong>Advertising Cookies (Google AdSense):</strong> We use Google AdSense to display advertisements on our site (see Section 5 below). AdSense uses cookies to serve ads based on your prior visits to our website or other websites.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of some parts of this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. Advertising — Google AdSense</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Smart Invoice Tool is free to use. We fund the service by displaying advertisements through <strong>Google AdSense</strong>, operated by Google LLC.
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-3">
                <li>
                  Google AdSense may use cookies and web beacons to collect data about your visits to this and other websites in order to provide relevant advertisements.
                </li>
                <li>
                  Google&rsquo;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
                </li>
                <li>
                  You may opt out of personalized advertising by visiting{" "}
                  <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Google Ads Settings
                  </a>{" "}
                  or{" "}
                  <a href="https://www.aboutads.info" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    www.aboutads.info
                  </a>.
                </li>
                <li>
                  For more information on how Google uses data when you use our site, visit:{" "}
                  <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    How Google uses data when you use our partners&apos; sites or apps
                  </a>.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">6. Third-Party Services</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use the following third-party services that may collect data about you:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>
                  <strong>Google Analytics</strong> — Website usage analytics.{" "}
                  <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <strong>Google AdSense</strong> — Advertising.{" "}
                  <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <strong>Google Tag Manager</strong> — Tag management for analytics and advertising scripts.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                These third-party services have their own privacy policies governing the use of your data. We have no access to or control over cookies used by these third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">7. Data Sharing &amp; Disclosure</h2>
              <p className="text-slate-600 leading-relaxed">
                We do <strong>not</strong> sell, trade, or rent your personal information to third parties. We may share data only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-4">
                <li>With service providers (e.g., hosting, analytics) who assist in operating our site, under confidentiality agreements.</li>
                <li>If required by law, court order, or governmental authority.</li>
                <li>To protect the rights, property, or safety of Smart Invoice Tool, our users, or the public.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-slate-600 leading-relaxed">
                Smart Invoice Tool is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">9. Your Rights</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>The right to access the personal data we hold about you</li>
                <li>The right to request correction of inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to opt out of personalized advertising</li>
                <li>The right to data portability (where applicable under GDPR)</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at the email address below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">10. Changes to This Policy</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">11. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:{" "}
                <a href="mailto:support@smartinvoicetool.com" className="text-blue-600 hover:underline">
                  support@smartinvoicetool.com
                </a>
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
