import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import image1 from '../../assets/team11.jpg';
import image2 from '../../assets/team12.jpg';
import image3 from '../../assets/team13.jpg';

const teamMembers = [
  { id: 1, name: 'Martinn Smith', role: 'Real Estate Agent', image: image1 },
  { id: 2, name: 'Sarah Johnson', role: 'Real Estate Agent', image: image2 },
  { id: 3, name: 'David Williams', role: 'Real Estate Agent', image: image3 },
];

const Team = () => {
  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="lg:ml-34  mb-10">
        <h1 className="lg:text-5xl text-3xl font-bold text-gray-800 mb-2">Meet our team</h1>
        <p className="text-gray-500 text-xl">See our top of the month teams</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div
              className="absolute inset-0 bg-white/40 backdrop-blur-sm flex flex-col items-center justify-center 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-4"
            >
              {/* Sliding Text */}
              <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                <h2 className="text-xl font-semibold text-blue-900 mb-1">Hi There!</h2>
                <p className="text-sm text-blue-800 mb-4">I am Senior Agent Property</p>
              </div>

              {/* Agent Profile Button */}
              <button className="bg-blue-800 text-white text-sm px-4 py-2 rounded-full mb-4 hover:bg-blue-700 transition">
                Agent Profile
              </button>

              {/* Social Icons Slide In */}
              <div className="flex gap-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                <FaFacebookF className="text-blue-800 hover:text-blue-600 cursor-pointer" />
                <FaTwitter className="text-blue-800 hover:text-blue-600 cursor-pointer" />
                <FaLinkedinIn className="text-blue-800 hover:text-blue-600 cursor-pointer" />
              </div>
            </div>

            {/* Agent Info below image */}
            <div className="bg-white text-black text-center py-4">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-lg">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
