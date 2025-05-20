import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const HeroSection = () => {
  const [transactionType, setTransactionType] = useState('buy');
  const [type, setType] = useState('');
  const [areaFrom, setAreaFrom] = useState('');
  const [beds, setBeds] = useState('');
  const [baths, setBaths] = useState('');
  const [location, setLocation] = useState('');

  const selectClass =
    'w-full bg-white  px-6 py-3 md:py-6 text-gray-600  text-sm md:text-xl ';

  return (
    <div className="bg-transparent text-white p-4 md:p-10 mt-[70px] flex flex-col  justify-center min-h-screen">
      {/* Heading */}
      <div className="mb-6 px-4 ml-19 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Find Your Dream House
        </h1>
        <p className="text-base md:text-xl lg:text-2xl mb-6 max-w-3xl mx-auto md:mx-0">
          Your Property, Our Priority — From as low as $10 per day with limited time offer discounts
        </p>
      </div>

      {/* Filter Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8  backdrop-blur-md bg-gray-800/40 shadow-lg">
        {/* Transaction Type Toggle */}
        <div className="flex gap-4 mb-6">
          {['buy', 'rent'].map((mode) => (
            <button
              key={mode}
              onClick={() => setTransactionType(mode)}
              className={`flex-1 md:flex-none px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold rounded-lg transition-colors ${
                transactionType === mode
                  ? 'bg-blue-700 text-white'
                  : 'bg-white/90 text-gray-900 hover:bg-white'
              }`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>

        {/* Filter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 rounded-none">
          <div className="col-span-1 lg:col-span-2 ">
            <select value={type} onChange={(e) => setType(e.target.value)} className={selectClass}>
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
            </select>
          </div>

          <div className="col-span-1">
            <select value={areaFrom} onChange={(e) => setAreaFrom(e.target.value)} className={selectClass}>
              <option value="">Area </option>
              <option value="1000">1000+</option>
              <option value="2000">2000+</option>
              <option value="3000">3000+</option>
            </select>
          </div>

          <div className="col-span-1">
            <select value={beds} onChange={(e) => setBeds(e.target.value)} className={selectClass}>
              <option value="">Beds</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="col-span-1">
            <select value={baths} onChange={(e) => setBaths(e.target.value)} className={selectClass}>
              <option value="">Bathrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="col-span-1">
            <select value={location} onChange={(e) => setLocation(e.target.value)} className={selectClass}>
              <option value="">Location</option>
              <option value="newyork">New York</option>
              <option value="losangeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="col-span-1 flex items-center">
            <button className="w-full bg-blue-700 hover:bg-blue-600 transition-colors text-white font-semibold py-3 md:py-6  px-7 flex items-center gap-2 justify-center">
              <FaSearch className="text-lg" />
              <span className="text-sm md:text-lg">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
