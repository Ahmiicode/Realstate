import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Import play icon
import image from '../../assets/view.png';

const View = () => {
  return (
    <div className="mt-6 p-6 rounded-lg border border-gray-300 bg-white">
      <h2 className="text-3xl font-bold mb-4">Property View</h2>

      <div className="relative aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt="Video thumbnail"
          className="w-full h-full object-cover rounded"
        />

      
       
      </div>
    </div>
  );
};

export default View;
