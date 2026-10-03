import type { Metadata } from 'next';
import { AdmissionsPage } from '@/views/AdmissionsPage';

export const metadata: Metadata = { title: 'Admissions' };

export default function Page() {
  return <AdmissionsPage />;
}
