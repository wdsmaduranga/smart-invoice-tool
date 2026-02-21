import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ - Smart Invoice Tool | Frequently Asked Questions",
  description: "Find answers to frequently asked questions about Smart Invoice Tool. Learn about free invoicing, PDF exports, multi-currency support, quotations, tax calculations, and more.",
  keywords: "FAQ, frequently asked questions, smart invoice tool help, invoice generator FAQ, billing questions, how to create invoice, invoice vs quotation",
  openGraph: {
    title: "FAQ - Smart Invoice Tool | Frequently Asked Questions",
    description: "Find answers to frequently asked questions about Smart Invoice Tool and our free invoice generator.",
    url: "https://smartinvoicetool.com/faq",
  },
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQ() {
  const faqCategories = [
    {
      title: "General Questions",
      items: [
        {
          question: "Is Smart Invoice Tool completely free?",
          answer: "Yes, Smart Invoice Tool is 100% free to use. There are no hidden costs, subscription fees, or premium tiers. You can create unlimited invoices, export to PDF, and use all features without any charges whatsoever. We sustain the service through non-intrusive advertising on public pages."
        },
        {
          question: "Do I need to create an account or register?",
          answer: "No registration is required to create and download invoices. You can start creating professional invoices immediately without signing up or providing any personal information. Simply visit our website and start using the tool right away."
        },
        {
          question: "Is my data safe and private?",
          answer: "Absolutely. All your invoice data is processed locally in your browser and never transmitted to our servers. We don't store, collect, or have access to any of your business information, client details, or invoice data. Your financial information stays 100% on your own device."
        },
        {
          question: "How is this tool free? What's the business model?",
          answer: "Smart Invoice Tool is supported by display advertising shown on public content pages. We do not sell your data, charge hidden fees, or limit features behind a paywall. The tool is designed to be genuinely free and useful for everyone."
        }
      ]
    },
    {
      title: "Features & Usage",
      items: [
        {
          question: "What currencies are supported?",
          answer: "We support 10+ major currencies including USD (US Dollar), EUR (Euro), GBP (British Pound), LKR (Sri Lankan Rupee), INR (Indian Rupee), JPY (Japanese Yen), CAD (Canadian Dollar), AUD (Australian Dollar), CHF (Swiss Franc), and CNY (Chinese Yuan). You can select your preferred currency from the dropdown menu in the invoice form."
        },
        {
          question: "Can I add my company logo to invoices?",
          answer: "Yes, you can easily upload your company logo by clicking the 'Upload Logo' button in the invoice form. The logo will appear prominently in the top section of both the on-screen preview and the exported PDF. Supported formats include PNG, JPG, and SVG."
        },
        {
          question: "How do I download my invoice as a PDF?",
          answer: "Once you've filled in your invoice details, simply click the 'Download PDF' button. The PDF will be generated instantly in your browser and saved directly to your device. The PDF is high-quality and print-ready with professional formatting."
        },
        {
          question: "Can I customize the invoice template?",
          answer: "Yes, you can customize various elements including your business name, logo, address, client information, line item descriptions, tax rates, and payment terms. The template is designed to look professional out of the box, without requiring any design skills."
        },
        {
          question: "How do I add tax to my invoice?",
          answer: "In the invoice form, you'll find a 'Tax Rate' field where you can enter a percentage (e.g., 10 for 10% GST or VAT). The tool will automatically calculate the tax amount and add it to the subtotal, displaying the final amount clearly on the invoice."
        },
        {
          question: "Is there a limit on how many line items I can add?",
          answer: "No, there is no limit on the number of line items (products or services) you can add to a single invoice. You can add as many rows as needed. Each item has its own description, quantity, unit price, and calculated total."
        },
        {
          question: "Can I include my bank account details or payment instructions?",
          answer: "Yes. There is a 'Notes' or 'Payment Terms' section in the invoice form where you can add your bank account number, IBAN, routing number, payment link, or any other payment instructions you want your client to see."
        }
      ]
    },
    {
      title: "Invoices vs. Quotations",
      items: [
        {
          question: "What is the difference between an invoice and a quotation?",
          answer: "A quotation (also called a quote or estimate) is a document you send to a potential client before work begins, outlining the expected cost of goods or services. It is not a request for payment. An invoice is sent after work is completed (or in stages during work), and it is a formal request for payment. Smart Invoice Tool supports both document types."
        },
        {
          question: "When should I send a quotation instead of an invoice?",
          answer: "Send a quotation when a client asks 'how much will this cost?' before agreeing to hire you. Once they approve the quote and the work is done, you then send an invoice. Many businesses use quotes at the start of a project and invoices at completion, or at agreed billing milestones."
        },
        {
          question: "How are invoice numbers formatted?",
          answer: "Invoice numbers can be formatted however you prefer. Common formats include sequential numbers (INV-001, INV-002), date-based formats (INV-2025-001), or client-based codes. We recommend a consistent numbering system to keep your records organized and to meet accounting best practices."
        }
      ]
    },
    {
      title: "Technical & Legal",
      items: [
        {
          question: "What browsers are supported?",
          answer: "Smart Invoice Tool works on all modern browsers including Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge. For the best experience, we recommend using the latest version of your preferred browser. JavaScript must be enabled."
        },
        {
          question: "Is there a mobile app?",
          answer: "Currently, we don't have a dedicated mobile app, but our website is fully responsive and works great on smartphones and tablets through your mobile browser. All features including PDF download are available on mobile devices."
        },
        {
          question: "What file format is the downloaded invoice?",
          answer: "Invoices are downloaded as PDF files (.pdf), which is the universally accepted standard for business documents. PDFs are compatible with all operating systems, easy to email, and can be printed at any size without loss of quality."
        },
        {
          question: "Are the generated invoices legally valid?",
          answer: "The invoices generated by our tool are professionally formatted and contain all standard elements that an invoice typically requires: business name, client details, itemized list of services/products, tax, total amount due, and payment terms. However, legal requirements vary by jurisdiction. You should consult with a tax professional or legal advisor in your country to ensure your invoices comply with local regulations."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about Smart Invoice Tool. Can&apos;t find the answer you&apos;re looking for? Feel free to contact us.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-12">
            {faqCategories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, itemIdx) => (
                    <AccordionItem key={itemIdx} value={`item-${idx}-${itemIdx}`}>
                      <AccordionTrigger className="text-left font-medium text-slate-900 hover:text-blue-600 hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Send us a message and we&apos;ll be happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
