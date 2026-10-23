import React from 'react';
import { ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';
import { skillsData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * SkillsSection Component
 * Ultra-clean, editorial presentation of Abhitej Kumar's technical skills,
 * professional certifications, and institutional honors.
 * Perfectly styled to match the Aeonik typography and minimalist monochrome palette.
 */
export const SkillsSection = () => {
  const { badge, title, description, skillsCategories, certifications, achievements } =
    skillsData;
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
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
          </div>
        </div>

        {/* 2-Column Grid: Skills on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Categorized Technical Skills */}
          <div className="lg:col-span-6 space-y-6">
            {skillsCategories.map((cat) => (
              <div
                key={cat.category}
                className="group bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E8E8] shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F0F0F0]">
                  <h3 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#222222]">
                    {cat.category}
                  </h3>
                  <span className="text-[11px] text-[#7B7B7B]">
                    {cat.skills.length} competencies
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full text-xs font-normal text-[#222222] bg-[#F8F8F8] border border-[#E8E8E8] hover:bg-[#222222] hover:text-white hover:border-[#222222] transition-colors duration-200 cursor-default select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Verified Certifications & Honors */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8E8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#E8E8E8]">
                <div>
                  <h3 className="text-base sm:text-lg font-normal text-[#222222]">
                    Certifications & Credentials
                  </h3>
                  <p className="text-xs text-[#7B7B7B] mt-0.5">
                    Verified coursework and professional accreditation
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#F8F8F8] border border-[#E8E8E8] flex items-center justify-center text-[#222222]">
                  <CheckCircle2 className="w-4 h-4 stroke-[1.5]" />
                </div>
              </div>

              {/* Certifications List */}
              <div className="divide-y divide-[#E8E8E8]">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="py-3.5 flex items-center justify-between gap-4 group -mx-2 px-2 rounded-xl hover:bg-[#F8F8F8] transition-colors"
                  >
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-normal text-[#222222] group-hover:text-black">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-[#7B7B7B] mt-0.5 flex items-center gap-2">
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span className="text-[#222222] font-medium">{cert.tag}</span>
                      </p>
                    </div>
                    <div className="shrink-0 w-7 h-7 rounded-full bg-[#F8F8F8] border border-[#E8E8E8] flex items-center justify-center text-[#7B7B7B] group-hover:bg-[#222222] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Key Achievements */}
            <div className="mt-6 pt-5 border-t border-[#E8E8E8] space-y-3">
              <h4 className="text-xs font-medium uppercase tracking-wider text-[#7B7B7B]">
                Key Honors & Recognition
              </h4>
              {achievements.map((ach) => (
                <div key={ach.id} className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#222222] text-white flex items-center justify-center mt-0.5">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#222222]">
                      {ach.title} — <span className="text-[#7B7B7B] font-normal">{ach.issuer}</span>
                    </div>
                    <p className="text-[11px] text-[#7B7B7B] mt-0.5">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
