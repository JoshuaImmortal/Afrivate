import React from 'react';

const TextInput = ({ label, name, value, onChange, type = 'text', required = false, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor={name}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  </div>
);

export default TextInput; 