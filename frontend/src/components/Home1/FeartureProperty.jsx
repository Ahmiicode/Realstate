import React, { useEffect, useRef, useState } from 'react';
import { FaBed, FaBath, FaHome, FaMapMarkerAlt } from 'react-icons/fa';
// Fix image6 import to use unique image
// Update the last image import to be unique
import properties from '../../data/properties'


const CARD_WIDTH = 736; // 720px card + 16px gap (space-x-4)

const FeatureProperty = () => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev >= properties.length - 2 ? 0 : prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    containerRef.current?.scrollTo({
      left: index * CARD_WIDTH,
      behavior: 'smooth',
    });
  }, [index]);

  return (
    <div className="text-center bg-white p-6">
        <div className='flex justify-center'>
             <span className='w-60 mt-14 mr-4 border-t-1 text-gray-400 border-current' />
      <h1 className="text-4xl font-bold mb-2 mt-9">Fearture Properties</h1>
       <span className='w-60 mt-14 ml-4 border-t-1 text-gray-400 border-current' />
        </div>

      <p className="text-gray-600 text-xl mb-6">handpicked exclusive properties by our team.</p>

      <div
        className="overflow-hidden h-[800px] mx-auto"
        style={{ width: `${CARD_WIDTH * 2}px` }}
        ref={containerRef}
      >
        <div 
          className="flex space-x-4"
          style={{ width: `${properties.length * CARD_WIDTH}px` }}
        >
          {properties.map((property) => (
            <div
              key={property.id}
              className="w-[720px] h-[700px] bg-white  shadow-lg p-8 flex-shrink-0 flex flex-col"
            >
           <img
  src={property.image}
  alt={property.name}
  className="w-full h-[400px] object-cover mb-6 transition-transform transform hover:scale-95 hover:opacity-80"
/>

          <div className="flex">
      {/* Left Side Content */}
      <div className="flex-1 flex flex-col  justify-start p-4">
        <div>
            <h1></h1>
          <h2 className="text-3xl font-bold  mb-4">{property.name}</h2>
          <p className="text-gray-600 text-xl mb-4 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> {/* Map Marker Icon */}
            {property.location}
          </p>
        </div>
        
        {/* Property Data (Beds, Baths, Rooms, Area) */}
        <div className="flex flex-wrap gap-4">
          <p className="text-gray-500 text-lg flex items-center">
            <FaBed className="mr-2" /> {/* Bed Icon */}
            {property.bedrooms} Beds
          </p>
          <p className="text-gray-500 text-lg flex items-center">
            <FaBath className="mr-2" /> {/* Bath Icon */}
            {property.bathrooms} Baths
          </p>
          <p className="text-gray-500 text-lg flex items-center">
            <FaHome className="mr-2" /> {/* Room Icon */}
            {property.Rooms} Rooms
          </p>
          <p className="text-gray-500 text-lg flex items-center">
            <span className="mr-2">📐</span> {/* Icon for area */}
            {property.sqft} Sq Ft
          </p>
        </div>
      </div>

      {/* Right Side (Icons Section or other elements) */}
    
    </div>
    <hr />
   <div className="flex justify-between items-center mt-4">
  {/* Author Image on Left */}
  <div className="flex items-center">
    <img
      src={property.authorImage} // assuming the property data has the author's image
      alt="Author"
      className="w-14 h-14 rounded-full object-cover mr-2"
    />
    <span className="text-gray-700  text-xl font-semibold">{property.authorname}</span>
  </div>

  {/* Price on Right */}
  <span className="text-2xl font-bold text-gray-900">{property.price}</span>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProperty;