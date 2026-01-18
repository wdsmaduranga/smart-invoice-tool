import { LoginForm } from '@/components/auth/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Smart Invoice Tool',
  description: 'Login to your account',
};

export default function LoginPage() {
  return <LoginForm />;
}
