'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, Plus, Upload, Building2, User, FileText, Calculator, Copy, Save, RefreshCw } from 'lucide-react';
import { InvoiceData, Currency, LineItem } from '@/types/invoice';
import { useRef, useState } from 'react';
import Image from 'next/image';

interface InvoiceFormProps {
  invoiceData: InvoiceData;
  currencies: Currency[];
  updateInvoiceData: (field: keyof InvoiceData, value: string | number | Currency) => void;
  updateBusinessDetails: (field: string, value: string | File | null) => void;
  updateCustomerDetails: (field: string, value: string) => void;
  updateLineItem: (id: string, field: keyof LineItem, value: string | number) => void;
  addLineItem: () => void;
  removeLineItem: (id: string) => void;
  onSaveTemplate?: () => void;
  onDuplicate?: () => void;
  savedClients?: any[];
}

export default function InvoiceForm({
  invoiceData,
  currencies,
  updateInvoiceData,
  updateBusinessDetails,
  updateCustomerDetails,
  updateLineItem,
  addLineItem,
  removeLineItem,
  onSaveTemplate,
  onDuplicate,
  savedClients
}: InvoiceFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isGeneratingNumber, setIsGeneratingNumber] = useState(false);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateBusinessDetails('logo', e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const generateInvoiceNumber = () => {
    setIsGeneratingNumber(true);
    setTimeout(() => {
      const timestamp = Date.now();
      const randomSuffix = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      updateInvoiceData('invoiceNumber', `INV-${timestamp}-${randomSuffix}`);
      setIsGeneratingNumber(false);
    }, 500);
  };

  const duplicateLastItem = () => {
    const lastItem = invoiceData.lineItems[invoiceData.lineItems.length - 1];
    if (lastItem) {
      const newItem = {
        ...lastItem,
        id: Date.now().toString(),
        description: `${lastItem.description} (Copy)`
      };
      updateLineItem(newItem.id, 'description', newItem.description);
      updateLineItem(newItem.id, 'quantity', newItem.quantity);
      updateLineItem(newItem.id, 'rate', newItem.rate);
      addLineItem();
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={generateInvoiceNumber}
              disabled={isGeneratingNumber}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isGeneratingNumber ? 'animate-spin' : ''}`} />
              Generate Invoice #
            </Button>
            {onDuplicate && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={onDuplicate}
                className="flex items-center gap-2"
              >
                <Copy className="h-4 w-4" />
                Duplicate
              </Button>
            )}
            {onSaveTemplate && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={onSaveTemplate}
                className="flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Save Template
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Invoice Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Invoice Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="invoiceNumber">Invoice Number</Label>
              <div className="flex gap-2">
                <Input
                  id="invoiceNumber"
                  value={invoiceData.invoiceNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateInvoiceData('invoiceNumber', e.target.value)}
                  placeholder="INV-001"
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={generateInvoiceNumber}
                  disabled={isGeneratingNumber}
                  className="px-3"
                >
                  <RefreshCw className={`h-4 w-4 ${isGeneratingNumber ? 'animate-spin' : ''}`} />
                </Button>
              </div>
            </div>
            <div>
              <Label htmlFor="currency">Currency</Label>
              <Select
                value={invoiceData.currency.code}
                onValueChange={(code) => {
                  const currency = currencies.find(c => c.code === code);
                  if (currency) updateInvoiceData('currency', currency);
                }}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.symbol} {currency.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="date">Invoice Date</Label>
              <Input
                id="date"
                type="date"
                value={invoiceData.date}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateInvoiceData('date', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={invoiceData.dueDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateInvoiceData('dueDate', e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Business Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="mb-4">
            <Label>Company Logo</Label>
            <div className="mt-2 flex items-center gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2"
              >
                <Upload className="h-4 w-4" />
                Upload Logo
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
              />
              {invoiceData.businessDetails.logo && (
                <div className="flex items-center gap-2">
                  <Image
                    src={invoiceData.businessDetails.logo}
                    alt="Company Logo"
                    width={40}
                    height={40}
                    className="object-contain border rounded"
                  />
                  <span className="text-sm text-green-600">Logo uploaded</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                value={invoiceData.businessDetails.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateBusinessDetails('name', e.target.value)}
                placeholder="Your Business Name"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="businessAddress">Address</Label>
              <Input
                id="businessAddress"
                value={invoiceData.businessDetails.address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateBusinessDetails('address', e.target.value)}
                placeholder="Street Address"
              />
            </div>
            <div>
              <Label htmlFor="businessCity">City</Label>
              <Input
                id="businessCity"
                value={invoiceData.businessDetails.city}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateBusinessDetails('city', e.target.value)}
                placeholder="City"
              />
            </div>
            <div>
              <Label htmlFor="businessPostalCode">Postal Code</Label>
              <Input
                id="businessPostalCode"
                value={invoiceData.businessDetails.postalCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateBusinessDetails('postalCode', e.target.value)}
                placeholder="Postal Code"
              />
            </div>
            <div>
              <Label htmlFor="businessCountry">Country</Label>
              <Input
                id="businessCountry"
                value={invoiceData.businessDetails.country}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateBusinessDetails('country', e.target.value)}
                placeholder="Country"
              />
            </div>
            <div>
              <Label htmlFor="businessEmail">Email</Label>
              <Input
                id="businessEmail"
                type="email"
                value={invoiceData.businessDetails.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateBusinessDetails('email', e.target.value)}
                placeholder="business@email.com"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="businessPhone">Phone</Label>
              <Input
                id="businessPhone"
                value={invoiceData.businessDetails.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateBusinessDetails('phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Customer Details
            </div>
             {savedClients && savedClients.length > 0 && (
              <Select onValueChange={(clientId) => {
                const client = savedClients.find((c: any) => c.id === clientId);
                if (client) {
                   updateCustomerDetails('name', client.name);
                   updateCustomerDetails('email', client.email || '');
                   updateCustomerDetails('address', client.address || '');
                   updateCustomerDetails('phone', client.phone || '');
                }
              }}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Load Saved Client" />
                </SelectTrigger>
                <SelectContent>
                  {savedClients.map((client: any) => (
                    <SelectItem key={client.id} value={client.id}>
                      {client.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="customerName">Customer Name</Label>
              <Input
                id="customerName"
                value={invoiceData.customerDetails.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateCustomerDetails('name', e.target.value)}
                placeholder="Customer Name"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="customerAddress">Address</Label>
              <Input
                id="customerAddress"
                value={invoiceData.customerDetails.address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateCustomerDetails('address', e.target.value)}
                placeholder="Street Address"
              />
            </div>
            <div>
              <Label htmlFor="customerCity">City</Label>
              <Input
                id="customerCity"
                value={invoiceData.customerDetails.city}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateCustomerDetails('city', e.target.value)}
                placeholder="City"
              />
            </div>
            <div>
              <Label htmlFor="customerPostalCode">Postal Code</Label>
              <Input
                id="customerPostalCode"
                value={invoiceData.customerDetails.postalCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateCustomerDetails('postalCode', e.target.value)}
                placeholder="Postal Code"
              />
            </div>
            <div>
              <Label htmlFor="customerCountry">Country</Label>
              <Input
                id="customerCountry"
                value={invoiceData.customerDetails.country}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateCustomerDetails('country', e.target.value)}
                placeholder="Country"
              />
            </div>
            <div>
              <Label htmlFor="customerEmail">Email</Label>
              <Input
                id="customerEmail"
                type="email"
                value={invoiceData.customerDetails.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateCustomerDetails('email', e.target.value)}
                placeholder="customer@email.com"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="customerPhone">Phone</Label>
              <Input
                id="customerPhone"
                value={invoiceData.customerDetails.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateCustomerDetails('phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Line Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Line Items
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {invoiceData.lineItems.map((item) => (
              <div key={item.id} className="grid grid-cols-12 gap-2 items-end p-4 bg-gray-50 rounded-lg">
                <div className="col-span-12 md:col-span-5">
                  <Label>Description</Label>
                  <Input
                    value={item.description}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateLineItem(item.id, 'description', e.target.value)}
                    placeholder="Item description"
                  />
                </div>
                <div className="col-span-4 md:col-span-2">
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.quantity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateLineItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                  />
                </div>
                <div className="col-span-4 md:col-span-2">
                  <Label>Rate ({invoiceData.currency.symbol})</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.rate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateLineItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                  />
                </div>
                <div className="col-span-3 md:col-span-2">
                  <Label>Amount</Label>
                  <div className="px-3 py-2 bg-white border rounded-md text-sm">
                    {invoiceData.currency.symbol}{formatCurrency(item.amount)}
                  </div>
                </div>
                <div className="col-span-1">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeLineItem(item.id)}
                    disabled={invoiceData.lineItems.length === 1}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <Button
            type="button"
            variant="outline"
            onClick={addLineItem}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Line Item
          </Button>
          
          <Button
            type="button"
            variant="outline"
            onClick={duplicateLastItem}
            disabled={invoiceData.lineItems.length === 0}
            className="flex items-center gap-2"
          >
            <Copy className="h-4 w-4" />
            Duplicate Last Item
          </Button>

          <div className="pt-4 border-t">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="taxRate">Tax Rate (%)</Label>
                <Input
                  id="taxRate"
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  value={invoiceData.taxRate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateInvoiceData('taxRate', parseFloat(e.target.value) || 0)}
                />
              </div>
              <div className="md:col-start-3 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Subtotal:</span>
                  <span className="text-sm font-medium">
                    {invoiceData.currency.symbol}{formatCurrency(invoiceData.subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Tax:</span>
                  <span className="text-sm font-medium">
                    {invoiceData.currency.symbol}{formatCurrency(invoiceData.taxAmount)}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold text-lg">
                    {invoiceData.currency.symbol}{formatCurrency(invoiceData.total)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={invoiceData.notes}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateInvoiceData('notes', e.target.value)}
              placeholder="Additional notes or special instructions"
              className="min-h-[80px]"
            />
          </div>
          <div>
            <Label htmlFor="paymentTerms">Payment Terms</Label>
            <Textarea
              id="paymentTerms"
              value={invoiceData.paymentTerms}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateInvoiceData('paymentTerms', e.target.value)}
              placeholder="Payment terms and conditions"
              className="min-h-[80px]"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}