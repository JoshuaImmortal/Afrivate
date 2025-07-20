import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen w-full bg-white px-6 pt-10 font-sans text-center">
      {/* Title */}
      <h1 className="text-2xl font-bold text-[#012B52] mb-10">SIGN UP</h1>

      {/* Input Fields */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="USERNAME"
          className="w-full py-3 px-4 rounded-lg bg-gray-100 placeholder-gray-400 text-sm"
        />
        <input
          type="email"
          placeholder="USER EMAIL"
          className="w-full py-3 px-4 rounded-lg bg-gray-100 placeholder-gray-400 text-sm"
        />
      </div>

      {/* Proceed Button */}
      <Link to="/signup2">
      <button className="w-full mt-6 py-3 rounded-full text-white font-bold text-sm bg-gradient-to-r from-blue-900 to-blue-400">
        Proceed
      </button>
      </Link>

      {/* OR Divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="mx-4 text-gray-500 text-sm">Or</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Social Buttons */}
      <div className="flex justify-center gap-6">
  <button className="border rounded-md p-1 w-[20%]">
    <i className="fab fa-google text-lg text-[#EA4335]"></i>
  </button>
  <button className="bg-[#1877F2] rounded-md p-1 w-[20%]">
    <i className="fab fa-facebook-f text-white text-lg"></i>
  </button>
  <button className="bg-[#1DA1F2] rounded-md p-1 w-[20%]">
    <i className="fab fa-twitter text-white text-lg"></i>
  </button>
</div>


      {/* Login Text */}
      <Link to="/login">
 <p className="mt-10 text-sm text-black text-center">
        Already have an account? <span className="text-[#012B52] font-semibold"> Log in </span>
      </p>
      </Link>
    </div>
  );
};

export default SignUp;
