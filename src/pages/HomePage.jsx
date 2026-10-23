import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import AboutSection from '../components/about/AboutSection';
import ExperienceSection from '../components/experience/ExperienceSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import BlogSection from '../components/blog/BlogSection';
import FooterSection from '../components/footer/FooterSection';

/**
 * HomePage Component
 * Seamlessly integrates all sections matching the user's reference designs:
 * 1. Hero Section (with processed portrait PNG & metric counters)
 * 2. About Me Section (with 120% metric card & highlights)
 * 3. Experiences Section (with interactive timeline & consultation banner)
 * 4. Portfolio / Latest Works Section (with 3-card project showcase)
 * 5. Blogs / Design Insights & Trends (with article cards & vision banner)
 * 6. Footer Section (with navigation pills & bold email contact)
 */
export const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
