'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Loader2, FileText } from 'lucide-react';

export function LoginForm() {
  const [errorMessage, dispatch, isPending] = useActionState(authenticate, undefined);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      


      <div className="mb-8 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-2">
            <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
                <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">SmartInvoice</span>
        </div>
        <p className="text-slate-500">Professional invoicing for everyone.</p>
      </div>

      <Card className="w-full max-w-md shadow-xl border-slate-200/60 bg-white/80 backdrop-blur-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">
            Enter your email to sign in to your account
          </CardDescription>
        </CardHeader>
        <form action={dispatch}>
          <CardContent className="grid gap-4">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-xs text-blue-600 hover:text-blue-500 hover:underline">
                    Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                autoComplete="current-password"
              />
            </div>
            {errorMessage && (
              <div className="text-sm text-red-500 bg-red-50 border border-red-100 p-3 rounded-md flex items-center gap-2">
                <span>{errorMessage}</span>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20" type="submit" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign in
            </Button>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white/80 px-2 text-slate-500">
                    Or
                    </span>
                </div>
            </div>
            <div className="text-center text-sm text-slate-600">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
      
      <div className="mt-8 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Smart Invoice Tool. All rights reserved.
      </div>
    </div>
  );
}
