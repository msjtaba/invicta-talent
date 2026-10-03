import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ARTICLES_DATA } from '@/data/insightData';
import { Button } from '@/components/ui/Button';

export const ArticleDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const article = slug ? ARTICLES_DATA.find((a) => a.slug === slug) || ARTICLES_DATA[0] : ARTICLES_DATA[0];

  if (!article) {
    redirect("/insights");
  }

  return (
    <div className="py-16 px-6 md:px-12 bg-ivory text-graphite space-y-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Breadcrumbs */}
        <div className="text-xs text-graphite/75 flex items-center gap-2 font-semibold">
          <Link href="/insights" className="hover:text-crimson">INSIGHTS</Link>
          <span>/</span>
          <span className="text-crimson font-bold">{article.category.toUpperCase()}</span>
        </div>

        {/* Article Header */}
        <div className="space-y-6 border-b border-stone-light pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-graphite/75">
            <span className="bg-crimson text-ivory px-2.5 py-1 font-bold uppercase">{article.category}</span>
            <span className="font-semibold">{article.readTime}</span>
            <span>·</span>
            <span className="font-semibold">{article.date}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl text-graphite leading-[1.1]">
            {article.title}
          </h1>

          <div className="text-xs text-graphite/75 border-t border-b border-stone-light py-3">
            By <strong className="text-graphite">{article.author}</strong> — <span className="italic">{article.authorContext}</span>
          </div>
        </div>

        {/* Key Takeaways Box */}
        <div className="p-6 border border-crimson bg-white space-y-3 font-sans shadow-sm rounded-md">
          <div className="text-xs text-crimson font-bold uppercase tracking-wider">KEY TAKEAWAYS</div>
          <ul className="space-y-2 text-xs text-graphite">
            {article.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-crimson font-bold">•</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Content */}
        <div
          className="prose prose-stone max-w-none text-sm text-graphite font-sans leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {/* Programme Link Banner */}
        <div className="p-8 border border-stone-light bg-white space-y-4 text-xs shadow-sm rounded-md">
          <div className="text-crimson font-bold uppercase">RELATED PROGRAMME COVERAGE</div>
          <p className="text-graphite italic text-lg">{article.relatedProgramWeek}</p>
          <Button to={`/programs/${article.relatedProgramSlug}`} variant="primary" size="md">
            Explore Programme Details
          </Button>
        </div>
      </div>
    </div>
  );
};
