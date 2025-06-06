import React from 'react';
import logo from '../assets/logo-blue-stiky.png';
import footerBg from '../assets/footer2.jpg';

const Footer = () => {
  return (
    <footer
      className="relative text-white px-6 pt-10 md:px-20 bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Logo & Info */}
        <div>
          <a href="/" className="block mb-4">
            <img src={logo} alt="Logo" width={170} height={100} />
          </a>
          <p className="mb-2 text-gray-300">
            Rethouse Real Estate is a premium Property template based on Bootstrap 4. Rethouse Real Estate helped thousands of clients to find the right property for their needs.
          </p>
          <p className="text-sm text-gray-400">214 West Arnold St. New York, NY 10002</p>
          <p className="text-sm text-gray-400">(123) 345-6789</p>
          <p className="text-sm text-gray-400">(+100) 123 456 7890</p>
          <p className="text-sm text-gray-400">support@realvilla.demo</p>
          <p className="text-sm text-gray-400">Mon - Sun / 9:00AM - 8:00PM</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:underline hover:text-gray-100">Commercial</a></li>
            <li><a href="#" className="hover:underline hover:text-gray-100">Business</a></li>
            <li><a href="#" className="hover:underline hover:text-gray-100">House</a></li>
            <li><a href="#" className="hover:underline hover:text-gray-100">Residential</a></li>
            <li><a href="#" className="hover:underline hover:text-gray-100">Residential Tower</a></li>
          </ul>
        </div>

        {/* More Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">More Info</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:underline hover:text-gray-100">The Beach</a></li>
            <li><a href="#" className="hover:underline hover:text-gray-100">Property Listing</a></li>
            <li><a href="#" className="hover:underline hover:text-gray-100">Classic</a></li>
            <li><a href="#" className="hover:underline hover:text-gray-100">Modern Home</a></li>
            <li><a href="#" className="hover:underline hover:text-gray-100">Beach Pasadena</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <p className="mb-4 text-gray-300">Follow us and stay in touch to get the latest news</p>
          <div className="flex space-x-4 mb-4">
            <span className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">F</span>
            <span className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">T</span>
            <span className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">I</span>
          </div>

          <h2 className="text-lg font-semibold mb-2">Newsletter</h2>
          <p className="mb-4 text-gray-300">Don’t miss to subscribe to our news feeds, kindly fill the form below</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded w-full sm:w-auto"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/30 px-6 py-6 md:px-20 w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 relative z-10">
        <p>© 2020 Rethouse Real Estate - Premium theme by retenvi.com</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline hover:text-gray-200">Privacy</a>
          <a href="#" className="hover:underline hover:text-gray-200">Contact</a>
          <a href="#" className="hover:underline hover:text-gray-200">About</a>
          <a href="#" className="hover:underline hover:text-gray-200">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

