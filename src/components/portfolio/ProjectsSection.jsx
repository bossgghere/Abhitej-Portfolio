import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * ProjectsSection Component
 * Authentic, editorial presentation of Abhitej Kumar's real research and BI projects.
 * Free of placeholder templates, fake URLs, or generic stock crops.
 */
export const ProjectsSection = () => {
  const { badge, title, description, projects, viewMoreText, viewMoreLink } = portfolioData;
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-14 sm:py-18 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E8E8] text-xs font-medium text-[#222222] mb-3 hover:bg-[#dedede] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#222222] animate-pulse" />
              <span>{badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#222222] leading-tight">
              {title}
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-xs sm:text-sm text-[#7B7B7B] leading-relaxed max-w-md lg:text-left">
              {description}
            </p>
          </div>
        </div>

        {/* 2 Featured Projects Grid (Equal Size & Symmetrical) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E8E8E8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                {/* Card Top Metadata Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E8E8] mb-5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#222222] text-white">
                    {project.category}
                  </span>
                  <span className="text-xs text-[#7B7B7B]">
                    {project.type}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-normal text-[#222222] group-hover:text-black leading-snug">
                  {project.title}
                </h3>

                {/* Project Summary */}
                <p className="mt-3 text-xs sm:text-sm text-[#7B7B7B] leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mt-5 space-y-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#222222] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#222222] mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech Stack Pills & Action Link */}
              <div className="mt-6 pt-5 border-t border-[#E8E8E8]">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11px] text-[#222222] bg-[#F8F8F8] border border-[#E8E8E8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={viewMoreLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-[#222222] hover:text-[#7B7B7B] transition-colors"
                >
                  <span>Discuss project details on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Anchor */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href={viewMoreLink}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm text-[#7B7B7B] hover:text-[#222222] transition-colors duration-200"
          >
            <span>{viewMoreText}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
