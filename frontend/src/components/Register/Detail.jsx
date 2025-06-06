import React from 'react';

const Detail = () => {
  return (
    <div className="min-h-screen flex items-center pt-22 pb-22 justify-center bg-gray-100 px-4">
      <div className="bg-white border border-gray-300 p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6  text-black">Sign In</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* First Name */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">First Name</label>
            <input
              type="text"
              placeholder="John"
              className="border border-gray-300 rounded px-4 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className="border border-gray-300 rounded px-4 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="border border-gray-300 rounded px-4 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">We'll never share your email with anyone else.</p>
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Gender</label>
            <div className="flex text-xl items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="gender" className="mr-2" />
                Male
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" className="mr-2" />
                Female
              </label>
            </div>
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">City</label>
            <input
              type="text"
              placeholder="New York"
              className="border border-gray-300 rounded px-4 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Country</label>
            <select
              className="border border-gray-300 rounded px-4 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>UK</option>
              <option>Australia</option>
              <option>Other</option>
            </select>
          </div>

          {/* Create Password */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Create Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="border border-gray-300 rounded px-4 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Repeat Password */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Repeat Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="border border-gray-300 rounded px-4 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-700 text-xl text-white py-5 rounded hover:bg-blue-700 transition"
            >
              Register
            </button>
          </div>
           {/* Terms */}
          <div className="md:col-span-2  flex items-start space-x-2">
            <input type="checkbox" className="w-5 h-5 mt-1 text-xl text-blue-800 accent-blue-800" />
            <p className=" text-xl text-gray-700">
              I agree with the <a href="#" className="text-blue-600 underline">terms and conditions</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Detail;
