import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { blogData, portfolioData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * BlogSection Component
 * Enhanced with scroll reveal and card hover lift animations.
 */
export const BlogSection = () => {
  const { badge, title, articles } = blogData;
  const { visionBanner } = portfolioData;
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="blog"
      ref={ref}
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E8E8] text-xs font-medium text-[#222222] mb-4 hover:bg-[#dedede] transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#222222] animate-pulse" />
            <span>{badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#222222]">
            {title}
          </h2>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className="group bg-[#FFFFFF] rounded-3xl p-5 border border-[#E8E8E8] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Article Thumbnail */}
                <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#F8F8F8]">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Tag & Reading Time */}
                <div className="mt-5 flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#222222] text-[10px] font-semibold text-white tracking-wider group-hover:bg-black transition-colors">
                    {article.category}
                  </span>
                  <span className="text-xs text-[#7B7B7B]">
                    {article.readTime}
                  </span>
                </div>

                {/* Article Headline */}
                <h3 className="mt-3 text-sm sm:text-base font-normal text-[#222222] group-hover:text-black leading-snug transition-colors">
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Vision CTA Card */}
        <div className="mt-20 sm:mt-28 rounded-3xl bg-[#EFEFEF] border border-[#E8E8E8] p-10 sm:p-16 lg:p-20 text-center flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#222222] max-w-2xl leading-tight">
            {visionBanner.title}
          </h3>
          <p className="mt-4 text-xs sm:text-sm text-[#7B7B7B] max-w-xl leading-relaxed">
            {visionBanner.subtitle}
          </p>
          <div className="mt-8">
            <a
              href={visionBanner.ctaLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#222222] border-b border-[#222222] pb-0.5 hover:text-[#7B7B7B] hover:border-[#7B7B7B] transition-colors"
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
