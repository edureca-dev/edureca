import React from 'react';
import Container from '../common/Container';
import Badge from '../common/Badge';

const PageHeader = ({ 
  title, 
  description, 
  badge, 
  badgeColor = "indigo",
  theme = "indigo",
  pattern = true
}) => {
  
  const themeClasses = {
    indigo: "from-indigo-900 via-indigo-800 to-violet-900 text-indigo-100",
    purple: "from-purple-900 via-purple-800 to-fuchsia-900 text-purple-100",
    teal: "from-teal-900 via-teal-800 to-emerald-900 text-teal-100",
    orange: "from-orange-900 via-orange-800 to-amber-900 text-orange-100",
    slate: "from-slate-900 via-slate-800 to-slate-900 text-slate-100",
  };

  return (
    <div className={`relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br ${themeClasses[theme]}`}>
      {/* Decorative patterns */}
      {pattern && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
          
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40V0H40" fill="none" stroke="currentColor" strokeOpacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      )}

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {badge && (
            <div className="mb-6">
              <Badge color={badgeColor} className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                {badge}
              </Badge>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/80 leading-relaxed text-balance">
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
