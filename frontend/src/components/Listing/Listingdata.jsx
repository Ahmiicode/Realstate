import React, { useState } from 'react';
import { FaBed, FaBath, FaHome, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import properties from '../../data/properties'; // Your properties data

const Listing = () => {
  const [filters, setFilters] = useState({
    status: '',
    type: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    priceRange: 6000000,
  });

  const [filteredData, setFilteredData] = useState(properties);
  const [layout, setLayout] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('');
  const [category, setCategory] = useState(''); // for category filter

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'radio' && name === 'category') {
      setCategory(value);
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    let results = properties.filter((property) => {
      return (
        (!filters.status || property.status === filters.status) &&
        (!filters.type || property.type === filters.type) &&
        (!filters.area || parseInt(property.sqft) >= parseInt(filters.area)) &&
        (!filters.bedrooms || parseInt(property.bedrooms) >= parseInt(filters.bedrooms)) &&
        (!filters.bathrooms || parseInt(property.bathrooms) >= parseInt(filters.bathrooms)) &&
        (!filters.priceRange || parseInt(property.price.replace(/[^\d]/g, '')) <= parseInt(filters.priceRange)) &&
        (!category || property.category === category)
      );
    });

    if (sortBy === 'price-low') {
      results.sort((a, b) => parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, '')));
    } else if (sortBy === 'price-high') {
      results.sort((a, b) => parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, '')));
    } else if (sortBy === 'area') {
      results.sort((a, b) => parseInt(b.sqft) - parseInt(a.sqft));
    }

    setFilteredData(results);
  };

