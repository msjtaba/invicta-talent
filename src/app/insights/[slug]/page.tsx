import type { Metadata } from 'next';
import { ARTICLES_DATA } from '@/data/insightData';
import { ArticleDetailPage } from '@/views/ArticleDetailPage';

export function generateStaticParams() {
  return ARTICLES_DATA.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<'/insights/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);
  return { title: article ? article.title : 'Insights' };
}

export default async function Page({ params }: PageProps<'/insights/[slug]'>) {
  const { slug } = await params;
  return <ArticleDetailPage slug={slug} />;
}
