import React from 'react';
import image1 from '../../assets/office.jpg';

const Office = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] md:h-[500px] lg:h-[600px] flex items-center"
      style={{ backgroundImage: `url(${image1})` }}
    >
      {/* Responsive gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/80 to-white/0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xs md:max-w-3xl ml-4 md:ml-10 text-blue-950">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          Why Choose Us ?
        </h2>

        <p className="whitespace-pre-line text-gray-500 text-base md:text-lg lg:text-xl leading-5 md:leading-7">
          The first step in selling your property is to get a valuation from local experts. 
          They will inspect your home and take into account its unique features, the area 
          and market conditions before providing you with the most accurate valuation.
        </p>
        
        <p className="text-sm md:text-lg lg:text-xl text-gray-500 mt-4 md:mt-8">
          The first step in selling your property is to get a valuation from local experts. 
          They will inspect your home and take into account its unique features, the area 
          and market conditions before providing you with the most accurate valuation.
        </p>
        
        <button className="mt-4 md:mt-6 px-8 md:px-12 py-3 md:py-4 text-base md:text-lg lg:text-xl text-white bg-blue-800 hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Office;
