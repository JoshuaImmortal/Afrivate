import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-6 w-full max-w-md mx-auto">
      <h1 className="text-center text-2xl font-bold text-[#002060] mb-6">SIGN UP</h1>

      {/* Role Selection */}
      <div className="space-y-4 mb-6">
        <button className="w-[80%] ml-[10%]  border-[2px] border-[#002060] rounded-lg py-4 flex flex-col items-center text-[#002060] font-semibold">
          <i className="fas fa-user-circle text-3xl mb-1"></i>
          AS FREELANCER
        </button>
        <button className="w-[80%] ml-[10%]  border-[2px] border-[#002060] rounded-lg py-4 flex flex-col items-center text-[#002060] font-semibold">
          <i className="fas fa-user text-2xl mb-1"></i>
          AS EMPLOYER
        </button>
      </div>

      {/* Password Fields */}
      <div className="space-y-4 mb-4">
        <input
          type="password"
          placeholder="PASSWORD"
          className="w-full bg-gray-200 text-sm px-4 py-3 rounded-lg placeholder-gray-500 outline-none"
        />
        <input
          type="password"
          placeholder="REPEAT PASSWORD"
          className="w-full bg-gray-200 text-sm px-4 py-3 rounded-lg placeholder-gray-500 outline-none"
        />
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between text-xs mb-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-[#002060] w-4 h-4" />
          <span className="text-[#002060]">Remember me</span>
        </label>
        <a href="#" className="text-[#002060] font-semibold">
          Forget Password?
        </a>
      </div>

      {/* Submit Button */}
      <button className="w-full bg-gradient-to-r from-[#002060] to-[#4A90E2] text-white font-bold py-3 rounded-full mb-4">
        Sign Up
      </button>

      {/* OR Divider */}
      <div className="flex items-center justify-center mb-4">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-500 text-sm">Or</span>
        <hr className="flex-grow border-gray-300" />
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
