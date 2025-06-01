import React from 'react';

const LocationMap = ({ lat = 40.7128, lng = -74.0060 }) => {
  return (
    <div className="mt-6 p-6 rounded-lg border border-gray-300 bg-white">
      <h2 className="text-2xl font-bold mb-4">Location</h2>
      <iframe
        src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
        width="100%"
        height="300"
        allowFullScreen
        loading="lazy"
        className="rounded"
        title="Map"
      ></iframe>
    </div>
  );
};

export default LocationMap;
