import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import AboutSection from '../components/about/AboutSection';
import ExperienceSection from '../components/experience/ExperienceSection';
import SkillsSection from '../components/skills/SkillsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import BlogSection from '../components/blog/BlogSection';
import FooterSection from '../components/footer/FooterSection';

/**
 * HomePage Component
 * Seamlessly integrates all sections matching the user's reference designs:
 * 1. Hero Section (with processed portrait PNG & metric counters)
 * 2. About Me Section (with Rising Star stat card & core skills marquee)
 * 3. Experiences Section (with interactive timeline & internship)
 * 4. Skills & Certifications Section (categorized toolkit & verified credentials)
 * 5. Portfolio / Projects Section (including Role of AI in Sports Analytics)
 * 6. Blogs / Analytics Insights (with article cards & vision banner)
 * 7. Footer Section (with navigation pills & contact details)
 */
export const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
