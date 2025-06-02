import React from 'react';
import Cardbox from './Cardbox';
import Contact from '../Singlelisting/Contact';
import AgentSidebar from '../Agent/AgentSidebar';
import Agentdes from './Agentdes';


const AgentOverview = () => {
  return (
    <div>
    

      <div className=" bg-white mx-auto px-2 py-8">
        <div className="flex flex-col container mx-auto px-2 md:flex-row gap-6">
          
          {/* Left: FindAgent (40%) */}
          <div className="w-full md:w-3/5">
           <Cardbox/>
           <Agentdes/>
          </div>

          {/* Right: Agentbox (60%) */}
          <div className="w-full  md:w-2/6">
      
      <Contact/>
      <AgentSidebar/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AgentOverview;
