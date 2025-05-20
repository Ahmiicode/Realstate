import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const HeroSection = () => {
  const [category, setCategory] = useState('');

  return (
    <div className="bg-transparent text-white text-center p-4 md:p-10 mt-[-30px] flex flex-col justify-center items-center min-h-screen">
      {/* Left side content */}
      <div className="mb-6 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Find Your Dream House
        </h1>
        <p className="text-base md:text-xl lg:text-2xl mb-6 max-w-3xl">
          Your Property, Our Priority<br className="hidden md:block" />
          From as low as $10 per day with limited-time offer discounts
        </p>
      </div>

      {/* Search section */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl px-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for homes by city, address..."
          className="text-gray-600 text-sm md:text-xl border px-4 py-3 md:px-6 md:py-4 bg-white w-full md:w-auto md:flex-1"
        />

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-gray-600 text-sm md:text-xl border px-4 py-3 md:px-6 md:py-4 bg-white w-full md:w-64"
        >
          <option value="">Select Category</option>
          <option value="houses">Houses</option>
          <option value="apartments">Apartments</option>
          <option value="villas">Villas</option>
        </select>

        {/* Search Button */}
        <button className="bg-blue-700 text-sm md:text-xl font-bold text-white w-full md:w-auto py-3 md:py-4 px-6 flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors">
          <FaSearch className="text-xs md:text-sm" />
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default HeroSection;