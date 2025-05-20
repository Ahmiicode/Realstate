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
    <div className="bg-gray-100 py-16 px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
        <p className="text-gray-600 md:text-lg">Real experiences from our happy clients.</p>
      </div>
<Swiper
  slidesPerView={1}  // default: mobile and below 1024px
  spaceBetween={30}
  autoplay={{ delay: 3500 }}
  modules={[Autoplay]}
  loop={true}
  className="max-w-6xl mx-auto"
breakpoints={{
  640: {
    slidesPerView: 1,  // sm and md explicitly 1
  },
  1024: {
    slidesPerView: 2,  // lg and up 2 slides
  },
}}

>

        {testimonials.map(({ id, name, comment, image, detail }) => (
          <SwiperSlide key={id}>
            <div className='mb-12'>  {/* Add margin for absolute positioned elements */}
              <div className="relative bg-white shadow-lg p-6 pb-16 md:pb-12">
                {/* Comment text */}
                <p className="text-gray-700 text-base md:text-lg italic">{`"${comment}"`}</p>

                {/* Author image */}
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 rounded-full absolute -bottom-8 left-4 border-4 border-white shadow-md"
                />

                {/* Author name badge */}
                <div className="absolute -bottom-5 right-4 md:right-6 bg-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-blue-800 font-bold text-base md:text-lg">
                    {name}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {detail}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Peoplesay;