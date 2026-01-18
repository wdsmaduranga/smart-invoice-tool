import { auth, signOut } from '@/auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex flex-1 bg-gray-100">
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800">Smart Invoice</h1>
        </div>
        <nav className="mt-6">
          <Link
            href="/dashboard"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/invoices/new"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
          >
            Create Invoice
          </Link>
          <Link
            href="/dashboard/clients"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
          >
            Clients
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-6 border-t">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              {session.user?.name?.[0] || 'U'}
            </div>
            <div className="text-sm">
                <div className="font-semibold">{session.user?.name}</div>
                <div className="text-xs text-gray-500 overflow-hidden text-ellipsis w-32">{session.user?.email}</div>
            </div>
          </div>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <Button variant="outline" className="w-full">
              Sign Out
            </Button>
          </form>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
