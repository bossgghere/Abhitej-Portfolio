import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import AboutSection from '../components/about/AboutSection';
import ExperienceSection from '../components/experience/ExperienceSection';
import SkillsSection from '../components/skills/SkillsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import FooterSection from '../components/footer/FooterSection';

/**
 * HomePage Component
 * Authentic, streamlined personal portfolio for Abhitej Kumar:
 * 1. Hero Section (Portrait, headline & career metrics)
 * 2. About Me Section (Rising Star stat card & core skills marquee)
 * 3. Experiences Section (Principal Financial Group & Data Vis Internship)
 * 4. Skills & Certifications Section (Technical toolkit & verified credentials)
 * 5. Projects Section (Role of AI in Sports Analytics & Financial Dashboards)
 * 6. Footer Section (Contact, email, phone & direct LinkedIn)
 */
export const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
