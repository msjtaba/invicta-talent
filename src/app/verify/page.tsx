import type { Metadata } from 'next';
import { VerifyPage } from '@/views/VerifyPage';

export const metadata: Metadata = { title: 'Verify a Credential' };

export default function Page() {
  return <VerifyPage />;
}
