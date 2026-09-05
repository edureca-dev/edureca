import React from 'react';

const AnimatedCard = ({ children, className = '', hover = true }) => {
  const hoverClasses = hover 
    ? "transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50" 
    : "";

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedCard;
