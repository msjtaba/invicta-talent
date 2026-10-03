import type { Metadata } from 'next';
import { ToolCertificatesPage } from '@/views/ToolCertificatesPage';

export const metadata: Metadata = { title: 'Tool Certificates' };

export default function Page() {
  return <ToolCertificatesPage />;
}
