import React from 'react';
import bgImage from '../../assets/bgimage.jpg'; // adjust path as needed

const Contact = () => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover text-white py-24 px-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4 flex items-center justify-center text-center">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Signup & Build Your Dream House
          </h2>
          <p className="text-lg text-white mb-8">
            We'll help you to grow your career and growth, please contact team Walls Real Estate and get this offer promo.
          </p>
          <button className="bg-blue-800 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition">
            REQUEST A QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
