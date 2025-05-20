import React from 'react';
import Herosection from '../components/Home1/Herosection';
import FeatureProperty from '../components/Home1/FeartureProperty';
import RecentProperty from '../components/Home1/RecentProperty';
import Places from '../components/Home1/Places';
import Office from '../components/Home1/Office';
import Partner from '../components/Home1/Partner';
import Peoplesay from '../components/Home1/Peoplesay';
import Contact from '../components/Home1/Contact';
import Latestnew from '../components/Home1/Latestnew';
import bgImage from '../assets/bg.avif'; // background image for Home only

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image only for Home */}
      <div
        className="fixed top-0 left-0 w-full h-[900px] bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Optional dark overlay */}
      <div className="fixed top-0 left-0 w-full h-[900px] bg-black opacity-30 -z-10" />

      {/* Home content */}
      <div className="relative z-10">
        <Herosection />
        <FeatureProperty />
        <RecentProperty />
        <Places />
        <Office />
        <Partner />
        <Peoplesay />
        <Contact />
        <Latestnew />
      </div>
    </div>
  );
};

export default Home;
