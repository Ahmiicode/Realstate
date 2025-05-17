import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


const HeroSection = () => {
  const [category, setCategory] = useState('');

  return (
    <div className="bg-transparent  text-white text-center p-10 mt-[-30px] flex flex-col justify-center items-center min-h-screen">
      {/* Left side content */}
      <div className="mb-6">
        <h1 className="text-7xl font-bold mb-4">Find Your Dream House</h1>
        <p className="text-2xl mb-6">
          Your Property, Our Priority
          From as low as $10 per day with limited-time offer discounts
        </p>
      </div>

      {/* Search section */}
      <div className="flex items-center">
        {/* Search Bar */}
        <input
          type="text"
          placeholder=" Search for homes by city ,address...."
          className=" text-gray-600  text-xl border px-6 py-6 bg-white   w-125"
        />

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-gray-600   text-xl border px-6 py-6 bg-white 0  w-95"
        >
          <option value="">Select Category</option>
          <option value="houses">Houses</option>
          <option value="apartments">Apartments</option>
          <option value="villas">Villas</option>
        </select>

        {/* Search Button */}
      <button className="bg-blue-700 text-xl font-bold text-white w-50 py-6 px-9 flex items-center gap-2 hover:bg-blue-700">
  <FaSearch className='text-sm font-bold' />
 SEARCH
</button>

      </div>
    </div>
  );
};

export default HeroSection;