const selectStyle =
  'p-3 bg-white border text-xl text-brown-300 px-4 py-4 border-gray-300 w-full sm:w-[420px]';


  return (
    <div className="max-w-screen-3xl bg-white mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
       {/* Filter Sidebar */}
<div className="lg:w-1/3 w-full px-4 py-6">
  <form onSubmit={handleSearch} className="space-y-6 bg-white rounded shadow-md p-6">
    {/* Filter Header */}
    <h1 className="text-center text-2xl font-semibold border-b pb-4">
      Property Filter
    </h1>

    {/* Dropdowns */}
    <select name="status" onChange={handleChange} className={selectStyle}>
      <option value="">Property Status</option>
      <option value="sale">For Sale</option>
      <option value="rent">For Rent</option>
    </select>

    <select name="type" onChange={handleChange} className={selectStyle}>
      <option value="">Property Type</option>
      <option value="house">House</option>
      <option value="apartment">Apartment</option>
      <option value="villa">Villa</option>
      <option value="office">Office</option>
    </select>

    <select name="area" onChange={handleChange} className={selectStyle}>
      <option value="">Area From</option>
      <option value="500">500+</option>
      <option value="1000">1000+</option>
      <option value="2000">2000+</option>
      <option value="5000">5000+</option>
    </select>

    <select name="bedrooms" onChange={handleChange} className={selectStyle}>
      <option value="">Bedrooms</option>
      <option value="1">1+</option>
      <option value="2">2+</option>
      <option value="3">3+</option>
      <option value="4">4+</option>
    </select>

    <select name="bathrooms" onChange={handleChange} className={selectStyle}>
      <option value="">Bathrooms</option>
      <option value="1">1+</option>
      <option value="2">2+</option>
      <option value="3">3+</option>
      <option value="4">4+</option>
    </select>

    {/* Price Range */}
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Max Price: ${parseInt(filters.priceRange).toLocaleString()}
      </label>
      <input
        name="priceRange"
        type="range"
        min="100000"
        max="6000000"
        step="100000"
        value={filters.priceRange}
        onChange={handleChange}
        className="w-full"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 text-lg rounded"
    >
      Search
    </button>

    {/* Category Property Section */}
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Categories</h2>
      <div className="flex flex-col gap-3 items-center">
        {[
          { name: 'Residential', count: 12 },
          { name: 'Commercial', count: 5 },
          { name: 'Land', count: 8 },
          { name: 'Villa', count: 3 },
          { name: 'Office', count: 7 },
          { name: 'Apartment', count: 10 },
        ].map(({ name, count }) => (
          <div
            key={name}
            className="w-full max-w-md p-4 border text-base sm:text-lg md:text-xl border-gray-300 rounded flex justify-between items-center cursor-pointer transition-transform duration-300 hover:translate-x-1"
          >
            <span>{name}</span>
            <span className="font-semibold px-2 rounded text-white bg-blue-800">{count}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Property Attachment Section */}
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-4 text-center">Property Attachment</h2>
      <div className="flex flex-col items-center gap-4">
        <button
          type="button"
          className="flex items-center justify-between p-4 border border-gray-300 rounded w-full max-w-md hover:bg-blue-800 transition-colors cursor-pointer"
          onClick={() => alert('Download Document clicked')}
        >
          <span className="text-3xl">📄</span>
          <span className="font-medium">Download Document</span>
        </button>

        <button
          type="button"
          className="flex items-center justify-between p-4 border border-gray-300 rounded w-full max-w-md hover:bg-blue-800 transition-colors cursor-pointer"
          onClick={() => alert('Presentation clicked')}
        >
          <span className="text-3xl">📊</span>
          <span className="font-medium">Presentation</span>
        </button>
      </div>
    </div>
  </form>
</div>


        {/* Property Listings Section */}
        <div className="lg:w-2/3 w-full">
          {/* Sorting & Layout Control */}
          <div className="flex flex-col border border-gray-300 p-5 mt-6 md:flex-row justify-between items-center mb-6">
            <div className="mb-4 md:mb-0">
              <label className="text-sm text-gray-600 mr-2">Sort By:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="area">Area: High to Low</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button
                className={`p-2 border rounded ${
                  layout === 'grid' ? 'bg-blue-600 text-white' : 'bg-white'
                }`}
                onClick={() => setLayout('grid')}
              >
                2x Grid
              </button>
              <button
                className={`p-2 border rounded ${
                  layout === 'list' ? 'bg-blue-600 text-white' : 'bg-white'
                }`}
                onClick={() => setLayout('list')}
              >
                1x List
              </button>
            </div>
          </div>

          {/* Property Cards */}
          <div className={`grid gap-6 ${layout === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
            {filteredData.length === 0 ? (
              <p className="text-gray-500 text-lg col-span-full">No properties match the selected filters.</p>
            ) : (
              filteredData.map((property) => (
                <Link
                  key={property.id}
                  to={`/listing/${property.id}`}
                  className={`block bg-white shadow p-4 rounded-lg ${
                    layout === 'list' ? 'md:flex' : ''
                  }`}
                >
                  <img
                    src={property.image}
                    alt={property.name}
                    className={`${
                      layout === 'list'
                        ? 'w-1/2 h-auto md:h-60 object-cover rounded mb-4 md:mb-0 md:mr-4'
                        : 'w-full h-48 object-cover rounded mb-4'
                    }`}
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold mb-1">{property.name}</h2>
                      <p className="text-gray-600 mb-2 flex items-center">
                        <FaMapMarkerAlt className="mr-2" /> {property.location}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center">
                          <FaBed className="mr-1" /> {property.bedrooms} Beds
                        </span>
                        <span className="flex items-center">
                          <FaBath className="mr-1" /> {property.bathrooms} Baths
                        </span>
                        <span className="flex items-center">
                          <FaHome className="mr-1" /> {property.Rooms} Rooms
                        </span>
                        <span>📐 {property.sqft} Sq Ft</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <img
                          src={property.authorImage}
                          alt={property.authorname}
                          className="w-10 h-10 rounded-full mr-2"
                        />
                        <span className="font-medium">{property.authorname}</span>
                      </div>
                      <span className="text-xl font-semibold text-blue-700">{property.price}</span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
