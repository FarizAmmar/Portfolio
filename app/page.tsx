"use client";

import ContactSection from '@/components/sections/contactsection';
import CTASection from '@/components/sections/ctasection';
import ExperienceSection from '@/components/sections/experiencesection';
import Footer from '@/components/customs/Footer';
import HeroSection from '@/components/sections/herosection';
import Navbar from '@/components/customs/Navbar';
import ProjectSection from '@/components/sections/projectsection';
import TechStackSection from '@/components/sections/techstacksection';

// Main layout
const AppLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col scroll-smooth bg-[#0a0a0f]">
        {/* Hero Section */}
        <HeroSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Projects Section */}
        <ProjectSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* CTA Section */}
        <CTASection />

        {/* Contact Section */}
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};
export default AppLayout;