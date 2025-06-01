import React from 'react';
import image1 from '../../assets/floorplan.jpg'
const FloorPlan = () => {
  return (
    <div className="mt-6 p-6 rounded-lg border border-gray-300 bg-white">
      <h2 className="text-2xl font-bold mb-4">Floor Plan</h2>
      <img src={image1} alt="Floor Plan" className="w-full rounded shadow" />
    </div>
  );
};

export default FloorPlan;
