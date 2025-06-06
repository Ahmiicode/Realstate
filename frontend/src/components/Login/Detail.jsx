import React from 'react';

const Detail = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pb-22 pt-22 bg-gray-50 px-4">
      <div className="bg-white  border border-gray-200 p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6  text-black">Sign In</h2>

        {/* Login with Facebook */}
        <button className="w-full bg-blue-700 text-white font-bold py-5  mb-4 hover:bg-blue-700 transition">
          Login with Facebook
        </button>
          <div className="mt-1">
          <button className="w-full bg-blue-800 text-white py-5   transition">
            Login with Google
          </button>
        </div>

        <div className="border-b border-gray-300 mb-6"></div>

        {/* Sign In Form */}
        <form className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded px-4 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded px-4 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Options Row */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex text-lg items-center">
              <input type="checkbox" className="w-4 h-4 mr-2  accent-blue-600" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 text-lg hover:underline">Forgot password?</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-5 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Login with Google */}
      

        {/* Sign Up Prompt */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Detail;
