import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { StandardsBar } from '../sections/StandardsBar';
import { FeaturesGrid } from '../sections/FeaturesGrid';
import { StatsSection } from '../sections/StatsSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { ValueOutcomeSection } from '../sections/ValueOutcomeSection';
import { CompanionSection } from '../sections/CompanionSection';
import { SchoolsSection } from '../sections/SchoolsSection';
import { WhySchoolsSection } from '../sections/WhySchoolsSection';
import { FaqSection } from '../sections/FaqSection';
import { FinalCtaSection } from '../sections/FinalCtaSection';

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* 01. Hero Section: Learn skills that shape tomorrow + Orbital Product Visual */}
      <HeroSection />

      {/* 02. Standards Strip (before Popular Learning Paths) */}
      <StandardsBar />

      {/* 03. Popular Learning Paths: AI, Web Development, Cybersecurity */}
      <FeaturesGrid />

      {/* 04. STATS SECTION: 100+ Courses | 500+ Projects | 50+ Challenges | 8–12 Grades */}
      <StatsSection />

      {/* 05. How It Works: Learn. Practice. Build real projects. Get certified. */}
      <HowItWorksSection />

      {/* 06. What Your Child Leaves With: Value / ROI + Certificate Proof */}
      <ValueOutcomeSection />

      {/* 07. Meet Noelle: Your AI Learning Companion */}
      <CompanionSection />

      {/* 08. Designed for Schools: Institutional Partnership & Rollout */}
      <SchoolsSection />

      {/* 09. Why Schools Partner With Theorly: B2B Institutional Benefits */}
      <WhySchoolsSection />

      {/* 10. Frequently Asked Questions from Source */}
      <FaqSection />

      {/* 11. Final CTA: Start Your Future-Ready Journey */}
      <FinalCtaSection />
    </div>
  );
};
