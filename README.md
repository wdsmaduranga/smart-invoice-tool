# Invoice Generating Hub

A professional, free online invoice generator built with Next.js 15. Create, customize, and download professional invoices with PDF export functionality.

🌐 **Live Site**: [invoice-generatorhub.vercel.app](https://invoice-generatorhub.vercel.app)

## ✨ Features

- **Free & No Registration Required** - Start creating invoices immediately
- **PDF Export** - High-quality PDF generation with professional formatting
- **Multi-Currency Support** - Support for 10+ major currencies (USD, EUR, GBP, LKR, etc.)
- **Company Logo Upload** - Add your business logo to invoices
- **Real-time Preview** - See changes instantly as you type
- **Professional Templates** - Clean, business-ready invoice designs
- **Mobile Responsive** - Works perfectly on all devices
- **SEO Optimized** - Built for search engines and sharing
- **Fast Performance** - Optimized with Next.js 15 and Vercel deployment

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **PDF Generation**: jsPDF
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 📦 Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables: `cp .env.example .env.local`
4. Run development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── InvoiceForm.tsx # Main invoice form
│   │   └── InvoicePreview.tsx # Invoice preview
│   ├── lib/                # Utility functions
│   │   ├── pdfGeneratorSimple.ts # PDF generation
│   │   └── utils.ts        # Helper utilities
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
└── vercel.json            # Vercel configuration
```

## 📈 SEO Features

- Comprehensive meta tags and Open Graph support
- JSON-LD structured data for search engines
- Dynamic sitemaps and robots.txt
- Performance and accessibility optimizations

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

Built with ❤️ using Next.js and deployed on Vercel.