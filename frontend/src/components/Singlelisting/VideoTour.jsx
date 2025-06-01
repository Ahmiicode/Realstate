import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Import play icon
import image from '../../assets/bg13.jpg';

const VideoTour = () => {
  return (
    <div className="mt-6 p-6 rounded-lg border border-gray-300 bg-white">
      <h2 className="text-3xl font-bold mb-4">Property Video</h2>

      <div className="relative aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt="Video thumbnail"
          className="w-full h-full object-cover rounded"
        />

        {/* Centered Play Button */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-blue-600 p-6 rounded-full shadow-lg hover:scale-105 transition transform cursor-pointer">
            <FaPlay className="text-white w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTour;
