import type { Metadata } from 'next';
import { ClashReportPage } from '@/views/ClashReportPage';

export const metadata: Metadata = { title: 'The Clash Report' };

export default function Page() {
  return <ClashReportPage />;
}
