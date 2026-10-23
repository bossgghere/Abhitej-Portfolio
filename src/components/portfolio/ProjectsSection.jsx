import React from 'react';
import { ArrowUpRight, ArrowRight, TrendingUp, BarChart2 } from 'lucide-react';
import { portfolioData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * ProjectsSection Component
 * Distinct, high-impact case-study featurettes.
 * Each project includes an interactive-styled visual analytics artifact
 * (Python predictive model curve & Power BI financial KPI widget),
 * completely differentiating it from the flat directory layout of Skills.
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

        {/* Stacked Case Studies (Horizontal Split Cards) */}
        <div className="space-y-8">
          
          {/* Project 1: Role of AI in Sports Analytics */}
          {projects[0] && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E8E8] shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left (7 cols): Editorial Narrative */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#222222] text-white">
                        {projects[0].category}
                      </span>
                      <span className="text-xs text-[#7B7B7B]">
                        {projects[0].type}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-normal text-[#222222] tracking-tight leading-snug">
                      {projects[0].title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#7B7B7B] leading-relaxed">
                      {projects[0].description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mt-5 space-y-2.5">
                      {projects[0].highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#222222]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#222222] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack & Action link */}
                  <div className="mt-6 pt-5 border-t border-[#E8E8E8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {projects[0].tags.map((tag) => (
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
                      className="group/link inline-flex items-center gap-1 text-xs font-medium text-[#222222] hover:text-[#7B7B7B] transition-colors shrink-0"
                    >
                      <span>Discuss on LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* Right (5 cols): Visual Predictive Analytics Artifact */}
                <div className="lg:col-span-5 bg-[#222222] text-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-medium text-white/90">Predictive Model Output</span>
                    </div>
                    <span className="text-[10px] text-white/60 font-mono">Python / ML</span>
                  </div>

                  {/* Minimalist SVG Performance Trajectory Chart */}
                  <div className="relative py-2">
                    <div className="text-[11px] text-white/70 mb-2 flex items-center justify-between font-mono">
                      <span>Player Trajectory Forecast</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> +18.4%
                      </span>
                    </div>
                    
                    <svg viewBox="0 0 320 120" className="w-full h-28 overflow-visible">
                      <defs>
                        <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      <line x1="0" y1="20" x2="320" y2="20" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                      <line x1="0" y1="60" x2="320" y2="60" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                      <line x1="0" y1="100" x2="320" y2="100" stroke="rgba(255,255,255,0.08)" />

                      {/* Area fill */}
                      <path
                        d="M 10 95 Q 60 85, 110 65 T 210 40 T 310 15 L 310 100 L 10 100 Z"
                        fill="url(#curveGradient)"
                      />
                      {/* Trajectory line */}
                      <path
                        d="M 10 95 Q 60 85, 110 65 T 210 40 T 310 15"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      {/* Data point dots */}
                      <circle cx="10" cy="95" r="3.5" fill="#10B981" />
                      <circle cx="110" cy="65" r="3.5" fill="#10B981" />
                      <circle cx="210" cy="40" r="3.5" fill="#10B981" />
                      <circle cx="310" cy="15" r="4.5" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="bg-white/5 rounded-lg py-1.5">
                      <div className="text-white/50">Model Fit</div>
                      <div className="font-semibold text-white mt-0.5">R² = 0.89</div>
                    </div>
                    <div className="bg-white/5 rounded-lg py-1.5">
                      <div className="text-white/50">Algorithm</div>
                      <div className="font-semibold text-white mt-0.5">Regression</div>
                    </div>
                    <div className="bg-white/5 rounded-lg py-1.5">
                      <div className="text-white/50">Dashboards</div>
                      <div className="font-semibold text-white mt-0.5">Tableau</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Project 2: Executive Financial Dashboards & Forecasting */}
          {projects[1] && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E8E8] shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left (7 cols): Editorial Narrative */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#222222] text-white">
                        {projects[1].category}
                      </span>
                      <span className="text-xs text-[#7B7B7B]">
                        {projects[1].type}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-normal text-[#222222] tracking-tight leading-snug">
                      {projects[1].title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#7B7B7B] leading-relaxed">
                      {projects[1].description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mt-5 space-y-2.5">
                      {projects[1].highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#222222]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#222222] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack & Action link */}
                  <div className="mt-6 pt-5 border-t border-[#E8E8E8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {projects[1].tags.map((tag) => (
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
                      className="group/link inline-flex items-center gap-1 text-xs font-medium text-[#222222] hover:text-[#7B7B7B] transition-colors shrink-0"
                    >
                      <span>Discuss on LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* Right (5 cols): Visual Financial BI Artifact */}
                <div className="lg:col-span-5 bg-[#F0F0F0] text-[#222222] rounded-2xl p-6 border border-[#E0E0E0] shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E0E0E0] mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#222222]" />
                      <span className="text-xs font-medium text-[#222222]">Executive Reporting Suite</span>
                    </div>
                    <span className="text-[10px] text-[#7B7B7B] font-mono">Power BI & DAX</span>
                  </div>

                  {/* Minimalist SVG Bar & Variance KPI Chart */}
                  <div className="relative py-2">
                    <div className="text-[11px] text-[#7B7B7B] mb-2 flex items-center justify-between font-mono">
                      <span>Variance & Budget Tracking</span>
                      <span className="text-[#222222] font-semibold flex items-center gap-1">
                        <BarChart2 className="w-3 h-3" /> Real-Time
                      </span>
                    </div>
                    
                    <svg viewBox="0 0 320 120" className="w-full h-28 overflow-visible">
                      {/* Grid lines */}
                      <line x1="0" y1="20" x2="320" y2="20" stroke="rgba(0,0,0,0.06)" strokeDasharray="3 3" />
                      <line x1="0" y1="60" x2="320" y2="60" stroke="rgba(0,0,0,0.06)" strokeDasharray="3 3" />
                      <line x1="0" y1="100" x2="320" y2="100" stroke="rgba(0,0,0,0.15)" />

                      {/* Bar pairs (Actual vs Target) */}
                      <rect x="25" y="45" width="16" height="55" rx="3" fill="#222222" />
                      <rect x="44" y="35" width="16" height="65" rx="3" fill="#A8A8A8" />

                      <rect x="85" y="40" width="16" height="60" rx="3" fill="#222222" />
                      <rect x="104" y="30" width="16" height="70" rx="3" fill="#A8A8A8" />

                      <rect x="145" y="30" width="16" height="70" rx="3" fill="#222222" />
                      <rect x="164" y="22" width="16" height="78" rx="3" fill="#A8A8A8" />

                      <rect x="205" y="25" width="16" height="75" rx="3" fill="#222222" />
                      <rect x="224" y="18" width="16" height="82" rx="3" fill="#A8A8A8" />

                      <rect x="265" y="18" width="16" height="82" rx="3" fill="#222222" />
                      <rect x="284" y="12" width="16" height="88" rx="3" fill="#A8A8A8" />

                      {/* Projection trendline */}
                      <path
                        d="M 33 40 L 93 35 L 153 25 L 213 20 L 273 14"
                        fill="none"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeDasharray="4 3"
                      />
                    </svg>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#E0E0E0] grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="bg-white rounded-lg py-1.5 border border-[#E8E8E8]">
                      <div className="text-[#7B7B7B]">Variance</div>
                      <div className="font-semibold text-[#222222] mt-0.5">&lt; 1.2%</div>
                    </div>
                    <div className="bg-white rounded-lg py-1.5 border border-[#E8E8E8]">
                      <div className="text-[#7B7B7B]">Pipeline</div>
                      <div className="font-semibold text-[#222222] mt-0.5">Automated</div>
                    </div>
                    <div className="bg-white rounded-lg py-1.5 border border-[#E8E8E8]">
                      <div className="text-[#7B7B7B]">Platform</div>
                      <div className="font-semibold text-[#222222] mt-0.5">Power BI</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

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
