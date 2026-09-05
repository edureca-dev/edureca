import React from 'react';

const SectionHeading = ({ 
  title, 
  subtitle, 
  badge, 
  badgeColor, 
  align = 'center',
  className = '' 
}) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignClasses[align]} ${className}`}>
      {badge && (
        <div className="mb-4">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-${badgeColor}-100 text-${badgeColor}-700`}>
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
