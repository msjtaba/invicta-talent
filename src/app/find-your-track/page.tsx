import type { Metadata } from 'next';
import { TrackDiagnosticPage } from '@/views/TrackDiagnosticPage';

export const metadata: Metadata = { title: 'Find Your Track' };

export default function Page() {
  return <TrackDiagnosticPage />;
}
