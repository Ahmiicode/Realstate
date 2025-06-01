import React, { useState } from 'react';
import { FaBed, FaBath, FaHome, FaMapMarkerAlt, FaCar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import properties from '../../data/properties';
import FloorPlan from './FloorPlan';
import VideoTour from './VideoTour';
import LocationMap from './LocationMap';
import Contact from './Contact';
import View from './View';
import NearbyAndReviews from './NearbyAndReviews';

const selectStyle = "w-full border border-gray-300 rounded px-3 py-2";

const PropertyOverview = ({ id }) => {
  const property = properties.find((item) => parseInt(id) === item.id);

  // Exclude City Apartment (id: 2)
  if (!property || property.id === 0) {
    return <p className="text-center text-red-600">Property not found.</p>;
  }

  const [showMore, setShowMore] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = [property.image, ...(property.gallery || [])];

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Dummy filter handlers for now
  const [filters, setFilters] = useState({
    status: '',
    type: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    priceRange: 6000000,
  });
  const handleChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    // implement search logic here
  };

  return (
    <div className="max-w-screen-5xl bg-white mx-auto px-4 py-8 flex flex-col lg:flex-row gap-10">
      {/* LEFT SIDE */}
      <div className="lg:w-2/3 w-full relative">
        {/* Main Image with Label and Arrows */}
        <div className="relative mb-4">
          <img
            src={allImages[currentImageIndex]}
            alt="Main"
            className="rounded-xl w-full h-[400px] object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-blue-700 text-white px-4 py-2 rounded shadow-lg text-xl font-semibold">
            {property.name}
          </div>
          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {allImages.slice(0, 4).map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => handleThumbnailClick(idx)}
              alt={`thumb-${idx}`}
              className={`rounded-lg h-40 w-full object-cover cursor-pointer ${
                currentImageIndex === idx ? 'ring-4 ring-blue-500' : ''
              }`}
            />
          ))}
        </div>

        {/* Description */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-2">Property Description</h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            {showMore ? property.description : `${property.description?.substring(0, 400)}...`}
          </p>
          {property.description?.length > 250 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 inline-block text-blue-700 font-semibold hover:underline"
            >
              {showMore ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>

        {/* Additional Property Details */}
        <div className="mt-6  p-6 rounded-lg border border-gray-300">
          <h2 className="text-2xl font-bold mb-4">Property Details</h2>
          <hr className='p-3 text-gray-300'/>
          <ul className="text-gray-700 grid text-xl  grid-cols-2 space-y-4">
            <div className='space-y-3'>
                     <li><strong>Property ID:</strong> {property.propertyId || 'RV151'}</li>
            <li><strong>Price:</strong> {property.price}</li>
            <li><strong>Property Size:</strong> {property.sqft} Sq Ft</li>
            <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
            <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
            </div>
       <div className='space-y-3'>
  <li><strong>Garage:</strong> {property.garage || 1}</li>
            <li><strong>Garage Size:</strong> {property.garageSize || '458 SqFt'}</li>
            <li><strong>Year Built:</strong> {property.yearBuilt || '2019-01-09'}</li>
            <li><strong>Property Type:</strong> {property.propertyType || 'Full Family Home'}</li>
            <li><strong>Property Status:</strong> {property.status || 'For rent'}</li>
       </div>
        

          
          </ul>
        </div>
          <div className="mt-6  p-6 rounded-lg border border-gray-300">
          <h2 className="text-2xl text-blue-700 font-bold mb-4">Additional Details</h2>
          <ul className="text-gray-700 grid text-xl  grid-cols-2 space-y-4">
            <div className='space-y-3'>
                     <li><strong>Property ID:</strong> {property.propertyId || 'RV151'}</li>
            <li><strong>Price:</strong> {property.price}</li>
            <li><strong>Property Size:</strong> {property.sqft} Sq Ft</li>
            <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
            <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
            </div>
       <div className='space-y-3'>
  <li><strong>Garage:</strong> {property.garage || 1}</li>
            <li><strong>Garage Size:</strong> {property.garageSize || '458 SqFt'}</li>
            <li><strong>Year Built:</strong> {property.yearBuilt || '2019-01-09'}</li>
            <li><strong>Property Type:</strong> {property.propertyType || 'Full Family Home'}</li>
            <li><strong>Property Status:</strong> {property.status || 'For rent'}</li>
       </div>

          
          </ul>
        </div>
        {/* Features Section */}
<div className="mt-6 bg-gray-100 p-6 rounded-lg border border-gray-300">
  <h2 className="text-2xl font-bold mb-4">Features</h2>
  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 text-xl list-disc list-inside">
    {[
      "Air Conditioning",
      "Swimming Pool",
      "Central Heating",
      "Spa & Massage",
      "Pets Allow",
      "Gym",
      "Alarm",
      "Window Covering",
      "Free WiFi",
      "Car Parking",
    ].map((feature) => (
      <li key={feature}>{feature}</li>
    ))}
  </ul>
</div>
<FloorPlan/>
<VideoTour/>
<LocationMap/>
<View/>
<NearbyAndReviews/>
      </div>
      

      {/* RIGHT SIDE - Filter Panel */}
      <div className="lg:w-1/3 w-full p-6 rounded border border-gray-300 bg-gray-50 shadow-sm">
        <form onSubmit={handleSearch} className="space-y-4">
          <h1 className="text-center text-2xl font-semibold mb-6 border-b border-gray-300 pb-4">
            Property Filter
          </h1>

          <select name="status" onChange={handleChange} className={selectStyle} value={filters.status}>
            <option value="">Property Status</option>
            <option value="sale">For Sale</option>
            <option value="rent">For Rent</option>
          </select>

          <select name="type" onChange={handleChange} className={selectStyle} value={filters.type}>
            <option value="">Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="office">Office</option>
          </select>

          <select name="area" onChange={handleChange} className={selectStyle} value={filters.area}>
            <option value="">Area From</option>
            <option value="500">500+</option>
            <option value="1000">1000+</option>
            <option value="2000">2000+</option>
            <option value="5000">5000+</option>
          </select>

          <select name="bedrooms" onChange={handleChange} className={selectStyle} value={filters.bedrooms}>
            <option value="">Bedrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>

          <select name="bathrooms" onChange={handleChange} className={selectStyle} value={filters.bathrooms}>
            <option value="">Bathrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>

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

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 text-lg rounded"
          >
            Search
          </button>

          {/* Property Categories */}
         <div className="mt-10 px-4">
  <h2 className="text-2xl font-semibold mb-4 text-center">Property Categories</h2>
  <div className="flex flex-col items-center gap-3">
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
        className="w-full max-w-sm p-4 sm:p-5 border text-base sm:text-lg border-gray-300 rounded flex justify-between items-center cursor-pointer transition-transform duration-300 hover:translate-x-1"
      >
        <span>{name}</span>
        <span className="font-semibold px-2 py-0.5 rounded text-white bg-blue-800">{count}</span>
      </div>
    ))}
  </div>
</div>

        </form>
        {/* Contact / Agent Info */}
       <div className="sticky top-33">
  <Contact />
</div>


      </div>
      
    </div>
  );
};

export default PropertyOverview;
