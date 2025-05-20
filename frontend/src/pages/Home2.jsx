import React from 'react';
import Herosection from '../components/Home2/Herosection';
import bgImage from '../assets/home2.jpg'; // your second background image
import Popular from '../components/Home2/Popular';
import RecentProperty from '../components/Home2/RecentProperty';
import FeatureProperty from '../components/Home2/FeatureProperty';
import Office from  '../components/Home1/Office'
import Team from '../components/Home2/Team';
import CallToAction from '../components/Home2/CalltoAction';
const Home2 = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image specific to Home2 */}
      <div
        className="fixed top-0 left-0 w-full h-[900px] bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Optional dark overlay */}
      <div className="fixed top-0 left-0 w-full h-[900px] bg-black opacity-45 -z-10" />

      {/* Content */}
      <div className="relative z-10">
        <Herosection />
        <Popular/>
        <FeatureProperty/>
        <RecentProperty/>
        <Office/>
        <Team/>
        <CallToAction/>
      </div>
    </div>
  );
};

export default Home2;
