import React, { useState } from 'react';

const Search = () => {
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');
  const [area, setArea] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [price, setPrice] = useState('');
  const [priceRange, setPriceRange] = useState(10000); // default max price

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log({
      status,
      type,
      area,
      bedrooms,
      bathrooms,
      price,
      priceRange,
    });
  };

  return (
    <div className="max-w-8xl bg-gray-200 mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Property Status */}
          <div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-[320px] text-xl text-gray-600 px-4 py-4 bg-white"
            >
              <option value="">Property Status</option>
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
            </select>
          </div>

          {/* Property Type */}
          <div>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-[320px]  text-xl text-gray-600   px-4 py-4 bg-white "
            >
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="office">Office</option>
            </select>
          </div>

          {/* Area From */}
          <div>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-[320px]  text-xl text-gray-600   px-4 py-4 bg-white"
            >
              <option value="">Area From</option>
              <option value="500">500+</option>
              <option value="1000">1000+</option>
              <option value="2000">2000+</option>
              <option value="5000">5000+</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-[320px]  text-xl text-gray-600   px-4 py-4 bg-white"
            >
              <option value="">Location</option>
              <option value="100000">$100,000+</option>
              <option value="500000">$500,000+</option>
              <option value="1000000">$1,000,000+</option>
              <option value="5000000">$5,000,000+</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Bedrooms */}
          <div>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-[320px]  text-xl text-gray-600   px-4 py-4 bg-white"
            >
              <option value="">Bedrooms</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* Bathrooms */}
          <div>
            <select
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              className="w-[320px]  text-xl text-gray-600  px-4 py-4 bg-white"
            >
              <option value="">Bathrooms</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* Price Range Slider */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Max Price: <span className="text-blue-600">${priceRange.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min="100000"
              max="6000000"
              step="100000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-[320px]"
            />
          </div>
           <div className="flex  pt-4">
          <button
            type="submit"
            className="px-8 py-3 w-[320px] text-2xl bg-blue-800 text-white  hover:bg-blue-700 transition-colors"
          >
           Search
          </button>
        </div>
        </div>

        {/* Search Button */}
       
      </form>
    </div>
  );
};

export default Search;
