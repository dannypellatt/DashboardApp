"use client"; 

import React, { useState }  from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
import HeroSection from '@/app/components/HeroSection/HeroSection';
import ProjectsSection from '@/app/components/Projects/Projects';
import AboutMeSection from '@/app/components/AboutMe/AboutMe';
import CertificationsSection from '@/app/components/Certifications/Certifications';
import ContactSection from '@/app/components/Contact/Contact';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about-me">
          <AboutMeSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        {/* <section id="certifications">
          <CertificationsSection />
        </section> */}
        <section id="contact">
          <ContactSection />
        </section> 
      </main>
    </div>
  );
};

export default Home;
