import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userType: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Step 1 validation (username + email)
  const validateStep1 = () => {
    const newErrors = {};
    // Username checks
    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username =
        "Username can only contain letters, numbers, and underscores";
    }

    // Email checks
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    } else if (formData.email.length > 50) {
      newErrors.email = "Email must be less than 50 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 2 validation (passwords + role)
  const validateStep2 = () => {
    const newErrors = {};
    // Role check
    if (!formData.userType) newErrors.userType = "Please select a role";

    // Password checks
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one lowercase letter";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one special character";
    }

    // Confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step navigation
  const handleProceed = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep2()) {
      console.log("✅ Sign up success:", formData);
      navigate('/kyc');
    }
  };

  // ===================== UI =====================
  if (step === 1) {
    return (
      <div className="min-h-screen flex flex-col justify-center px-6 py-10 sm:px-8 lg:px-10">
        <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-center text-[#012B52] mb-8">
            SIGN UP
          </h1>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="username"
                placeholder="USERNAME"
                value={formData.username}
                onChange={handleChange}
                className="w-full py-3 px-4 rounded-lg bg-gray-100 placeholder-gray-400 text-sm outline-none"
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="USER EMAIL"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-3 px-4 rounded-lg bg-gray-100 placeholder-gray-400 text-sm outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Proceed Button */}
          <button
            onClick={handleProceed}
            className="w-full mt-6 py-3 rounded-full text-white font-bold text-sm bg-gradient-to-r from-blue-900 to-blue-400"
          >
            Proceed
          </button>

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
      </div>
    );
  }

  // STEP 2
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-10 sm:px-8 lg:px-10">
      <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center text-[#002060] mb-6">
          SIGN UP
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Selection */}
          <div className="space-y-4">
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({ ...prev, userType: "freelancer" }))
              }
              className={`w-[80%] ml-[10%] border-2 py-4 rounded-lg flex flex-col items-center font-semibold ${
                formData.userType === "freelancer"
                  ? "bg-purple-100 border-purple-600 text-purple-700"
                  : "border-[#002060] text-[#002060]"
              }`}
            >
              <i className="fas fa-user-circle text-3xl mb-1"></i>
              AS FREELANCER
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({ ...prev, userType: "employer" }))
              }
              className={`w-[80%] ml-[10%] border-2 py-4 rounded-lg flex flex-col items-center font-semibold ${
                formData.userType === "employer"
                  ? "bg-purple-100 border-purple-600 text-purple-700"
                  : "border-[#002060] text-[#002060]"
              }`}
            >
              <i className="fas fa-user text-2xl mb-1"></i>
              AS EMPLOYER
            </button>
            {errors.userType && (
              <p className="text-red-500 text-xs mt-1 text-center">
                {errors.userType}
              </p>
            )}
          </div>

          {/* Password Fields */}
          <div className="space-y-4">
            <div>
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-gray-200 text-sm px-4 py-3 rounded-lg placeholder-gray-500 outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="REPEAT PASSWORD"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-gray-200 text-sm px-4 py-3 rounded-lg placeholder-gray-500 outline-none"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-xs mb-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="accent-[#002060] w-4 h-4"
              />
              <span className="text-[#002060]">Remember me</span>
            </label>
            <a href="#" className="text-[#002060] font-semibold">
              Forget Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#002060] to-[#4A90E2] text-white font-bold py-3 rounded-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
