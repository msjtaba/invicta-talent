import type { Metadata } from 'next';
import { CertificationPage } from '@/views/CertificationPage';

export const metadata: Metadata = { title: 'Certification' };

export default function Page() {
  return <CertificationPage />;
}
