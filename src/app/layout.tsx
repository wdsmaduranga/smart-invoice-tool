import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { auth } from "@/auth";
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Invoice Tool - Professional Invoice Generator | Free Online Invoice Maker",
  description: "Smart Invoice Tool - Create professional invoices instantly with our free online invoice generator. Easy-to-use interface, PDF export, multi-currency support, and customizable templates for businesses worldwide.",
  keywords: "invoice generator, online invoice maker, free invoice, PDF invoice, business invoice, professional invoice, invoice template, billing software",
  authors: [{ name: "Smart Invoice Tool" }],
  creator: "Smart Invoice Tool",
  publisher: "Smart Invoice Tool",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://smartinvoicetool.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Smart Invoice Tool - Professional Invoice Generator",
    description: "Smart Invoice Tool - Create professional invoices instantly with our free online invoice generator. Easy PDF export, multi-currency support, and customizable templates.",
    url: "https://smartinvoicetool.com",
    siteName: "Smart Invoice Tool",
    images: [
      {
        url: "https://smartinvoicetool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Smart Invoice Tool - Professional Invoice Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Invoice Tool - Professional Invoice Generator",
    description: "Smart Invoice Tool - Create professional invoices instantly with our free online invoice generator. Easy PDF export and multi-currency support.",
    images: ["https://smartinvoicetool.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    yandex: "5124588f601be10c",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="icon" href="/favicon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/favicon-512x512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="msvalidate.01" content="58F0C514B4011453FF2DA43550D3FEAD" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-T09GT55T2Y" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T09GT55T2Y');
        `}</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Smart Invoice Tool",
              "description": "Smart Invoice Tool - Professional invoice creation tool with PDF export functionality",
              "url": "https://smartinvoicetool.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "PDF Export",
                "Multi-currency Support",
                "Professional Templates",
                "Real-time Preview",
                "Free to Use",
                "No Registration Required",
                "Company Logo Upload",
                "Tax Calculations"
              ],
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "author": {
                "@type": "Organization",
                "name": "Smart Invoice Tool"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Smart Invoice Tool",
                "url": "https://smartinvoicetool.com"
              },
              "dateCreated": "2024-01-01",
              "dateModified": "2025-01-27",
              "inLanguage": "en-US",
              "isAccessibleForFree": true,
              "softwareVersion": "1.0",
              "screenshot": "https://smartinvoicetool.com/logo.png"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Smart Invoice Tool",
              "url": "https://smartinvoicetool.com",
              "logo": "https://smartinvoicetool.com/logo.png",
              "description": "Free professional invoice generator for businesses worldwide",
              "sameAs": [
                "https://smartinvoicetool.com"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "support@smartinvoicetool.com"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header user={session?.user} />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
