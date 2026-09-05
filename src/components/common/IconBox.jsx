import React from 'react';
import * as LucideIcons from 'lucide-react';

const IconBox = ({ icon, color = 'indigo', size = 'md', className = '' }) => {
  const IconComponent = LucideIcons[icon] || LucideIcons.HelpCircle;

  const colorClasses = {
    indigo: "bg-indigo-100 text-indigo-600",
    purple: "bg-purple-100 text-purple-600",
    teal: "bg-teal-100 text-teal-600",
    emerald: "bg-emerald-100 text-emerald-600",
    orange: "bg-orange-100 text-orange-600",
    amber: "bg-amber-100 text-amber-600",
    blue: "bg-blue-100 text-blue-600",
    slate: "bg-slate-100 text-slate-600"
  };

  const sizeClasses = {
    sm: "p-2 w-10 h-10",
    md: "p-3 w-12 h-12",
    lg: "p-4 w-16 h-16",
    xl: "p-5 w-20 h-20"
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 32,
    xl: 40
  };

  return (
    <div className={`inline-flex items-center justify-center rounded-2xl ${colorClasses[color]} ${sizeClasses[size]} ${className}`}>
      <IconComponent size={iconSizes[size]} strokeWidth={2} />
    </div>
  );
};

export default IconBox;
