import { RegisterForm } from '@/components/auth/register-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up - Smart Invoice Tool',
  description: 'Create a new account',
};

export default function RegisterPage() {
  return <RegisterForm />;
}
