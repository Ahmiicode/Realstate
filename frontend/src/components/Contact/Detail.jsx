import React from 'react';

const Detail = () => {
  return (
    <div className="bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form - Improved responsiveness */}
        <div className="bg-white p-6 sm:p-8 shadow rounded">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <input
                  type="url"
                  name="website"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 px-4 rounded-md hover:bg-blue-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Business Info - Improved spacing and responsiveness */}
        <div className="space-y-6 md:space-y-8">
          {/* Open Hours */}
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-semibold mb-4">Open Hours</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span> 
                <span>09 AM - 19 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span> 
                <span>09 AM - 14 PM</span>
              </li>
              <li className="flex justify-between text-gray-500">
                <span>Sunday:</span> 
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Info Location */}
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-semibold mb-4">Info Location</h3>
            <div className="text-gray-700 space-y-2">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                <span>
                  PO Box 16122 Collins Street West<br />
                  Victoria 8007 Australia
                </span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <span>(+12) 34567 890 123</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>mail@example.com</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">🌐</span>
                <span>www.yourdomain.com</span>
              </p>
            </div>
          </div>

          {/* Find Us */}
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-semibold mb-4">Find Us</h3>
            <div className="w-full aspect-video bg-gray-200 rounded flex items-center justify-center text-gray-500">
              <span className="text-center p-4">
                Map Placeholder<br />
                <span className="text-sm">(Interactive map would appear here)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;