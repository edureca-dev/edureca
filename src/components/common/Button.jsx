import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  type = 'button'
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 hover:-translate-y-0.5 active:translate-y-0";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg focus:ring-indigo-500",
    secondary: "bg-white text-indigo-600 border border-indigo-200 hover:border-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500",
    outline: "bg-transparent text-slate-700 border border-slate-300 hover:border-slate-800 hover:text-slate-900 focus:ring-slate-500",
    gradient: "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:from-indigo-700 hover:to-violet-700 focus:ring-indigo-500"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
