import React from 'react';
import { useParams } from 'react-router-dom';
import AgentOverview from '../components/SingleAgent/AgentOverview';
import HeroSection from '../components/Agent/HeroSection';
import CalltoAction from '../components/Home2/CalltoAction';

const Agentdetail = () => {
  const { id } = useParams();

  return (
    <div>
      {/* Optional: Add a Hero Section if needed */}
      {/* <HeroComponent /> */}
      <HeroSection/>

      {/* Main Content Container */}
      <div className="max-w-screen-3xl bg-white mx-auto px-3 sm:px-9">
        <AgentOverview id={id} />
        
      </div>
      <CalltoAction/>
    </div>
  );
};

export default Agentdetail;

