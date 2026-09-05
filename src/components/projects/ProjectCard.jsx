import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, CloudRain, ShieldAlert, Cpu } from 'lucide-react';
import Badge from '../common/Badge';

const ProjectCard = ({ project }) => {
  const getIconForProject = (id) => {
    switch(id) {
      case 'weather-prediction': return <CloudRain size={48} className="text-blue-500 opacity-20" />;
      case 'healthcare-assistant': return <Activity size={48} className="text-red-500 opacity-20" />;
      case 'attendance-system': return <ShieldAlert size={48} className="text-emerald-500 opacity-20" />;
      default: return <Cpu size={48} className="text-indigo-500 opacity-20" />;
    }
  };

  const getDifficultyColor = (diff) => {
    switch(diff) {
      case 'Easy': return 'emerald';
      case 'Medium': return 'amber';
      case 'Hard': return 'orange';
      default: return 'slate';
    }
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Visual Placeholder */}
      <div className="h-48 bg-slate-50 border-b border-slate-100 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 opacity-50 group-hover:scale-105 transition-transform duration-500" />
        {getIconForProject(project.id)}
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge color={getDifficultyColor(project.difficulty)}>{project.difficulty}</Badge>
        </div>
      </div>
      
      <div className="p-6 sm:p-8 flex-grow flex flex-col">
        <div className="text-xs font-semibold tracking-wider text-indigo-600 uppercase mb-2">
          {project.category} • {project.level}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
          {project.overview}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
          
          <Link 
            to={`/projects/${project.id}`}
            className="inline-flex items-center font-medium text-slate-900 hover:text-indigo-600 transition-colors group/link"
          >
            View Project Details
            <ArrowRight size={18} className="ml-2 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
