import React from 'react';
import image1 from '../../assets/partner-logo1.png';
import image2 from '../../assets/partner-logo7.png';
import image3 from '../../assets/partner-logo6.png';
import image4 from '../../assets/partner-logo5.png';
import image5 from '../../assets/partner-logo8.png';

const Partner = () => {
  return (
    <div className="bg-gray-100 pb-30 py-12">
      <div className="text-center mb-10">
          <div className='flex justify-center'>
                     <span className='w-60 mt-14 mr-4 border-t-1 text-gray-400 border-current' />
      <h1 className="text-4xl text-blue-950 font-bold mb-2 mt-9">Our Partner</h1>
       <span className='w-60 mt-14 ml-4 border-t-1 text-gray-400 border-current' />
        </div>
        <p className="text-xl text-gray-500">
          Brand partners, successful projects, and trusted by many clients in real estate
        </p>
      </div>

      <div className="flex justify-center items-center gap-35 flex-wrap px-6">
        <img src={image1} alt="Partner 1" className="h-18 object-contain" />
        <img src={image2} alt="Partner 2" className="h-18 object-contain" />
        <img src={image3} alt="Partner 3" className="h-18 object-contain" />
        <img src={image4} alt="Partner 4" className="h-18 object-contain" />
        <img src={image5} alt="Partner 5" className="h-18 object-contain" />
      </div>
    </div>
  );
};

export default Partner;
