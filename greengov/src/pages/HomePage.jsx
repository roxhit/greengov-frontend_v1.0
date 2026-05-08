import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ProgramsSection from '../components/home/ProgramsSection';
import RolesSection from '../components/home/RolesSection';
import { CTASection, Footer } from '../components/home/CTASection';

const HomePage = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ProgramsSection />
      <RolesSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default HomePage;
