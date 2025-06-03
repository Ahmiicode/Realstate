import React from 'react';
import { useParams } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import agents from '../../data/agency';

const Cardbox = () => {
  const { id } = useParams(); // Get ID from URL
  const agent = agents.find((agent) => agent.id === parseInt(id)); // Convert id from string to number

  if (!agent) {
    return <p className="text-center text-red-600">Agent not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row bg-white shadow-md overflow-hidden  hover:shadow-lg">
        {/* Left: Image */}
     {/* Left: Image */}
<div className="md:w-1/2 w-full h-72 md:h-[350px] flex items-center justify-center">
  <img
    src={agent.image}
    alt={agent.name}
    className="object-contain max-h-full"
  />
</div>

        {/* Right: Info */}
        <div className="p-8 flex flex-col justify-between md:w-1/2">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800">{agent.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{agent.title}</p>

            <ul className="text-lg text-gray-700 space-y-3">
              <li><strong>Office:</strong> {agent.office}</li>
              <li><strong>Mobile:</strong> {agent.mobile}</li>
              <li><strong>Fax:</strong> {agent.fax}</li>
              <li><strong>Email:</strong> {agent.email}</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex space-x-4 text-white">
            <a href="#" className="bg-blue-700 p-3 rounded"><FaFacebookF /></a>
            <a href="#" className="bg-blue-700 p-3 rounded"><FaTwitter /></a>
            <a href="#" className="bg-blue-700 p-3 rounded"><FaLinkedinIn /></a>
            <a href="#" className="bg-blue-700 p-3 rounded"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardbox;