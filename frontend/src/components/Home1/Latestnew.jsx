import React from 'react';
import image1 from '../../assets/event4.jpg';
import image2 from '../../assets/event10.png';

import image3 from '../../assets/event17.jpg';
import authorImage from '../../assets/profile-blog.jpg';

const newsData = [
  {
    id: 1,
    title: 'Best Interior Oppertunity',
    image: image1,
    description: 'Real estate festival is one of the famous feval for explain to you how all this mistaolt deand praising pain wasnad I will give complete.',
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'Tips for First-Time Buyers',
    image: image2,
    description: 'Real estate festival is one of the famous feval for explain to you how all this mistaolt deand praising pain wasnad I will give completee.',
    author: 'Sarah Lane',
  },
  {
    id: 3,
    title: 'Luxury Homes on the Rise',
    image: image3,
    description: 'Real estate festival is one of the famous feval for explain to you how all this mistaolt deand praising pain wasnad I will give complete.',
    author: 'Mike Wilson',
  },
];

const Latestnew = () => {
  return (
    <div className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-8xl mx-auto">
           <div className='flex mb-7 justify-center'>
                     <span className='w-60 mt-14 mr-4 border-t-1 text-gray-400 border-current' />
      <h1 className="text-4xl  font-bold mb-2 mt-9">Latest news</h1>
       <span className='w-60 mt-14 ml-4 border-t-1 text-gray-400 border-current' />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <div key={item.id} className="bg-white shadow-lg  overflow-hidden">
              {/* Top image */}
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>

                <hr className="border-gray-200 mb-4" />

                {/* Bottom row: author + button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={authorImage}
                      alt="Author"
                      className="w-20 h-20 rounded-full border-2 border-white -ml-2"
                    />
                    <span className="ml-3 text-sm text-gray-800">{item.author}</span>
                  </div>

                  <button className="text-blue-600 font-medium hover:underline text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latestnew;
