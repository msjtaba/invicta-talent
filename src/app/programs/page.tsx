import type { Metadata } from 'next';
import { ProgramsHubPage } from '@/views/ProgramsHubPage';

export const metadata: Metadata = { title: 'Programs' };

export default function Page() {
  return <ProgramsHubPage />;
}
