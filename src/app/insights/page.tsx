import type { Metadata } from 'next';
import { InsightsHubPage } from '@/views/InsightsHubPage';

export const metadata: Metadata = { title: 'Insights' };

export default function Page() {
  return <InsightsHubPage />;
}
