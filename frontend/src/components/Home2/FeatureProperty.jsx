import React, { useEffect, useRef, useState } from 'react';
import { FaBed, FaBath, FaHome } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import properties from '../../data/properties';

const FeatureProperty = () => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cardWidth = isMobile ? 350 : 736;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev >= properties.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [index, cardWidth]);

  const handleNext = () => {
    setIndex(prev => (prev >= properties.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex(prev => (prev <= 0 ? properties.length - 1 : prev - 1));
  };

  return (
    <div className="p-6 overflow-x-hidden bg-white">
      {/* Container to center and limit max width */}
      <div className="max-w-[1472px] mx-auto">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 mt-9 px-4">
            Feature Properties
          </h1>
          <p className="text-gray-600 lg:text-xl mb-6 px-4">
            Exclusive properties by our team
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end items-center gap-2 px-4 mb-4">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>

        {/* Scroll container */}
        <div
          ref={containerRef}
          className="overflow-hidden"
          style={{ width: '100%' }}
        >
          <div
            className="flex space-x-4 px-4"
            style={{ width: `${properties.length * cardWidth}px` }}
          >
            {properties.map(property => (
              <div
                key={property.id}
                className={`flex-shrink-0 ${isMobile ? 'w-[350px]' : 'w-[736px]'}`}
              >
                {isMobile ? (
                  <MobileCard property={property} />
                ) : (
                  <DesktopCard property={property} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// DesktopCard component
const DesktopCard = ({ property }) => (
  <div className="w-[720px] h-[300px] relative group overflow-hidden rounded-lg shadow-lg">
    <img
      src={property.image}
      alt={property.name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />

    <div className="absolute left-4 bottom-4 group-hover:bottom-24 z-20 text-white text-2xl font-semibold px-4 py-2 shadow-md transition-all duration-500">
      {property.name}
    </div>

    <div
      className="absolute bottom-0 left-0 w-full text-white bg-blue-800 py-4 px-6
                 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0
                 transition-all duration-500 ease-in-out z-10"
    >
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-white text-sm md:text-base">
        <PropertyFeature icon={FaBed} text={`${property.bedrooms} Beds`} />
        <PropertyFeature icon={FaBath} text={`${property.bathrooms} Baths`} />
        <PropertyFeature icon={FaHome} text={`${property.Rooms} Rooms`} />
        <PropertyFeature icon="📐" text={`${property.sqft} Sq Ft`} />
      </div>
    </div>
  </div>
);

// MobileCard component
const MobileCard = ({ property }) => (
  <div className="w-full h-[300px] relative group overflow-hidden rounded-lg shadow-lg">
    <img
      src={property.image}
      alt={property.name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />

    <div
      className="absolute left-4 bottom-4 group-hover:bottom-24 z-20
                 text-white text-sm md:text-xl font-semibold
                 px-4 py-2 shadow-md transition-all duration-500"
    >
      {property.name}
    </div>

    <div
      className="absolute bottom-0 left-0 w-full text-white bg-blue-800 py-4 px-4
                 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0
                 transition-all duration-500 ease-in-out z-10"
    >
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm justify-start">
        <PropertyFeature icon={FaBed} text={`${property.bedrooms} Beds`} />
        <PropertyFeature icon={FaBath} text={`${property.bathrooms} Baths`} />
        <PropertyFeature icon={FaHome} text={`${property.Rooms} Rooms`} />
        <PropertyFeature icon="📐" text={`${property.sqft} Sq Ft`} />
      </div>
    </div>
  </div>
);

// PropertyFeature component
const PropertyFeature = ({ icon: Icon, text }) => (
  <p className="text-gray-300 text-lg flex items-center">
    {typeof Icon === 'string' ? (
      <span className="mr-2 text-gray-400">{Icon}</span>
    ) : (
      <Icon className="mr-2 text-gray-400" />
    )}
    {text}
  </p>
);

export default FeatureProperty;
