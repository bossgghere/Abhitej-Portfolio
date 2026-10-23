import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { experienceData } from '@/data';

/**
 * ExperienceSection Component
 * Faithfully matches "experience section.jpeg":
 * - Pill badge "● Experiences" and heading "Explore My Design Journey"
 * - Clean work experience list with tags
 * - Interactive expandable card for FutureTech with preview imagery and action button
 * - High-impact dark consultation banner "Exclusive Winter Deal Days Get a Free Consultation!"
 */
export const ExperienceSection = () => {
  const { badge, title, description, ctaText, ctaLink, experiences, dealBanner } =
    experienceData;

  const [expandedId, setExpandedId] = useState('futuretech');

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-14 border-t border-[#f0f0f2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f0f2] text-xs font-medium text-[#444444] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>{badge}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#111111] leading-tight">
              {title}
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end">
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-md lg:text-left">
              {description}
            </p>
            <a
              href={ctaLink}
              className="group inline-flex items-center gap-1 text-sm font-medium text-black border-b border-black pb-0.5 mt-6 hover:opacity-80 transition-opacity"
            >
              <span>{ctaText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Experience Timeline Rows */}
        <div className="divide-y divide-[#ececed] border-y border-[#ececed]">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                onClick={() => toggleExpand(exp.id)}
                className={`py-8 transition-colors duration-200 cursor-pointer ${
                  isExpanded ? 'bg-[#fafafa]' : 'hover:bg-[#fcfcfd]'
                }`}
              >
                {/* Main Row summary */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  
                  {/* Left: Company & Date */}
                  <div className="md:col-span-4">
                    <h3 className="text-base sm:text-lg font-normal text-[#111111]">
                      {exp.company}
                    </h3>
                    <p className="text-xs text-[#888888] mt-1 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#888888]" />
                      <span>{exp.period}</span>
                    </p>
                  </div>

                  {/* Middle: Role & Description */}
                  <div className="md:col-span-5">
                    <p className="text-xs sm:text-sm text-[#555555]">
                      {exp.role}
                    </p>
                  </div>

                  {/* Right: Category Tags */}
                  <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          isExpanded
                            ? 'bg-[#181818] text-white'
                            : 'bg-[#f0f0f2] text-[#444444]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Details (matching FutureTech from reference image) */}
                {isExpanded && exp.images && (
                  <div className="mt-8 pt-6 border-t border-[#f0f0f2] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                    
                    {/* 3 Project Thumbnails */}
                    <div className="lg:col-span-6 grid grid-cols-3 gap-3">
                      {exp.images.map((imgSrc, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl overflow-hidden aspect-[4/3] bg-[#e5e5e7] shadow-sm"
                        >
                          <img
                            src={imgSrc}
                            alt={`${exp.company} thumbnail ${idx + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Description Paragraph */}
                    <div className="lg:col-span-4">
                      <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Action Arrow Button */}
                    <div className="lg:col-span-2 flex justify-start lg:justify-end">
                      <div className="w-14 h-14 rounded-full bg-[#181818] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-md">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Exclusive Winter Deal Days Consultation Banner */}
        <div className="mt-20 sm:mt-24 rounded-3xl overflow-hidden relative bg-[#111111] text-white shadow-xl">
          {/* Background image & gradient overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={dealBanner.bgImage}
              alt="Consultation Background"
              loading="lazy"
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          </div>

          <div className="relative z-10 p-8 sm:p-14 lg:p-20 flex flex-col items-center text-center">
            <span className="text-xs sm:text-sm text-[#cccccc] font-light tracking-wide">
              {dealBanner.tag}
            </span>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-4 max-w-2xl leading-tight">
              {dealBanner.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#bbbbbb] mt-4 max-w-lg leading-relaxed">
              {dealBanner.subtitle}
            </p>
            <div className="mt-8">
              <a
                href={dealBanner.ctaLink}
                className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-white border-b border-white pb-1 hover:text-gray-300 transition-colors"
              >
                <span>{dealBanner.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
