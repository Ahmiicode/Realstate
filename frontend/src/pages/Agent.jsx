import React from 'react';
import HeroSection from '../components/Agent/HeroSection';
import Agentbox from '../components/Agent/Agentbox';
import FindAgent from '../components/Agent/FindAgent';
import AgentSidebar from '../components/Agent/AgentSidebar';
import CallToAction from '../components/Home2/CalltoAction';

const Agent = () => {
  return (
    <div>
      <HeroSection />

      <div className=" bg-white mx-auto px-4 py-8">
        <div className="flex flex-col container mx-auto px-4 md:flex-row gap-6">
          
          {/* Left: FindAgent (40%) */}
          <div className="w-full md:w-2/6">
            <FindAgent />
            <AgentSidebar/>
          </div>

          {/* Right: Agentbox (60%) */}
          <div className="w-full md:w-3/5">
            <Agentbox />
          </div>
          
        </div>
      </div>
      <CallToAction/>
    </div>
  );
};

export default Agent;
