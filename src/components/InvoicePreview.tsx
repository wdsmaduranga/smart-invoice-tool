'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Download, Eye, Printer, Share2 } from 'lucide-react';
import { InvoiceData } from '@/types/invoice';
import { generatePDFSimple } from '@/lib/pdfGeneratorSimple';
import { useState } from 'react';
import Image from 'next/image';

interface InvoicePreviewProps {
  invoiceData: InvoiceData;
}

export default function InvoicePreview({ invoiceData }: InvoicePreviewProps) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDownloadPDF = async () => {
    try {
      setIsGeneratingPDF(true);
      
      // Debug: log invoice data
      console.log('Generating PDF for invoice data:', invoiceData);
      
      // Validate we have required data
      if (!invoiceData.lineItems || invoiceData.lineItems.length === 0) {
        throw new Error('No line items found. Please add at least one item to generate PDF.');
      }
      
      await generatePDFSimple(invoiceData);
    } catch (error) {
      console.error('Error generating PDF:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      alert(`Error generating PDF: ${errorMessage}`);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handlePrint = () => {
    const printContent = document.getElementById('invoice-preview');
    if (printContent) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Invoice ${invoiceData.invoiceNumber}</title>
              <style>
                body { 
                  font-family: Arial, sans-serif; 
                  margin: 0; 
                  padding: 20px; 
                  color: #333; 
                  line-height: 1.6; 
                }
                .invoice-container { 
                  max-width: 800px; 
                  margin: 0 auto; 
                }
                h1 { 
                  font-size: 28px; 
                  font-weight: bold; 
                  color: #1a1a1a; 
                  margin: 0 0 8px 0; 
                }
                h3 { 
                  font-weight: 600; 
                  color: #1a1a1a; 
                  margin-bottom: 12px; 
                  font-size: 14px; 
                  border-bottom: 1px solid #e5e7eb; 
                  padding-bottom: 4px; 
                }
                h4 { 
                  font-weight: 600; 
                  color: #1a1a1a; 
                  margin-bottom: 8px; 
                  font-size: 14px; 
                  border-bottom: 1px solid #e5e7eb; 
                  padding-bottom: 4px; 
                }
                table { 
                  width: 100%; 
                  border-collapse: collapse; 
                  margin-bottom: 20px; 
                }
                th, td { 
                  padding: 10px 8px; 
                  text-align: left; 
                  border-bottom: 1px solid #f1f5f9; 
                }
                th { 
                  background: #f9fafb; 
                  font-weight: 600; 
                  color: #1a1a1a; 
                  font-size: 12px; 
                  border-bottom: 2px solid #e2e8f0; 
                }
                td { 
                  font-size: 12px; 
                }
                .text-right { 
                  text-align: right; 
                }
                .font-medium { 
                  font-weight: 500; 
                }
                .font-semibold { 
                  font-weight: 600; 
                }
                .text-gray-600 { 
                  color: #4b5563; 
                }
                .text-gray-800 { 
                  color: #1f2937; 
                }
                .text-gray-900 { 
                  color: #111827; 
                }
                .text-blue-600 { 
                  color: #2563eb; 
                }
                .grid { 
                  display: grid; 
                }
                .grid-cols-2 { 
                  grid-template-columns: repeat(2, minmax(0, 1fr)); 
                }
                .gap-8 { 
                  gap: 2rem; 
                }
                .mb-8 { 
                  margin-bottom: 2rem; 
                }
                .mb-6 { 
                  margin-bottom: 1.5rem; 
                }
                .mb-4 { 
                  margin-bottom: 1rem; 
                }
                .mb-3 { 
                  margin-bottom: 0.75rem; 
                }
                .mb-2 { 
                  margin-bottom: 0.5rem; 
                }
                .space-y-1 > * + * { 
                  margin-top: 0.25rem; 
                }
                .space-y-2 > * + * { 
                  margin-top: 0.5rem; 
                }
                .space-y-4 > * + * { 
                  margin-top: 1rem; 
                }
                .flex { 
                  display: flex; 
                }
                .justify-between { 
                  justify-content: space-between; 
                }
                .justify-end { 
                  justify-content: flex-end; 
                }
                .items-start { 
                  align-items: flex-start; 
                }
                .text-sm { 
                  font-size: 0.875rem; 
                }
                .text-lg { 
                  font-size: 1.125rem; 
                }
                .text-3xl { 
                  font-size: 1.875rem; 
                }
                .px-3 { 
                  padding-left: 0.75rem; 
                  padding-right: 0.75rem; 
                }
                .py-1 { 
                  padding-top: 0.25rem; 
                  padding-bottom: 0.25rem; 
                }
                .py-2 { 
                  padding-top: 0.5rem; 
                  padding-bottom: 0.5rem; 
                }
                .py-3 { 
                  padding-top: 0.75rem; 
                  padding-bottom: 0.75rem; 
                }
                .px-2 { 
                  padding-left: 0.5rem; 
                  padding-right: 0.5rem; 
                }
                .bg-gray-50 { 
                  background-color: #f9fafb; 
                }
                .bg-green-100 { 
                  background-color: #dcfce7; 
                }
                .text-green-800 { 
                  color: #166534; 
                }
                .rounded-full { 
                  border-radius: 9999px; 
                }
                .text-xs { 
                  font-size: 0.75rem; 
                }
                .max-w-xs { 
                  max-width: 20rem; 
                }
                .w-full { 
                  width: 100%; 
                }
                .whitespace-pre-wrap { 
                  white-space: pre-wrap; 
                }
                .overflow-x-auto { 
                  overflow-x: auto; 
                }
                .border-b-2 { 
                  border-bottom-width: 2px; 
                }
                .border-gray-200 { 
                  border-color: #e5e7eb; 
                }
                .border-b { 
                  border-bottom-width: 1px; 
                }
                .border-gray-100 { 
                  border-color: #f3f4f6; 
                }
                .my-2 { 
                  margin-top: 0.5rem; 
                  margin-bottom: 0.5rem; 
                }
                .rounded { 
                  border-radius: 0.25rem; 
                }
                img { 
                  height: 60px; 
                  object-fit: contain; 
                  margin-bottom: 16px; 
                }
                .status-badge {
                  display: inline-block;
                  padding: 4px 8px;
                  border-radius: 9999px;
                  font-size: 10px;
                  font-weight: 500;
                }
                .status-active {
                  background-color: #dcfce7;
                  color: #166534;
                }
                .status-overdue {
                  background-color: #fee2e2;
                  color: #dc2626;
                }
                .separator {
                  border-top: 1px solid #e5e7eb;
                  margin: 8px 0;
                }
                .totals-section {
                  background: #f9fafb;
                  padding: 12px;
                  border-radius: 4px;
                }
              </style>
            </head>
            <body>
              <div class="invoice-container">
                ${printContent.innerHTML}
              </div>
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      }
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Invoice ${invoiceData.invoiceNumber}`,
          text: `Invoice from ${invoiceData.businessDetails.name}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Invoice URL copied to clipboard!');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Eye className="h-5 w-5" />
          Invoice Preview
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrint}
            className="flex items-center gap-2"
          >
            <Printer className="h-4 w-4" />
            Print
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            className="flex items-center gap-2"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF}
            className="flex items-center gap-2"
          >
            <Download className={`h-4 w-4 ${isGeneratingPDF ? 'animate-pulse' : ''}`} />
            {isGeneratingPDF ? 'Generating...' : 'Download PDF'}
          </Button>
        </div>
      </div>

      {/* Invoice Preview */}
      <div id="invoice-preview" className="bg-white p-8 border rounded-lg shadow-sm print:shadow-none print:border-none">
        {/* Header */}
        <div className="flex justify-between items-start mb-8 print:mb-6">
          <div className="space-y-2">
            {invoiceData.businessDetails.logo && (
              <Image
                src={invoiceData.businessDetails.logo}
                alt="Company Logo"
                width={64}
                height={64}
                className="object-contain mb-4 print:h-12"
              />
            )}
            <h2 className="text-3xl font-bold text-gray-900 print:text-2xl">INVOICE</h2>
            <p className="text-gray-600">#{invoiceData.invoiceNumber}</p>
          </div>
          <div className="text-right print:text-sm">
            <div className="text-sm text-gray-600 space-y-1">
              <p>Date: {formatDate(invoiceData.date)}</p>
              <p>Due Date: {formatDate(invoiceData.dueDate)}</p>
              <div className="mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium print:bg-transparent print:text-gray-600">
                {new Date(invoiceData.dueDate) > new Date() ? 'Active' : 'Overdue'}
              </div>
            </div>
          </div>
        </div>

        {/* Business and Customer Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">From</h3>
            <div className="text-sm text-gray-600 space-y-1">
              {invoiceData.businessDetails.name && (
                <p className="font-medium text-gray-900">{invoiceData.businessDetails.name}</p>
              )}
              {invoiceData.businessDetails.address && <p>{invoiceData.businessDetails.address}</p>}
              {(invoiceData.businessDetails.city || invoiceData.businessDetails.postalCode) && (
                <p>
                  {invoiceData.businessDetails.city}
                  {invoiceData.businessDetails.city && invoiceData.businessDetails.postalCode && ', '}
                  {invoiceData.businessDetails.postalCode}
                </p>
              )}
              {invoiceData.businessDetails.country && <p>{invoiceData.businessDetails.country}</p>}
              {invoiceData.businessDetails.email && <p>{invoiceData.businessDetails.email}</p>}
              {invoiceData.businessDetails.phone && <p>{invoiceData.businessDetails.phone}</p>}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">To</h3>
            <div className="text-sm text-gray-600 space-y-1">
              {invoiceData.customerDetails.name && (
                <p className="font-medium text-gray-900">{invoiceData.customerDetails.name}</p>
              )}
              {invoiceData.customerDetails.address && <p>{invoiceData.customerDetails.address}</p>}
              {(invoiceData.customerDetails.city || invoiceData.customerDetails.postalCode) && (
                <p>
                  {invoiceData.customerDetails.city}
                  {invoiceData.customerDetails.city && invoiceData.customerDetails.postalCode && ', '}
                  {invoiceData.customerDetails.postalCode}
                </p>
              )}
              {invoiceData.customerDetails.country && <p>{invoiceData.customerDetails.country}</p>}
              {invoiceData.customerDetails.email && <p>{invoiceData.customerDetails.email}</p>}
              {invoiceData.customerDetails.phone && <p>{invoiceData.customerDetails.phone}</p>}
            </div>
          </div>
        </div>

        {/* Line Items */}
        <div className="mb-8 print:mb-6">
          <div className="overflow-x-auto print:overflow-visible">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 print:bg-transparent">
                  <th className="text-left py-3 px-2 font-semibold text-gray-900">Description</th>
                  <th className="text-right py-3 px-2 font-semibold text-gray-900">Qty</th>
                  <th className="text-right py-3 px-2 font-semibold text-gray-900">Rate</th>
                  <th className="text-right py-3 px-2 font-semibold text-gray-900">Amount</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.lineItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 print:hover:bg-transparent">
                    <td className="py-3 px-2 text-gray-800">{item.description}</td>
                    <td className="py-3 px-2 text-right text-gray-600">{item.quantity}</td>
                    <td className="py-3 px-2 text-right text-gray-600">
                      {invoiceData.currency.symbol}{formatCurrency(item.rate)}
                    </td>
                    <td className="py-3 px-2 text-right text-gray-900 font-medium">
                      {invoiceData.currency.symbol}{formatCurrency(item.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-8 print:mb-6">
          <div className="w-full max-w-xs space-y-2">
            <div className="flex justify-between text-sm py-1">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-gray-900">
                {invoiceData.currency.symbol}{formatCurrency(invoiceData.subtotal)}
              </span>
            </div>
            {invoiceData.taxRate > 0 && (
              <div className="flex justify-between text-sm py-1">
                <span className="text-gray-600">Tax ({invoiceData.taxRate}%):</span>
                <span className="text-gray-900">
                  {invoiceData.currency.symbol}{formatCurrency(invoiceData.taxAmount)}
                </span>
              </div>
            )}
            <Separator className="my-2" />
            <div className="flex justify-between font-semibold text-lg py-2 bg-gray-50 px-3 rounded print:bg-transparent print:px-0">
              <span>Total:</span>
              <span className="text-blue-600 print:text-gray-900">{invoiceData.currency.symbol}{formatCurrency(invoiceData.total)}</span>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        {(invoiceData.notes || invoiceData.paymentTerms) && (
          <div className="space-y-4">
            {invoiceData.notes && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Notes</h4>
                <p className="text-sm text-gray-600 whitespace-pre-wrap">{invoiceData.notes}</p>
              </div>
            )}
            {invoiceData.paymentTerms && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Payment Terms</h4>
                <p className="text-sm text-gray-600 whitespace-pre-wrap">{invoiceData.paymentTerms}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}