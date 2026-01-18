'use client';

import { useActionState, useEffect } from 'react';
import { register } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Loader2, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function RegisterForm() {
  const [state, dispatch, isPending] = useActionState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state === 'success') {
      toast.success('Account created successfully! Please log in.');
      router.push('/login');
    }
  }, [state, router]);

  const errorMessage = state !== 'success' ? state : null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      


      <div className="mb-8 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-2">
            <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
                <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">SmartInvoice</span>
        </div>
        <p className="text-slate-500">Join thousands of freelancers today.</p>
      </div>

      <Card className="w-full max-w-md shadow-xl border-slate-200/60 bg-white/80 backdrop-blur-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <form action={dispatch}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                required 
                className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                autoComplete="name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="name@example.com" 
                required 
                className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                autoComplete="email"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                required 
                minLength={6} 
                className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                autoComplete="new-password"
              />
              <p className="text-xs text-slate-500">Must be at least 6 characters long</p>
            </div>
            {errorMessage && (
              <div className="text-sm text-red-500 bg-red-50 border border-red-100 p-3 rounded-md">
                {errorMessage}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20" type="submit" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create account
            </Button>
            <div className="text-center text-sm text-slate-600">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
      
      <div className="mt-8 text-center text-xs text-slate-400">
        By clicking continue, you agree to our <Link href="/terms" className="underline hover:text-slate-600">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-slate-600">Privacy Policy</Link>.
      </div>
    </div>
  );
}
