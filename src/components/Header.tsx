'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { FileText, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function Header({ user }: { user?: { name?: string | null; image?: string | null; role?: string } }) {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
          <FileText className="h-6 w-6" />
          <span>SmartInvoice</span>
        </Link>
        
        <nav className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1">
            <Link href="/about">
              <Button variant={pathname === '/about' ? 'secondary' : 'ghost'} size="sm">
                About
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant={pathname === '/faq' ? 'secondary' : 'ghost'} size="sm">
                FAQ
              </Button>
            </Link>
            <Link href="/guides">
              <Button variant={pathname?.startsWith('/guides') ? 'secondary' : 'ghost'} size="sm">
                Guides
              </Button>
            </Link>
          </div>
          {user ? (
            <>
              <Link href="/dashboard">
                <Button variant={pathname?.startsWith('/dashboard') ? 'secondary' : 'ghost'}>
                  Dashboard
                </Button>
              </Link>
              {user.role === 'ADMIN' && (
                <Link href="/admin">
                    <Button variant={pathname?.startsWith('/admin') ? 'secondary' : 'ghost'} className="text-red-600">
                    Admin
                    </Button>
                </Link>
              )}
              <div className="flex items-center gap-2 pl-4 border-l ml-2">
                <span className="text-sm font-medium hidden md:block">{user.name}</span>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => signOut({ callbackUrl: '/' })}
                    title="Sign Out"
                >
                    <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost">Log In</Button>
              </Link>
              <Link href="/register">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
