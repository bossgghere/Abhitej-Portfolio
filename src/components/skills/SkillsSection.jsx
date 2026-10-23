import React from 'react';
import { CheckCircle2, BarChart3, ShieldCheck, Zap, Award } from 'lucide-react';
import { skillsData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * SkillsSection Component
 * Redesigned into an open, full-width editorial capability matrix.
 * Eliminates boxy card repetition and presents competencies and verified
 * credentials as an elegant, categorized directory with clean divided rows.
 */
export const SkillsSection = () => {
  const { badge, title, description, skillsCategories, certifications } = skillsData;
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const getCategoryIcon = (category) => {
    if (category.includes('Analytics')) return <BarChart3 className="w-4 h-4 stroke-[1.5]" />;
    if (category.includes('Finance')) return <ShieldCheck className="w-4 h-4 stroke-[1.5]" />;
    return <Zap className="w-4 h-4 stroke-[1.5]" />;
  };

  return (
    <section
      id="skills"
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

        {/* Editorial Capability Matrix: Open Divided Rows */}
        <div className="divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">
          
          {/* Skill Category Rows */}
          {skillsCategories.map((cat) => (
            <div
              key={cat.category}
              className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group hover:bg-white/40 -mx-4 px-4 rounded-xl transition-colors"
            >
              {/* Left Column: Category Name & Icon */}
              <div className="lg:col-span-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#E8E8E8] flex items-center justify-center text-[#222222] shrink-0 group-hover:scale-105 transition-transform">
                  {getCategoryIcon(cat.category)}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#222222] tracking-wide">
                    {cat.category}
                  </h3>
                  <p className="text-[11px] text-[#7B7B7B]">
                    {cat.skills.length} core competencies
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Competency Pills */}
              <div className="lg:col-span-8 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-xs font-normal text-[#222222] bg-white border border-[#E8E8E8] hover:bg-[#222222] hover:text-white hover:border-[#222222] transition-colors duration-200 cursor-default shadow-2xs select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Verified Certifications & Honors Row */}
          <div className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group hover:bg-white/40 -mx-4 px-4 rounded-xl transition-colors">
            
            {/* Left Column: Certifications Header */}
            <div className="lg:col-span-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#222222] text-white flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#222222] tracking-wide">
                  Certifications & Honors
                </h3>
                <p className="text-[11px] text-[#7B7B7B]">
                  Verified industry & academic credentials
                </p>
              </div>
            </div>

            {/* Right Column: Grid of Verified Credentials */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white rounded-xl p-3 border border-[#E8E8E8] shadow-2xs hover:shadow-xs hover:border-[#222222]/30 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="text-xs font-medium text-[#222222] leading-snug line-clamp-2">
                      {cert.title}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#222222] shrink-0 mt-0.5" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#7B7B7B] pt-2 border-t border-[#F0F0F0]">
                    <span>{cert.issuer}</span>
                    <span className="font-medium text-[#222222] px-1.5 py-0.5 rounded bg-[#F8F8F8]">
                      {cert.tag}
                    </span>
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
