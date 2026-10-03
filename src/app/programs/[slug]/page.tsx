import type { Metadata } from 'next';
import { PROGRAMS_DATA } from '@/data/programData';
import { ProgramDetailPage } from '@/views/ProgramDetailPage';

export function generateStaticParams() {
  return Object.keys(PROGRAMS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<'/programs/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const program = PROGRAMS_DATA[slug];
  return { title: program ? program.title : 'Programs' };
}

export default async function Page({ params }: PageProps<'/programs/[slug]'>) {
  const { slug } = await params;
  return <ProgramDetailPage slug={slug} />;
}
