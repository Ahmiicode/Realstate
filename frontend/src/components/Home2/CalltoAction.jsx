import React from 'react';

const CallToAction = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">
            Looking To Sell Or Rent Your Property?
          </h2>
          <p className="text-lg lg:text-xl">
            We will assist you in the best and most comfortable property services for you.
          </p>
        </div>

        {/* Right Side: Button */}
        <div className="flex-shrink-0">
          <button className="bg-white text-black text-xl font-semibold px-6 py-3  shadow-md ">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
