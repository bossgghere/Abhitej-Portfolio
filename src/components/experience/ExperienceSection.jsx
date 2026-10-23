import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { experienceData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * ExperienceSection Component
 * Recreates the exact layout from reference screenshot "experience section.jpeg":
 * - "● Experiences" pill & "Explore My Professional Journey" header
 * - Divided rows with company, period, role, and pill tags
 * - Interactive expandable item with 3 thumbnails & circular arrow
 */
export const ExperienceSection = () => {
  const { badge, title, description, ctaText, ctaLink, experiences } = experienceData;

  const [expandedId, setExpandedId] = useState('data-vis-intern');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-14 sm:py-18 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E8E8] text-xs font-medium text-[#222222] mb-4 hover:bg-[#dedede] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#222222] animate-pulse" />
              <span>{badge}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#222222] leading-tight">
              {title}
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end">
            <p className="text-xs sm:text-sm text-[#7B7B7B] leading-relaxed max-w-md lg:text-left">
              {description}
            </p>
            <a
              href={ctaLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-sm font-medium text-[#222222] border-b border-[#222222] pb-0.5 mt-6 hover:text-[#7B7B7B] hover:border-[#7B7B7B] transition-colors"
            >
              <span>{ctaText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Experience Timeline Rows */}
        <div className="divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                onClick={() => toggleExpand(exp.id)}
                className={`py-6 px-4 -mx-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isExpanded ? 'bg-white/70 shadow-sm' : 'hover:bg-white/40'
                }`}
              >
                {/* Main Row summary */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  
                  {/* Left: Company & Date */}
                  <div className="md:col-span-4">
                    <h3 className="text-base sm:text-lg font-normal text-[#222222] group-hover:text-black">
                      {exp.company}
                    </h3>
                    <p className="text-xs text-[#7B7B7B] mt-1 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#7B7B7B]" />
                      <span>{exp.period}</span>
                    </p>
                  </div>

                  {/* Middle: Role & Description */}
                  <div className="md:col-span-5">
                    <p className="text-xs sm:text-sm text-[#7B7B7B]">
                      {exp.role}
                    </p>
                  </div>

                  {/* Right: Category Tags */}
                  <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                          isExpanded
                            ? 'bg-[#222222] text-[#FFFFFF] shadow-sm scale-105'
                            : 'bg-[#E8E8E8] text-[#7B7B7B] hover:bg-[#dedede]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-8 pt-6 border-t border-[#E8E8E8] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in duration-300">
                    
                    {exp.images ? (
                      <>
                        {/* 3 Project Thumbnails */}
                        <div className="lg:col-span-6 grid grid-cols-3 gap-3">
                          {exp.images.map((imgSrc, idx) => (
                            <div
                              key={idx}
                              className="group/thumb rounded-xl overflow-hidden aspect-[4/3] bg-[#E8E8E8] shadow-sm hover:shadow-md transition-shadow"
                            >
                              <img
                                src={imgSrc}
                                alt={`${exp.company} thumbnail ${idx + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Description Paragraph */}
                        <div className="lg:col-span-4">
                          <p className="text-xs sm:text-sm text-[#7B7B7B] leading-relaxed">
                            {exp.description}
                          </p>
                        </div>

                        {/* Action Arrow Button */}
                        <div className="lg:col-span-2 flex justify-start lg:justify-end">
                          <div className="w-14 h-14 rounded-full bg-[#222222] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 shadow-md">
                            <ArrowUpRight className="w-6 h-6" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="lg:col-span-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <p className="text-xs sm:text-sm text-[#7B7B7B] leading-relaxed max-w-3xl">
                          {exp.description}
                        </p>
                        <a
                          href={ctaLink}
                          target="_blank"
                          rel="noreferrer"
                          className="shrink-0 inline-flex items-center gap-1 text-xs font-medium text-[#222222] hover:text-[#7B7B7B] transition-colors"
                        >
                          <span>Learn more</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
