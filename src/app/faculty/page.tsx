import type { Metadata } from 'next';
import { FacultyPage } from '@/views/FacultyPage';

export const metadata: Metadata = { title: 'Faculty' };

export default function Page() {
  return <FacultyPage />;
}
