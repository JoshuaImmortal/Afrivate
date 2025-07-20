import React from "react";

const Button = ({ children }) => {
  return (
    <button className="w-full bg-black text-white py-3 px-4 text-sm rounded-full">
      {children}
    </button>
  );
};

export default Button;
