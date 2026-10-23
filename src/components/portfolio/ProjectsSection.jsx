import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * ProjectsSection Component
 * Enhanced with scroll reveal and smooth card elevation micro-interactions.
 */
export const ProjectsSection = () => {
  const { badge, title, projects, viewMoreText, viewMoreLink } = portfolioData;
  const [activeHoverId, setActiveHoverId] = useState(2);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-14 sm:py-18 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E8E8] text-xs font-medium text-[#222222] mb-4 hover:bg-[#dedede] transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#222222] animate-pulse" />
            <span>{badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#222222]">
            {title}
          </h2>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => {
            const isFeatured = activeHoverId === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveHoverId(project.id)}
                className="group flex flex-col cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Project Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#E8E8E8] shadow-sm group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Active / Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/40 flex flex-col justify-between p-5 transition-opacity duration-300 ${
                      isFeatured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {/* Center Action Circle */}
                    <div className="my-auto mx-auto w-14 h-14 rounded-full bg-[#222222]/90 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 active:scale-95">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>

                    {/* Bottom Metadata bar over image */}
                    <div className="flex items-center justify-between text-white text-xs font-medium tracking-wide">
                      <span className="opacity-90">{project.category}</span>
                      <span className="opacity-90 underline decoration-white/50">
                        {project.url}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Title & Client */}
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-normal text-[#222222] group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-[#7B7B7B]">
                    <span>For</span>
                    <span className="font-semibold text-[#222222] tracking-tight flex items-center gap-0.5">
                      <span className="text-[10px]">⁝⁝</span> {project.client}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
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
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            <span className="font-medium text-[#222222]">View More</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
