import React from 'react';
import IconBox from '../common/IconBox';

const TopicCard = ({ title, description, icon, color = 'indigo' }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="mb-4">
        <IconBox icon={icon} color={color} size="md" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm flex-grow">
        {description}
      </p>
    </div>
  );
};

export default TopicCard;
