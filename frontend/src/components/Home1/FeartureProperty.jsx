import React, { useEffect, useRef, useState } from 'react';
import { FaBed, FaBath, FaHome, FaMapMarkerAlt } from 'react-icons/fa';
import properties from '../../data/properties';

const FeatureProperty = () => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setIndex(prev => (prev >= properties.length - 2 ? 0 : prev + 1));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      containerRef.current?.scrollTo({
        left: index * 736,
        behavior: 'smooth',
      });
    }
  }, [index, isMobile]);

  return (
    <div className="text-center bg-white p-6 overflow-x-hidden">
      <div className="flex justify-center">
        <span className="hidden lg:block w-60 mt-14 mr-4 border-t text-gray-400" />
        <h1 className="text-3xl lg:text-4xl font-bold mb-2 mt-9">Feature Properties</h1>
        <span className="hidden lg:block w-60 mt-14 ml-4 border-t text-gray-400" />
      </div>

      <p className="text-gray-600 lg:text-xl mb-6">handpicked exclusive properties by our team.</p>

      {/* Desktop Layout */}
      <div
        className="hidden lg:block overflow-hidden h-[800px] mx-auto"
        style={{ width: '1472px' }}
        ref={containerRef}
      >
        <div
          className="flex space-x-4"
          style={{ width: `${properties.length * 736}px` }}
        >
          {properties.map((property) => (
            <DesktopCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Mobile and Tablet Layout: Horizontal scroll/swipe */}
      <div
        className="lg:hidden overflow-x-auto w-full py-4 px-4 scroll-snap-x"
        style={{ WebkitOverflowScrolling: 'touch' }} // smooth momentum scroll on iOS
      >
        <div className="flex space-x-4 max-w-6xl mx-auto">
          {properties.map((property) => (
            <div
              key={property.id}
              className="flex-shrink-0 w-80 scroll-snap-child"
            >
              <MobileCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Desktop Card Component
const DesktopCard = ({ property }) => (
  <div className="w-[720px] h-[700px] bg-white shadow-lg p-8 flex-shrink-0 flex flex-col">
    <img
      src={property.image}
      alt={property.name}
      className="w-full h-[400px] object-cover mb-6 transition-transform hover:scale-95 hover:opacity-80"
    />
    <div className="flex">
      <div className="flex-1 flex flex-col justify-start p-4">
        <h2 className="text-3xl font-bold mb-4">{property.name}</h2>
        <p className="text-gray-600 text-xl mb-4 flex items-center">
          <FaMapMarkerAlt className="mr-2" />
          {property.location}
        </p>
        <div className="flex flex-wrap gap-4">
          <PropertyFeature icon={FaBed} text={`${property.bedrooms} Beds`} />
          <PropertyFeature icon={FaBath} text={`${property.bathrooms} Baths`} />
          <PropertyFeature icon={FaHome} text={`${property.Rooms} Rooms`} />
          <PropertyFeature icon="📐" text={`${property.sqft} Sq Ft`} />
        </div>
      </div>
    </div>
    <hr />
    <AuthorSection property={property} />
  </div>
);

// Mobile Card Component
const MobileCard = ({ property }) => (
  <div className="w-full bg-white shadow-lg p-6">
    <img
      src={property.image}
      alt={property.name}
      className="w-full h-48 object-cover mb-4"
    />
    <h2 className="text-2xl font-bold mb-2">{property.name}</h2>
    <p className="text-gray-600 text-base mb-3 flex items-center">
      <FaMapMarkerAlt className="mr-2" />
      {property.location}
    </p>
    <div className="grid grid-cols-2 gap-3 mb-4">
      <PropertyFeature icon={FaBed} text={`${property.bedrooms} Beds`} />
      <PropertyFeature icon={FaBath} text={`${property.bathrooms} Baths`} />
      <PropertyFeature icon={FaHome} text={`${property.Rooms} Rooms`} />
      <PropertyFeature icon="📐" text={`${property.sqft} Sq Ft`} />
    </div>
    <hr className="mb-4" />
    <AuthorSection property={property} mobile />
  </div>
);

// Shared Components
const PropertyFeature = ({ icon: Icon, text }) => (
  <p className="text-gray-500 text-sm flex items-center">
    {typeof Icon === 'string' ? (
      <span className="mr-2">{Icon}</span>
    ) : (
      <Icon className="mr-2" />
    )}
    {text}
  </p>
);

const AuthorSection = ({ property, mobile }) => (
  <div
    className={`flex ${mobile ? 'flex-col' : 'justify-between'} items-center gap-3`}
  >
    <div className="flex items-center">
      <img
        src={property.authorImage}
        alt="Author"
        className={`${
          mobile ? 'w-10 h-10' : 'w-14 h-14'
        } rounded-full object-cover mr-2`}
      />
      <span className={`${mobile ? 'text-base' : 'text-xl'} font-semibold text-gray-700`}>
        {property.authorname}
      </span>
    </div>
    <span className={`${mobile ? 'text-lg' : 'text-2xl'} font-bold text-gray-900`}>
      {property.price}
    </span>
  </div>
);

export default FeatureProperty;
