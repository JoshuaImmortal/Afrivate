import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary',
  fullWidth = true,
  className = ''
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition duration-300';
  const variantStyles = {
    primary: 'bg-gradient-to-r from-purple-700 to-purple-400 text-white hover:opacity-90',
    secondary: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50',
    link: 'text-purple-600 hover:text-purple-700 bg-transparent'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 