import React from "react";
import { Link } from "react-router-dom";
import { topImage,
    man2
  } from "../../costants/images";

const MobileLogin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Top image container */}
      <div className="w-full h-60   flex flex-col justify-end items-center px-4 pb-6">
      <img
          src={man2}
          alt="Hero"
          className="absolute w-full top-[0%]"
        />
        <h1 className=" relative text-white font-bold text-3xl">LOG IN</h1>
        <p className=" relative text-white text-sm mt-2">Please login into your account</p>
      </div>

      {/* Login form */}
      <div className="relative w-full mt-[-40px] bg-white rounded-3xl  px-5 py-6">
        <input
          type="email"
          placeholder="Somadina001@gmail.com"
          className="w-full bg-gray-100 rounded-xl px-4 py-5 mb-4 text-sm placeholder-gray-400 outline-none"
        />
        <input
          type="password"
          placeholder="PASSWORD"
          className="w-full bg-gray-100 rounded-xl px-4 py-5 mb-4 text-sm placeholder-gray-400 outline-none"
        />

        {/* Remember & Forgot */}
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center text-xs">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link to="/fpass">
          <a href="#" className="text-xs text-blue-700 font-semibold">
            Forgot Password?
          </a>
          </Link>
        </div>

        {/* Login Button */}
        <button className="w-full bg-gradient-to-r from-blue-900 to-blue-500 text-white py-3 rounded-full text-sm font-semibold">
          Log in
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t" />
          <span className="mx-2 text-xs text-gray-400">Or</span>
          <hr className="flex-grow border-t" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-4">
          <button className="border rounded-full p-2 w-10 h-10 flex items-center justify-center">
            <i className="fab fa-google text-[#EA4335] text-lg"></i>
          </button>
          <button className="bg-[#1877F2] rounded-full p-2 w-10 h-10 flex items-center justify-center">
            <i className="fab fa-facebook-f text-white text-lg"></i>
          </button>
          <button className="bg-[#1DA1F2] rounded-full p-2 w-10 h-10 flex items-center justify-center">
            <i className="fab fa-twitter text-white text-lg"></i>
          </button>
        </div>

        {/* Sign Up Link */}
        <Link to="/signup">
        <p className="text-center text-xs">
          Don’t have an account?{" "}
          <a href="#" className="font-bold text-blue-800">
            Sign Up
          </a>
        </p>
        </Link>
      </div>
    </div>
  );
};

export default MobileLogin;
