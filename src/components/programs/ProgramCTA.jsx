import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';

const ProgramCTA = ({ title, theme = "indigo" }) => {
  const themeClasses = {
    indigo: "bg-indigo-600",
    purple: "bg-purple-600",
    teal: "bg-teal-600",
    orange: "bg-orange-600",
  };

  return (
    <div className={`py-20 ${themeClasses[theme]} relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40" fill="none" stroke="currentColor" strokeOpacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>
      <Container className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance max-w-3xl mx-auto">
          Ready to start your journey in {title}?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Enroll today and give your child the skills they need to lead tomorrow's technology landscape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button to="/enroll" variant="secondary" size="lg">
            Enroll Now
          </Button>
          <Button to="/contact" className="bg-white/10 text-white hover:bg-white/20 border border-white/20" size="lg">
            Contact Admissions
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ProgramCTA;
