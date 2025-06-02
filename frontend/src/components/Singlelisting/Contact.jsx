import React from 'react';
import properties from '../../data/properties';
import agents from '../../data/agents';

const Contact = ({ authorImage, authorName, phone = '(123) 456-7890', company = 'Company Name' }) => {
  return (
    <div className="mt-6 bg-white p-6 rounded-lg border border-gray-300 shadow-sm">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Info</h2>
      <div className="flex items-center mb-4">
        <img
          src={authorImage}
          alt={authorName}
          className="w-14 h-14 rounded-full mr-4 object-cover"
        />
        <div>
          <p className="text-gray-800 font-medium">{authorName}</p>
          <p className="text-gray-600">{phone}</p>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>
      <button className="mb-6 bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
        View My Listing
      </button>

      {/* Contact Form */}
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            className="w-full border  border-gray-300 rounded px-3 py-5"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded px-3 py-5"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-5"
            placeholder="Email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
            rows={4}
            placeholder="Write your message about this property"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-5 rounded hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
