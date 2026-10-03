import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ARTICLES_DATA } from '@/data/insightData';
import { Button } from '@/components/ui/Button';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? ARTICLES_DATA.find((a) => a.slug === slug) || ARTICLES_DATA[0] : ARTICLES_DATA[0];

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <div className="py-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] space-y-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Breadcrumbs */}
        <div className="text-xs font-mono text-[#4A4235] flex items-center gap-2 font-semibold">
          <Link to="/insights" className="hover:text-[#7D2419]">INSIGHTS</Link>
          <span>/</span>
          <span className="text-[#7D2419] font-bold">{article.category.toUpperCase()}</span>
        </div>

        {/* Article Header */}
        <div className="space-y-6 border-b border-[#171717]/15 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#4A4235]">
            <span className="bg-[#7D2419] text-[#E8DDC8] px-2.5 py-1 font-bold uppercase">{article.category}</span>
            <span className="font-semibold">{article.readTime}</span>
            <span>·</span>
            <span className="font-semibold">{article.date}</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#171717] leading-tight">
            {article.title}
          </h1>

          <div className="text-xs font-mono text-[#4A4235] border-t border-b border-[#171717]/15 py-3">
            By <strong className="text-[#171717]">{article.author}</strong> — <span className="italic">{article.authorContext}</span>
          </div>
        </div>

        {/* Key Takeaways Box */}
        <div className="p-6 border border-[#7D2419] bg-[#FFFDF9] space-y-3 font-sans shadow-sm">
          <div className="text-xs font-mono text-[#7D2419] font-bold uppercase tracking-wider">KEY TAKEAWAYS</div>
          <ul className="space-y-2 text-xs text-[#171717]">
            {article.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#7D2419] font-bold">•</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Content */}
        <div
          className="prose prose-stone max-w-none text-sm text-[#171717] font-sans leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {/* Programme Link Banner */}
        <div className="p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-4 font-mono text-xs shadow-sm">
          <div className="text-[#7D2419] font-bold uppercase">RELATED PROGRAMME COVERAGE</div>
          <p className="text-[#171717] font-serif italic text-lg">{article.relatedProgramWeek}</p>
          <Button to={`/programs/${article.relatedProgramSlug}`} variant="primary" size="md">
            Explore Programme Details →
          </Button>
        </div>
      </div>
    </div>
  );
};
