import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { blogData, portfolioData } from '@/data';

/**
 * BlogSection Component
 * Recreates the lower section of "project section.jpeg":
 * - "● Blogs" pill & "Design Insights & Trends" heading
 * - 3 blog article cards with category tags and reading times
 * - "Got a Vision? Let's Bring It to Life!" Call-to-Action container
 */
export const BlogSection = () => {
  const { badge, title, articles } = blogData;
  const { visionBanner } = portfolioData;

  return (
    <section id="blog" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-14 border-t border-[#f0f0f2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f0f2] text-xs font-medium text-[#444444] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>{badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#111111]">
            {title}
          </h2>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="group bg-white rounded-3xl p-5 border border-[#ececed] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Article Thumbnail */}
                <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#f0f0f2]">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Tag & Reading Time */}
                <div className="mt-5 flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#181818] text-[10px] font-semibold text-white tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-[#737373]">
                    {article.readTime}
                  </span>
                </div>

                {/* Article Headline */}
                <h3 className="mt-3 text-sm sm:text-base font-normal text-[#111111] group-hover:text-black leading-snug">
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* "Got a Vision? Let's Bring It to Life!" CTA Card */}
        <div className="mt-20 sm:mt-28 rounded-3xl bg-[#f4f4f6] border border-[#e8e8ea] p-10 sm:p-16 lg:p-20 text-center flex flex-col items-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#111111] max-w-2xl leading-tight">
            {visionBanner.title}
          </h3>
          <p className="mt-4 text-xs sm:text-sm text-[#666666] max-w-xl leading-relaxed">
            {visionBanner.subtitle}
          </p>
          <div className="mt-8">
            <a
              href={visionBanner.ctaLink}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-black border-b border-black pb-0.5 hover:opacity-80 transition-opacity"
            >
              <span>{visionBanner.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
