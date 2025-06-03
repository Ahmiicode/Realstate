import React from 'react';
import HeroSection from '../components/Agency/HeroSection';
import Agencybox from '../components/Agency/Agencybox';

import AgentSidebar from '../components/Agent/AgentSidebar';
import CallToAction from '../components/Home2/CalltoAction';

const Agency = () => {
  return (
    <div>
      <HeroSection />

      <div className=" bg-white mx-auto px-4 py-8">
        <div className="flex flex-col container mx-auto px-4 md:flex-row gap-6">
          
          {/* Left: FindAgent (40%) */}
          <div className="w-full md:w-2/6">
            <AgentSidebar/>
          </div>

          {/* Right: Agentbox (60%) */}
          <div className="w-full md:w-3/5">
            <Agencybox />
          </div>
          
        </div>
      </div>
      <CallToAction/>
    </div>
  );
};

export default Agency;
