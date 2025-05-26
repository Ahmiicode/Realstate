import React, { useState, useEffect } from 'react';

// ... (keep your existing imports and properties array)
// Import your images
import Image1 from '../../assets/bg16.jpg';
import Image2 from '../../assets/bg20.jpg';
import Image3 from '../../assets/bg21.jpg';
import Image4 from '../../assets/bg22.jpg';
import Image5 from '../../assets/bg23.jpg';

// Property data array
const properties = [
  {
    id: 1,
    image: Image1,
    title: "Luxury Villa",
    subtitle: "Beachfront Property",
    description: "Stunning 5-bedroom villa with private beach access and panoramic ocean views.",

  },
  {
    id: 2,
    image: Image2,
    title: "Modern Penthouse",
    subtitle: "Downtown Living",
    description: "Sophisticated urban living with premium amenities and smart home technology.",
 
  },
  {
    id: 3,
    image: Image3,
    title: "Mountain Retreat",
    subtitle: "Alpine Architecture",
    description: "Secluded luxury cabin with breathtaking mountain views and modern comforts.",

  },
  {
    id: 4,
    image: Image4,
    title: "Historic Estate",
    subtitle: "Victorian Masterpiece",
    description: "Exquisitely restored 19th century mansion with original architectural details.",
   
  },
  {
    id: 5,
    image: Image5,
    title: "Urban Loft",
    subtitle: "Industrial Chic",
    description: "Converted warehouse space with open concept living and rooftop terrace.",
  
  }
];
const Herosection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    let interval;
    if (autoScroll) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % properties.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoScroll, properties.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setAutoScroll(false)}
      onMouseLeave={() => setAutoScroll(true)}
    >
      {/* Slider Track */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {properties.map((property) => (
          <div key={property.id} className="relative min-w-full h-full flex flex-col lg:grid lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-200 sm:h-64 md:h-200 lg:h-full group">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-white/20 backdrop-brightness-65"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:hidden bg-gradient-to-t from-black/60 to-transparent">
                <h1 className="text-xl sm:text-2xl font-bold text-white">{property.title}</h1>
                <h2 className="text-sm sm:text-lg text-gray-200">{property.subtitle}</h2>
              </div>
              <div className="absolute top-1/2 left-8 -translate-y-1/2 text-white hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-4xl xl:text-5xl font-bold mb-2">{property.title}</h1>
                <h2 className="text-2xl xl:text-3xl text-gray-200">{property.subtitle}</h2>
              </div>
            </div>

            {/* Content Section */}
            <div className="bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <div className="max-w-md mx-auto">
                <div className="mb-4 md:mb-6">
                  <span className="text-xs md:text-sm font-semibold text-gray-500">Featured Property</span>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 mb-1 md:mb-3">{property.title}</h1>
                  <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-2 md:mb-4">{property.subtitle}</h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
                    {property.description}
                  </p>
                </div>
                <button className="text-xs sm:text-sm md:text-base bg-blue-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Schedule Viewing
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/80 transition-colors text-xl"
        onClick={handlePrev}
      >
        ❮
      </button>
      <button 
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/80 transition-colors text-xl"
        onClick={handleNext}
      >
        ❯
      </button>
    </div>
  );
};

export default Herosection;