import React from 'react';

const Badge = ({ children, color = 'indigo', className = '' }) => {
  const colorClasses = {
    indigo: "bg-indigo-100 text-indigo-800 border-indigo-200",
    purple: "bg-purple-100 text-purple-800 border-purple-200",
    teal: "bg-teal-100 text-teal-800 border-teal-200",
    emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
    orange: "bg-orange-100 text-orange-800 border-orange-200",
    amber: "bg-amber-100 text-amber-800 border-amber-200",
    slate: "bg-slate-100 text-slate-800 border-slate-200",
    white: "bg-white text-slate-800 border-slate-100 shadow-sm"
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${colorClasses[color]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
