import React from 'react';
import image1 from '../../assets/gallery.jpg';
import image2 from '../../assets/gallery3.jpg';

const Detail = () => {
  return (
    <div className="flex flex-col bg-white md:flex-row items-center p-6 gap-8 pb-22 pt-22 max-w-9xl mx-auto">
      {/* Left Side - Description */}
      <div className="w-full md:w-1/2 space-y-4 md:pr-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Trusted By Thousands
        </h2>
        <h3 className="text-2xl md:text-4xl font-semibold text-gray-600">
          Delivering High Quality Projects & Property Valuation
        </h3>
        <p className="text-base md:text-xl text-gray-700 leading-relaxed">
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <p className="text-base md:text-xl text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <button className="mt-4 px-12 py-4 bg-blue-700 text-white  hover:bg-blue-700 transition text-base md:text-lg">
          Read More
        </button>
      </div>

      {/* Right Side - Images */}
      <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
        <div className="relative aspect-w-16 aspect-h-12 md:aspect-w-4 md:aspect-h-3">
          <img
            src={image2}
            alt="Main property"
            className="w-full h-full object-cover shadow-lg "
          />
          <div className="absolute -bottom-4 -left-4 w-1/2 md:w-2/5 h-1/2 md:h-3/5 border-4 border-white shadow-md overflow-hidden">
            <img
              src={image1}
              alt="Property details"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;