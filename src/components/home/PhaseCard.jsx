import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Code, Network } from 'lucide-react';
import AnimatedCard from '../common/AnimatedCard';

const PhaseCard = ({ phase, title, classes, description, theme, link }) => {
  const themeStyles = {
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
      gradient: "from-purple-600 to-indigo-600",
      icon: <Brain className="text-purple-600" size={32} />
    },
    teal: {
      bg: "bg-teal-50",
      text: "text-teal-600",
      border: "border-teal-200",
      gradient: "from-teal-600 to-emerald-600",
      icon: <Code className="text-teal-600" size={32} />
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200",
      gradient: "from-orange-600 to-amber-600",
      icon: <Network className="text-orange-600" size={32} />
    }
  };

  const style = themeStyles[theme] || themeStyles.purple;

  return (
    <AnimatedCard className={`border-t-4 border-t-${theme}-500 relative overflow-hidden group h-full flex flex-col`}>
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${style.gradient} opacity-5 rounded-bl-full transition-transform duration-500 group-hover:scale-110`} />
      
      <div className="flex items-start justify-between mb-6 relative">
        <div>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3 ${style.bg} ${style.text}`}>
            PHASE {phase}
          </span>
          <h3 className="text-2xl font-bold text-slate-900 mb-1">{title}</h3>
          <p className="text-slate-500 font-medium">{classes}</p>
        </div>
        <div className={`p-3 rounded-2xl ${style.bg} shrink-0`}>
          {style.icon}
        </div>
      </div>
      
      <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
        {description}
      </p>
      
      <Link 
        to={link}
        className={`inline-flex items-center font-semibold transition-colors mt-auto ${style.text} hover:text-slate-900 group/link`}
      >
        Explore Program 
        <ArrowRight size={18} className="ml-2 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </AnimatedCard>
  );
};

export default PhaseCard;
