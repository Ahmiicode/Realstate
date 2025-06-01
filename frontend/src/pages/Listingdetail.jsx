import React from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '../components/Singlelisting/Herosection';
import PropertyOverview from '../components/Singlelisting/PropertyOverview';
import FeatureProperty from '../components/Home1/FeartureProperty';
import CallToAction from '../components/Home2/CalltoAction';

const Listingdetail = () => {
  const { id } = useParams();

  return (
    <div className="">
      {/* Hero section stays full-width outside container */}
      <HeroSection />

      {/* Wrap other content in a centered container */}
    <div className="max-w-screen-3xl  bg-white mx-auto px-3 sm:px-9">
  <PropertyOverview id={id} />
  <FeatureProperty/>
  <CallToAction/>
</div>

    </div>
  );
};

export default Listingdetail;

