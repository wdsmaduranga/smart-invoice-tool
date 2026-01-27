'use client';
 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  ScrollText, 
  Settings,
  LogOut 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react'; // Client side signout
 
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Invoices', href: '/dashboard/invoices', icon: FileText },
  { name: 'Quotations', href: '/dashboard/quotations', icon: ScrollText },
  { name: 'Clients', href: '/dashboard/clients', icon: Users },
];
 
export default function Sidebar({ user }: { user: any }) {
  const pathname = usePathname();
 
  return (
    <aside className="w-64 bg-white border-r h-screen sticky top-0 hidden md:flex flex-col">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          Smart Invoice
        </h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {links.map((link) => {
          const LinkIcon = link.icon;
          const isActive = link.href === '/dashboard' 
            ? pathname === link.href
            : pathname.startsWith(link.href);
            
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <LinkIcon className="h-5 w-5" />
              {link.name}
            </Link>
          );
        })}
      </nav>
 
      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center gap-3 mb-4 px-2">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
            {user?.name?.[0] || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user?.name || 'User'}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {user?.email || ''}
            </p>
          </div>
        </div>
        <Button 
          variant="outline" 
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
          onClick={() => signOut({ callbackUrl: '/login' })}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </aside>
  );
}
