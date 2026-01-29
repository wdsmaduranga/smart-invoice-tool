'use client';

import Link from 'next/link';
import { FileText, Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8 border-t border-slate-800 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-white">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <span>SmartInvoice</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Professional invoice generation made simple. Create, manage, and export invoices in seconds with our free tool.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-slate-700">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-slate-700">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-slate-700">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>

            {/* Product Hunt Badge - UPDATE post_id and slug when live */}
            <div className="pt-4">
              <a href="https://www.producthunt.com/posts/smart-invoice-tool?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-smart-invoice-tool" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=456789&theme=light" 
                  alt="Smart Invoice Tool - Professional Invoice Generator | Product Hunt" 
                  style={{ width: '250px', height: '54px' }} 
                  width="250" 
                  height="54" 
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                  <ArrowRight className="w-3 h-3" /> Invoice Generator
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                  <ArrowRight className="w-3 h-3" /> Dashboard
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                  <ArrowRight className="w-3 h-3" /> Sign Up Free
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                  <ArrowRight className="w-3 h-3" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                  <ArrowRight className="w-3 h-3" /> FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                  <ArrowRight className="w-3 h-3" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                  <ArrowRight className="w-3 h-3" /> Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and invoicing tips.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-slate-800 border-slate-700 text-white pl-10 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {currentYear} Smart Invoice Tool. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <a href="mailto:support@smartinvoicetool.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
