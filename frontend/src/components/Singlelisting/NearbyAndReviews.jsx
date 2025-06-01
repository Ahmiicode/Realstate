import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const NearbyAndReviews = () => {
  const [rating, setRating] = useState(3);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', formData, 'Rating:', rating);
  };

  const nearby = {
    education: [
      { name: "Eladia's Kids", distance: '2.5 km' },
      { name: 'Brooklyn Brainery', distance: '3.5 km' },
      { name: 'Wikdom Senior High School', distance: '2.5 km' },
    ],
    health: [
      { name: "Eladia's Kids", distance: '2.5 km' },
      { name: 'Brooklyn Brainery', distance: '3.5 km' },
      { name: 'Wikdom Senior High School', distance: '2.5 km' },
    ],
  };

  const reviews = [
    {
      name: 'Jhon Doe',
      date: 'May 13, 2020',
      rating: 3,
      comment:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
    },
    {
      name: 'Christine',
      date: 'May 13, 2020',
      rating: 5,
      comment:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      name: 'Jhon Doe',
      date: 'May 13, 2020',
      rating: 5,
      comment:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
    },
  ];

  return (
    <div className="mt-10 bg-white border border-gray-200 p-6 rounded-xl space-y-10 text-base text-gray-800">
      {/* Nearby Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">What's Nearby</h2>
        <div className="grid  gap-8">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <ul className="space-y-1 text-sm">
              {nearby.education.map((item, i) => (
                <li key={i} className="flex justify-between border-b py-1">
                  <span className='text-xl'>{item.name}</span>
                  <span className="text-gray-500 ">{item.distance}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Health & Medical */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Health & Medical</h3>
            <ul className="space-y-1 text-sm">
              {nearby.health.map((item, i) => (
                <li key={i} className="flex justify-between border-b py-1">
                  <span className='text-xl'>{item.name}</span>
                  <span className="text-gray-500">{item.distance}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Rate Us and Write a Review</h2>
        <div className="space-y-6">
          {reviews.map((review, i) => (
            <div key={i} className=" p-4 rounded-lg bg-gray-50">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-lg font-medium">{review.name}</h4>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < review.rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Submit Review Form */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">Your Rating for This Listing:</h3>
        <div className="flex items-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`cursor-pointer text-xl ${
                star <= rating ? 'text-yellow-500' : 'text-gray-300'
              }`}
              onClick={() => setRating(star)}
            />
          ))}
          <span className="text-base text-gray-700">{rating}/5</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-6 text-sm"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="What's your Email?"
            className="w-full border border-gray-300 rounded-lg px-4 py-6 text-sm"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-lg px-4 py-6 text-sm"
          />
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="w-full border border-gray-300 rounded-lg px-4 py-6 text-sm resize-none"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white font-medium text-sm py-2 px-6 rounded-lg hover:bg-blue-800 transition"
          >
            Submit Review
          </button>
        </form>
      </section>
    </div>
  );
};

export default NearbyAndReviews;
