import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data';

/**
 * ProjectsSection Component
 * Recreates the "Latest Works" showcase from "project section.jpeg":
 * - Centered "● Portfolio" pill and "Latest Works" heading
 * - 3-column project cards with rounded corners, client badges,
 *   and interactive preview overlay (active for the center project as shown in reference)
 * - "Check out More → View More" footer anchor
 */
export const ProjectsSection = () => {
  const { badge, title, projects, viewMoreText, viewMoreLink } = portfolioData;
  const [activeHoverId, setActiveHoverId] = useState(2); // Card 2 active by default matching reference

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-14 border-t border-[#f0f0f2]">
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

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => {
            const isFeatured = activeHoverId === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveHoverId(project.id)}
                className="group flex flex-col cursor-pointer"
              >
                {/* Project Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#ececed] shadow-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Active / Hover Overlay (matching the center card in screenshot) */}
                  <div
                    className={`absolute inset-0 bg-black/40 flex flex-col justify-between p-5 transition-opacity duration-300 ${
                      isFeatured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {/* Center Action Circle */}
                    <div className="my-auto mx-auto w-14 h-14 rounded-full bg-[#181818]/90 text-white flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
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
                  <h3 className="text-sm sm:text-base font-normal text-[#111111]">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-[#777777]">
                    <span>For</span>
                    <span className="font-semibold text-black tracking-tight flex items-center gap-0.5">
                      <span className="text-[10px]">⁝⁝</span> {project.client}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Anchor */}
        <div className="mt-14 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#737373]">
          <span>{viewMoreText}</span>
          <ArrowRight className="w-4 h-4" />
          <a
            href={viewMoreLink}
            className="font-medium text-black hover:opacity-75 transition-opacity"
          >
            View More
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
