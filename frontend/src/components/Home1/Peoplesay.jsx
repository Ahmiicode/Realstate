import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    comment: 'Buying my dream home was a breeze with this team!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    detail : "Owner digital Agency",
  },
  {
    id: 2,
    name: 'David Lee',
    comment: 'Sold my property in 10 days. Highly professional!',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
     detail : "Owner digital Agency",
  },
  {
    id: 3,
    name: 'Amanda Smith',
    comment: 'Found the best investment deals through this platform.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
     detail : "Owner digital Agency",
  },
  {
    id: 4,
    name: 'James Brown',
    comment: 'Efficient and reliable, would use again!',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    detail : "Owner digital Agency",
  },
];

const Peoplesay = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What People Say</h2>
        <p className="text-gray-600 text-lg">Real experiences from our happy clients.</p>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{ delay: 3500 }}
        modules={[Autoplay]}
        loop={true}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map(({ id, name, comment, image,detail }) => (
          <SwiperSlide key={id}>
            <div className=' h-[200px]'>
    <div className="relative h-[140px] bg-white  shadow-lg p-6 pb-12">
              {/* Author image - bottom left outside */}
              <img
                src={image}
                alt={name}
                className="w-23 h-23 rounded-full absolute -bottom-8 border-4 border-white shadow-md"
              />

              {/* Author name badge - bottom right outside */}
              <div className="absolute -bottom-5 text-blue-800 font-bold right-1 bg-white  px-3 py-1 text-lg rounded-lg shadow-lg">
                {name}
                <div className='text-gray-300 text-xl '>
                    {detail }
                </div>
                
               
                
              </div>
              

              {/* Comment text */}
              <p className="text-gray-700 text-xl italic">{`"${comment}"`}</p>
            </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Peoplesay;
