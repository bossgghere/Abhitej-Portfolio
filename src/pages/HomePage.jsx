import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import AboutSection from '../components/about/AboutSection';
import ExperienceSection from '../components/experience/ExperienceSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import AchievementsSection from '../components/achievements/AchievementsSection';
import FooterSection from '../components/footer/FooterSection';

/**
 * HomePage Component
 * 100% unified editorial design language across all sections:
 * 1. Hero Section (Transparent portrait, Aeonik typography & stats)
 * 2. About Me Section (3-column layout: bio + Financial Analyst hero card + sparkles)
 * 3. Experience Section (3-column layout: career + Principal hero card + sparkles)
 * 4. Research & Projects Section (3-column layout: projects + AI in Sports hero card + sparkles)
 * 5. Achievements Section (3-column layout: Rising Star Award + AIU National Delegate)
 * 6. Footer Section (Minimalist dark footer with direct contact & links)
 */
export const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;