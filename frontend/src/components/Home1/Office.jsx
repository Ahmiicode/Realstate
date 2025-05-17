import React from 'react';
import image1 from '../../assets/office.jpg';

const Office = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[600px] flex items-center"
      style={{ backgroundImage: `url(${image1})` }}
    >
      {/* Dark overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/0"></div>


      {/* Content */}
      <div className="relative z-10 max-w-3xl text-blue-950 ml-10">
        <h2 className="text-5xl font-bold mb-6">Why Choose Us ?</h2>

        <p className="whitespace-pre-line text-gray-500 text-xl leading-7">
     The first step in selling your property is to get a valuation from local experts. They will inspect your home and take into account its unique features, the area and market conditions before providing you with the most accurate valuation.
        </p>
        <p className='text-xl text-gray-500 mt-8'> The first step in selling your property is to get a valuation from local experts. They will inspect your home and take into account its unique features, the area and market conditions before providing you with the most accurate valuation.</p>
        <button className="mt-6 px-15 text-xl  text-white py-4 bg-blue-800  hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Office;
