import React from 'react';

const Details = ({ property }) => {
  return (
    <>
      {/* Property Details */}
      <div className="mt-6 p-4 md:p-6 rounded-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Property Details</h2>
        <hr className="mb-4 text-gray-300" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-base text-gray-700">
          <li><strong>Property ID:</strong> {property.propertyId || 'RV151'}</li>
          <li><strong>Price:</strong> {property.price}</li>
          <li><strong>Property Size:</strong> {property.sqft} Sq Ft</li>
          <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
          <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
          <li><strong>Garage:</strong> {property.garage || 1}</li>
          <li><strong>Garage Size:</strong> {property.garageSize || '458 SqFt'}</li>
          <li><strong>Year Built:</strong> {property.yearBuilt || '2019-01-09'}</li>
          <li><strong>Property Type:</strong> {property.propertyType || 'Full Family Home'}</li>
          <li><strong>Property Status:</strong> {property.status || 'For rent'}</li>
        </ul>
      </div>

      {/* Additional Details */}
      <div className="mt-6 p-4 md:p-6 rounded-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Additional Details</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-base text-gray-700">
          <li><strong>Property ID:</strong> {property.propertyId || 'RV151'}</li>
          <li><strong>Price:</strong> {property.price}</li>
          <li><strong>Property Size:</strong> {property.sqft} Sq Ft</li>
          <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
          <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
          <li><strong>Garage:</strong> {property.garage || 1}</li>
          <li><strong>Garage Size:</strong> {property.garageSize || '458 SqFt'}</li>
          <li><strong>Year Built:</strong> {property.yearBuilt || '2019-01-09'}</li>
          <li><strong>Property Type:</strong> {property.propertyType || 'Full Family Home'}</li>
          <li><strong>Property Status:</strong> {property.status || 'For rent'}</li>
        </ul>
      </div>

      {/* Features Section */}
      <div className="mt-6 bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Features</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-base text-gray-700 list-disc list-inside">
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
    </>
  );
};

export default Details;

