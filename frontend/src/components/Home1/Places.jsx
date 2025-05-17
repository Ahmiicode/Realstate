import React from 'react';
import image1 from '../../assets/city5.jpg';
import image2 from '../../assets/city4.jpg';
import image3 from '../../assets/city3.jpg';
import image4 from '../../assets/city6.jpg';
import image5 from '../../assets/city7.jpg';

const placesData = [
  { id: 1, city: "New York", img: image1, properties: 120 },
  { id: 2, city: "Los Angeles", img: image2, properties: 85 },
  { id: 3, city: "Chicago", img: image5, properties: 90 },
  { id: 4, city: "Houston", img: image4, properties: 60 },
];

const Places = () => {
  return (
    <div className="max-w-full bg-white mx-auto px-4 py-8">
      {/* Heading Section */}
      <div className='flex flex-col items-center md:flex-row justify-center'>
        <span className='hidden md:block w-60 mb-12 mr-4 border-t border-gray-400' />
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-4">Most Popular Places</h1>
          <p className="text-gray-600 text-lg md:text-xl mb-10">Find properties in these cities.</p>
        </div>
        <span className='hidden md:block w-60 mb-12 ml-4 border-t border-gray-400' />
      </div>

      {/* Image Grid Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left big image */}
        <div className="flex-1">
          <div className="relative group cursor-pointer  overflow-hidden shadow-lg">
            <img
              src={image3}
              alt="San Francisco"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60 group-hover:bg-opacity-30 transition-opacity duration-700"></div>

            {/* Centered text on hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <h2 className="text-white text-2xl md:text-4xl font-bold">San Francisco</h2>
              <p className="text-white text-base md:text-lg mt-2">Properties: 150</p>
            </div>
          </div>
        </div>

        {/* Right images grid */}
        <div className="flex-1 w-full grid grid-cols-2 gap-4 md:gap-6">
          {placesData.map(({ id, city, img, properties }) => (
            <div key={id} className="relative group cursor-pointer overflow-hidden shadow-md aspect-square md:aspect-auto">
              <img
                src={img}
                alt={city}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0  bg-black  opacity-60 group-hover:bg-opacity-30 transition-opacity duration-700"></div>

              {/* Centered text on hover */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <h3 className="text-white text-xl md:text-2xl font-semibold">{city}</h3>
                <p className="text-white text-sm md:text-base mt-1">Properties: {properties}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
