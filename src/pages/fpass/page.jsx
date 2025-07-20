import React from "react";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-start px-6 pt-10 bg-white">
      {/* Back Arrow & Title */}
      <div className="flex items-center mb-6">
        <button className="text-blue-900 text-xl mr-2">
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1 className="w-full text-blue-900 text-center text-2xl font-bold ">Forgot Password</h1>
      </div>

      {/* Instructions */}
      <p className="text-sm text-gray-700 mb-6">
        Please enter your email address. You will receive a link to create a
        new password via email.
      </p>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Somadina001@gmail.com"
        className="w-full bg-gray-100 rounded-xl px-4 py-5 mb-6 mt-10 text-sm placeholder-gray-400 outline-none"
      />

      {/* Send Code Button */}
      <button className="w-full bg-gradient-to-r from-blue-900 to-blue-500 text-white py-3 rounded-full text-sm font-semibold mb-10 mt-10">
        Send Code
      </button>

      {/* Back to Login */}
      <p className="text-center text-sm text-gray-700 ">
        Go Back To{" "}
        <a href="#" className=" text-blue-900 font-bold">
          Log in
        </a>
      </p>
    </div>
  );
};

export default ForgotPassword;
