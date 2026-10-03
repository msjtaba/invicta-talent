import type { Metadata } from 'next';
import { EmployersPage } from '@/views/EmployersPage';

export const metadata: Metadata = { title: 'For Employers' };

export default function Page() {
  return <EmployersPage />;
}
