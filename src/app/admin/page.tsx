import { auth } from '@/auth';
import { getAdminStats, getDailyRevenue } from '@/app/actions';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, DollarSign, ShieldAlert, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RevenueChart } from '@/components/admin/RevenueChart';

export default async function AdminDashboard() {
  const session = await auth();
  
  if (!session) {
    redirect('/login');
  }

  const stats = await getAdminStats();
  const dailyRevenue = await getDailyRevenue();

  if (stats?.error === 'Unauthorized') {
    return (
        <div className="container mx-auto px-4 py-8 flex items-center justify-center h-[50vh]">
            <div className="text-center space-y-4">
                <ShieldAlert className="h-12 w-12 text-red-600 mx-auto" />
                <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
                <p className="text-gray-600">You do not have permission to view this page.</p>
            </div>
        </div>
    );
  }

  if (!stats || 'error' in stats) {
      return <div>Error loading stats</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <Link href="/admin/users">
            <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                User Management
            </Button>
          </Link>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-600">Total Users</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stats.totalUsers}</div>
            <p className="text-xs text-gray-500">Registered accounts</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-600">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toFixed(2)}</div>
            <p className="text-xs text-gray-500">Lifetime system revenue</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-600">Total Invoices</CardTitle>
            <FileText className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stats.totalInvoices}</div>
            <p className="text-xs text-gray-500">Generated across all users</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4">
          <RevenueChart data={dailyRevenue} />
      </div>
    </div>
  );
}
