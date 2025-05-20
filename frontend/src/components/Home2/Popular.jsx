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

const Popular = () => {
  return (
    <div className="bg-white py-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading Section */}
        <div className='flex flex-col  md:flex-row '>
       
          <div className="">
            <h1 className="text-3xl md:text-4xl text-blue-950 font-bold mb-2 mt-4">Papular City</h1>
            <p className="text-gray-600 text-lg md:text-xl mb-10">Find properties in these cities.</p>
          </div>
        
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
          {placesData.map(({ id, city, img, properties }) => (
            <div
              key={id}
              className="relative group cursor-pointer overflow-hidden shadow-md h-56" // h-56 is 14rem
            >
              <img src={img} alt={city} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-60 group-hover:bg-opacity-30 transition-opacity duration-700"></div>
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

export default Popular;
