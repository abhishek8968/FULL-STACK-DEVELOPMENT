import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import WhyTraditionalFail from './WhyTraditionalFail';
import Architecture from './Architecture';
import MomentumIntelligence from './MomentumIntelligence';
import DivergenceSection from './DivergenceSection';
import MarketRegime from './MarketRegime';
import Reliability from './Reliability';
import TargetAudience from './TargetAudience';
import AboutSection from './AboutSection';
import Exclusivity from './Exclusivity';
import NotForEveryone from './NotForEveryone';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <WhyTraditionalFail />
        <Architecture />
        <MomentumIntelligence />
        <DivergenceSection />
        <MarketRegime />
        <Reliability />
        <TargetAudience />
        <AboutSection />
        <Exclusivity />
        <NotForEveryone />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
