import jsPDF from 'jspdf';
import { InvoiceData } from '@/types/invoice';

export const generatePDFSimple = async (invoiceData: InvoiceData) => {
  try {
    // Show loading indicator
    const loadingToast = document.createElement('div');
    loadingToast.textContent = 'Generating Professional PDF...';
    loadingToast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 14px 28px;
      border-radius: 12px;
      z-index: 9999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 500;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      font-size: 14px;
    `;
    document.body.appendChild(loadingToast);

    // Create PDF using jsPDF with professional settings
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 20;
    const contentWidth = pageWidth - (2 * margin);
    let yPosition = margin;

    // Helper functions
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

    const addText = (text: string, x: number, y: number, options: { size?: number, style?: string, align?: string, color?: string } = {}) => {
      pdf.setFontSize(options.size || 12);
      pdf.setFont('helvetica', options.style || 'normal');

      // Set text color
      if (options.color) {
        const hex = options.color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        pdf.setTextColor(r, g, b);
      } else {
        pdf.setTextColor(51, 51, 51); // Default dark gray
      }

      if (options.align === 'right') {
        pdf.text(text, x, y, { align: 'right' });
      } else if (options.align === 'center') {
        pdf.text(text, x, y, { align: 'center' });
      } else {
        pdf.text(text, x, y);
      }
      return y + (options.size || 12) * 0.35 + 3; // Return next line position with better spacing
    };

    const addLine = (x1: number, y1: number, x2: number, y2: number, color = '#E5E7EB', width = 0.5) => {
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      pdf.setDrawColor(r, g, b);
      pdf.setLineWidth(width);
      pdf.line(x1, y1, x2, y2);
    };

    const addRect = (x: number, y: number, width: number, height: number, color = '#F8FAFC', border = false) => {
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      pdf.setFillColor(r, g, b);
      if (border) {
        pdf.setDrawColor(200, 200, 200);
        pdf.rect(x, y, width, height, 'FD');
      } else {
        pdf.rect(x, y, width, height, 'F');
      }
    };

    // Helper function to load and add image to PDF
    const addImageToPDF = async (imageDataUrl: string, x: number, y: number, maxWidth: number, maxHeight: number) => {
      return new Promise<{ width: number; height: number }>((resolve) => {
        const img = new Image();
        // Set a timeout for image loading
        const timeout = setTimeout(() => {
          img.src = ''; // Cancel loading
          console.warn('Image loading timed out');
          resolve({ width: 0, height: 0 });
        }, 5000); // 5 second timeout

        img.onload = () => {
          clearTimeout(timeout);
          try {
            // Calculate dimensions maintaining aspect ratio
            let width = img.width;
            let height = img.height;

            // Scale down if too large
            const aspectRatio = width / height;
            if (width > maxWidth) {
              width = maxWidth;
              height = width / aspectRatio;
            }
            if (height > maxHeight) {
              height = maxHeight;
              width = height * aspectRatio;
            }

            // Convert pixels to mm (increased for prominent logo display: 1px ≈ 0.4mm)
            const widthMM = width * 0.4;
            const heightMM = height * 0.4;

            // Determine image format from data URL
            let format = 'JPEG';
            if (imageDataUrl.startsWith('data:image/png')) {
              format = 'PNG';
            } else if (imageDataUrl.startsWith('data:image/webp')) {
              format = 'WEBP';
            } else if (imageDataUrl.startsWith('data:image/gif')) {
              format = 'GIF';
            } else if (imageDataUrl.startsWith('data:image/svg')) {
              // SVG needs special handling - convert to PNG first
              format = 'PNG';
            }

            // Add image to PDF with error handling
            pdf.addImage(imageDataUrl, format, x, y, widthMM, heightMM, undefined, 'FAST');
            resolve({ width: widthMM, height: heightMM });
          } catch (error) {
            console.warn('Error adding image to PDF:', error);
            resolve({ width: 0, height: 0 });
          }
        };
        img.onerror = () => {
          clearTimeout(timeout);
          console.warn('Error loading image for PDF');
          resolve({ width: 0, height: 0 });
        };
        img.src = imageDataUrl;
      });
    };

    // Header Section - matching InvoicePreview exactly
    // The preview has: "flex justify-between items-start" with logo+title on left, dates on right

    const headerStartY = yPosition;
    let leftColumnY = headerStartY;
    let logoHeight = 0;

    // LEFT COLUMN: Logo + INVOICE title (matching InvoicePreview structure)

    // Logo rendering (if logo exists) - matching "h-16 object-contain mb-4" from InvoicePreview
    if (invoiceData.businessDetails.logo) {
      try {
        // h-16 = 64px = 4rem. In web this is quite large relative to the text
        // text-3xl = 1.875rem = 30px, so logo height should be about 2x the title height
        // Making logo proportionally larger to match the visual impact in InvoicePreview
        const logoResult = await addImageToPDF(
          invoiceData.businessDetails.logo,
          margin,
          leftColumnY,
          90, // max width: increased for better visibility
          45  // max height: larger for more prominent display
        );
        logoHeight = logoResult.height;
        if (logoHeight > 0) {
          leftColumnY += logoHeight + 10; // increased spacing below logo before "INVOICE"
        }
      } catch (error) {
        console.warn('Error rendering logo:', error);
      }
    }

    // INVOICE title and number (in same left column as logo)
    leftColumnY = addText('INVOICE', margin, leftColumnY, { size: 24, style: 'bold', color: '#111827' });
    leftColumnY = addText(`#${invoiceData.invoiceNumber}`, margin, leftColumnY, { size: 12, color: '#6B7280' });

    // RIGHT COLUMN: Date information (matching text-right layout)
    const dateX = pageWidth - margin;
    let dateY = headerStartY;
    addText(`Date: ${formatDate(invoiceData.date)}`, dateX, dateY, { align: 'right', size: 11, color: '#6B7280' });
    dateY += 6;
    addText(`Due Date: ${formatDate(invoiceData.dueDate)}`, dateX, dateY, { align: 'right', size: 11, color: '#6B7280' });

    // Status badge (matching bg-green-100 text-green-800 rounded-full)
    const isActive = new Date(invoiceData.dueDate) > new Date();
    const badgeColor = isActive ? '#166534' : '#DC2626';  // text-green-800 or text-red-800
    const badgeText = isActive ? 'Active' : 'Overdue';
    dateY += 8;

    // Create rounded badge effect with rectangle
    const badgeWidth = 25;
    const badgeHeight = 6;
    const badgeX = dateX - badgeWidth;
    addRect(badgeX, dateY - 2, badgeWidth, badgeHeight, isActive ? '#DCFCE7' : '#FEE2E2'); // bg-green-100 or bg-red-100
    addText(badgeText, dateX - badgeWidth / 2, dateY + 2, { align: 'center', size: 9, style: 'bold', color: badgeColor });

    // Use the taller column to continue (either left column with logo+title or right column with dates+badge)
    yPosition = Math.max(leftColumnY, dateY) + 6;

    // Business and Customer Details - matching InvoicePreview grid layout
    const leftColX = margin;
    const rightColX = pageWidth / 2 + 5;
    const detailsStartY = yPosition;

    // Business Details (Left Column) - matching "From" section
    let leftY = detailsStartY;
    leftY = addText('From', leftColX, leftY, { size: 12, style: 'bold', color: '#111827' }); // font-semibold text-gray-900
    leftY += 4;

    if (invoiceData.businessDetails.name) {
      leftY = addText(invoiceData.businessDetails.name, leftColX, leftY, { size: 11, style: 'bold', color: '#111827' }); // font-medium text-gray-900
    }
    if (invoiceData.businessDetails.address) {
      leftY = addText(invoiceData.businessDetails.address, leftColX, leftY, { size: 10, color: '#6B7280' }); // text-sm text-gray-600
    }
    const businessLocation = [
      invoiceData.businessDetails.city,
      invoiceData.businessDetails.postalCode
    ].filter(Boolean).join(', ');
    if (businessLocation) {
      leftY = addText(businessLocation, leftColX, leftY, { size: 10, color: '#6B7280' });
    }
    if (invoiceData.businessDetails.country) {
      leftY = addText(invoiceData.businessDetails.country, leftColX, leftY, { size: 10, color: '#6B7280' });
    }
    if (invoiceData.businessDetails.email) {
      leftY = addText(invoiceData.businessDetails.email, leftColX, leftY, { size: 10, color: '#6B7280' });
    }
    if (invoiceData.businessDetails.phone) {
      leftY = addText(invoiceData.businessDetails.phone, leftColX, leftY, { size: 10, color: '#6B7280' });
    }

    // Customer Details (Right Column) - matching "To" section
    let rightY = detailsStartY;
    rightY = addText('To', rightColX, rightY, { size: 12, style: 'bold', color: '#111827' }); // font-semibold text-gray-900
    rightY += 4;

    if (invoiceData.customerDetails.name) {
      rightY = addText(invoiceData.customerDetails.name, rightColX, rightY, { size: 11, style: 'bold', color: '#111827' }); // font-medium text-gray-900
    }
    if (invoiceData.customerDetails.address) {
      rightY = addText(invoiceData.customerDetails.address, rightColX, rightY, { size: 10, color: '#6B7280' });
    }
    const customerLocation = [
      invoiceData.customerDetails.city,
      invoiceData.customerDetails.postalCode
    ].filter(Boolean).join(', ');
    if (customerLocation) {
      rightY = addText(customerLocation, rightColX, rightY, { size: 10, color: '#6B7280' });
    }
    if (invoiceData.customerDetails.country) {
      rightY = addText(invoiceData.customerDetails.country, rightColX, rightY, { size: 10, color: '#6B7280' });
    }
    if (invoiceData.customerDetails.email) {
      rightY = addText(invoiceData.customerDetails.email, rightColX, rightY, { size: 10, color: '#6B7280' });
    }
    if (invoiceData.customerDetails.phone) {
      rightY = addText(invoiceData.customerDetails.phone, rightColX, rightY, { size: 10, color: '#6B7280' });
    }

    // Use the larger Y position to continue
    yPosition = Math.max(leftY, rightY) + 8;

    // Table Section - matching InvoicePreview exactly
    const tableTop = yPosition;
    const col1X = margin + 3;
    const col2X = pageWidth - 90;
    const col3X = pageWidth - 55;
    const col4X = pageWidth - margin - 3;
    const headerHeight = 12;

    // Table header - matching "border-b-2 border-gray-200 bg-gray-50"
    addRect(margin, tableTop, contentWidth, headerHeight, '#F9FAFB'); // bg-gray-50
    addLine(margin, tableTop + headerHeight, pageWidth - margin, tableTop + headerHeight, '#E5E7EB', 2); // border-b-2 border-gray-200

    // Header text - matching "font-semibold text-gray-900"
    pdf.setTextColor(17, 24, 39); // text-gray-900
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Description', col1X, tableTop + 8);
    pdf.text('Qty', col2X, tableTop + 8, { align: 'right' }); // text-right in preview
    pdf.text('Rate', col3X, tableTop + 8, { align: 'right' });
    pdf.text('Amount', col4X, tableTop + 8, { align: 'right' });

    yPosition = tableTop + headerHeight + 2;

    // Table rows - matching InvoicePreview styling
    const rowHeight = 12;
    invoiceData.lineItems.forEach((item) => {
      if (yPosition > pageHeight - 60) {
        pdf.addPage();
        yPosition = margin + 20;
      }

      // Row border - matching "border-b border-gray-100"
      addLine(margin, yPosition + rowHeight, pageWidth - margin, yPosition + rowHeight, '#F3F4F6', 0.5); // border-gray-100

      // Description - matching "text-gray-800"
      pdf.setTextColor(31, 41, 55); // text-gray-800
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text(item.description || '', col1X, yPosition + 8);

      // Quantity - matching "text-right text-gray-600"
      pdf.setTextColor(75, 85, 99); // text-gray-600
      pdf.text(item.quantity.toString(), col2X, yPosition + 8, { align: 'right' });

      // Rate - matching "text-right text-gray-600"
      pdf.text(`${invoiceData.currency.symbol}${formatCurrency(item.rate)}`, col3X, yPosition + 8, { align: 'right' });

      // Amount - matching "text-right text-gray-900 font-medium"
      pdf.setFont('helvetica', 'bold'); // font-medium
      pdf.setTextColor(17, 24, 39); // text-gray-900
      pdf.text(`${invoiceData.currency.symbol}${formatCurrency(item.amount)}`, col4X, yPosition + 8, { align: 'right' });

      yPosition += rowHeight;
    });

    yPosition += 8; // spacing after table

    // Totals Section - matching InvoicePreview exactly
    // "flex justify-end" means right-aligned, "w-full max-w-xs" means narrow width
    const totalsStartX = pageWidth - 90;
    const totalsWidth = 75;

    // Subtotal - matching "text-sm py-1" and "text-gray-600" / "text-gray-900"
    const subtotalY = yPosition;
    addText('Subtotal:', totalsStartX - 30, subtotalY, { size: 10, color: '#6B7280' }); // text-gray-600
    addText(`${invoiceData.currency.symbol}${formatCurrency(invoiceData.subtotal)}`, totalsStartX + totalsWidth, subtotalY, {
      size: 10, align: 'right', color: '#111827' // text-gray-900
    });

    yPosition = subtotalY + 6;

    // Tax (if applicable) - same styling as subtotal
    if (invoiceData.taxRate > 0) {
      addText(`Tax (${invoiceData.taxRate}%):`, totalsStartX - 30, yPosition, { size: 10, color: '#6B7280' });
      addText(`${invoiceData.currency.symbol}${formatCurrency(invoiceData.taxAmount)}`, totalsStartX + totalsWidth, yPosition, {
        size: 10, align: 'right', color: '#111827'
      });
      yPosition += 6;
    }

    // Separator line - matching "Separator"
    addLine(totalsStartX - 30, yPosition + 2, totalsStartX + totalsWidth, yPosition + 2, '#E5E7EB', 0.5);
    yPosition += 8;

    // Total section - matching "font-semibold text-lg py-2 bg-gray-50" and "text-blue-600"
    const totalRowHeight = 12;
    addRect(totalsStartX - 35, yPosition - 2, totalsWidth + 10, totalRowHeight, '#F9FAFB'); // bg-gray-50

    addText('Total:', totalsStartX - 30, yPosition + 6, { size: 13, style: 'bold', color: '#111827' }); // font-semibold
    addText(`${invoiceData.currency.symbol}${formatCurrency(invoiceData.total)}`, totalsStartX + totalsWidth, yPosition + 6, {
      size: 13, align: 'right', style: 'bold', color: '#2563EB' // text-blue-600
    });

    yPosition += totalRowHeight + 10;

    // Additional Information - matching InvoicePreview exactly
    if (invoiceData.notes || invoiceData.paymentTerms) {
      // Add some space before notes section
      if (yPosition > pageHeight - 80) {
        pdf.addPage();
        yPosition = margin + 20;
      }

      if (invoiceData.notes) {
        // Notes section - matching "font-semibold text-gray-900 mb-2" and "text-sm text-gray-600"
        yPosition = addText('Notes', margin, yPosition, { size: 12, style: 'bold', color: '#111827' }); // font-semibold text-gray-900
        yPosition += 3;

        // Handle multi-line notes - matching "whitespace-pre-wrap"
        const notesLines = invoiceData.notes.split('\n');
        notesLines.forEach(line => {
          yPosition = addText(line, margin, yPosition, { size: 10, color: '#6B7280' }); // text-sm text-gray-600
        });
        yPosition += 8;
      }

      if (invoiceData.paymentTerms) {
        // Payment Terms section - same styling as Notes
        yPosition = addText('Payment Terms', margin, yPosition, { size: 12, style: 'bold', color: '#111827' });
        yPosition += 3;

        const termsLines = invoiceData.paymentTerms.split('\n');
        termsLines.forEach(line => {
          yPosition = addText(line, margin, yPosition, { size: 10, color: '#6B7280' });
        });
        yPosition += 8;
      }
    }

    // Professional Footer
    const footerY = pageHeight - 20;
    addLine(margin, footerY - 10, pageWidth - margin, footerY - 10, '#E5E7EB', 0.5);

    // Footer text with better formatting
    pdf.setTextColor(156, 163, 175);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.text(
      `Generated on ${new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}`,
      pageWidth / 2,
      footerY - 2,
      { align: 'center' }
    );

    pdf.text(
      'This is a computer-generated invoice.',
      pageWidth / 2,
      footerY + 4,
      { align: 'center' }
    );

    // Remove loading toast
    if (loadingToast.parentNode) {
      document.body.removeChild(loadingToast);
    }

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `invoice-${invoiceData.invoiceNumber || 'draft'}-${timestamp}.pdf`;

    // Download PDF
    pdf.save(filename);

    // Show enhanced success message
    const successToast = document.createElement('div');
    successToast.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <div style="width: 20px; height: 20px; background: #22C55E; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px;">✓</div>
        <div>
          <div style="font-weight: 600; font-size: 14px;">PDF Generated Successfully!</div>
          <div style="font-size: 12px; opacity: 0.9; margin-top: 2px;">Professional invoice with ${invoiceData.businessDetails.logo ? 'logo' : 'branding'} saved: ${filename}</div>
        </div>
      </div>
    `;
    successToast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #10B981 0%, #059669 100%);
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      z-index: 9999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      box-shadow: 0 10px 40px rgba(16, 185, 129, 0.3);
      max-width: 350px;
      animation: slideIn 0.3s ease-out;
    `;
    document.body.appendChild(successToast);

    // Add animation keyframe
    if (!document.getElementById('toast-styles')) {
      const style = document.createElement('style');
      style.id = 'toast-styles';
      style.textContent = `
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }

    setTimeout(() => {
      if (successToast.parentNode) {
        successToast.style.animation = 'slideOut 0.3s ease-in forwards';
        setTimeout(() => {
          if (successToast.parentNode) {
            document.body.removeChild(successToast);
          }
        }, 300);
      }
    }, 4000);

  } catch (error) {
    console.error('Error generating PDF:', error);

    // Show error message
    const errorToast = document.createElement('div');
    errorToast.textContent = `Error generating PDF: ${error instanceof Error ? error.message : 'Unknown error'}`;
    errorToast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #EF4444;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      z-index: 9999;
      font-family: system-ui;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      max-width: 300px;
    `;
    document.body.appendChild(errorToast);
    setTimeout(() => {
      if (errorToast.parentNode) {
        document.body.removeChild(errorToast);
      }
    }, 5000);

    throw error;
  }
};