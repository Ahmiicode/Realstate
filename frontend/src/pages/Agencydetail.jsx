import React from 'react';
import { useParams } from 'react-router-dom';
import AgencyOverview from '../components/SingleAgency/AgencyOverview';
import HeroSection from '../components/Agency/HeroSection';
import CalltoAction from '../components/Home2/CalltoAction';

const Agencydetail = () => {
  const { id } = useParams();

  return (
    <div>
      {/* Optional: Add a Hero Section if needed */}
      {/* <HeroComponent /> */}
      <HeroSection/>

      {/* Main Content Container */}
      <div className="max-w-screen-3xl bg-white mx-auto px-3 sm:px-9">
        <AgencyOverview id={id} />
        
      </div>
      <CalltoAction/>
    </div>
  );
};

export default Agencydetail;
