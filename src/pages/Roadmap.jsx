import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import Container from '../components/common/Container';
import ProgramCTA from '../components/programs/ProgramCTA';
import { ArrowDown, Star, Code, Terminal, Rocket, Briefcase } from 'lucide-react';

const Roadmap = () => {
  const steps = [
    {
      phase: "01",
      title: "Curiosity & Creation",
      classes: "Class 6-7",
      program: "AI Explorers",
      color: "purple",
      icon: <Star size={24} />,
      details: ["Understand AI", "Generate Images & Stories", "Block Coding Basics", "Digital Safety"]
    },
    {
      phase: "02",
      title: "Logic & Text Coding",
      classes: "Class 8-9",
      program: "AI Innovators",
      color: "teal",
      icon: <Code size={24} />,
      details: ["Python Fundamentals", "Computer Vision Basics", "Rule-based Chatbots", "Prompt Engineering"]
    },
    {
      phase: "03",
      title: "Machine Learning",
      classes: "Class 10-12",
      program: "AI Pioneers",
      color: "orange",
      icon: <Terminal size={24} />,
      details: ["Advanced Python & Math", "Predictive Modeling", "API Integrations", "Web App Deployment"]
    },
    {
      phase: "04",
      title: "Career & University",
      classes: "Post-School",
      program: "Future Ready",
      color: "indigo",
      icon: <Briefcase size={24} />,
      details: ["Strong Portfolio", "Hackathon Experience", "Technical Foundation", "Innovation Mindset"]
    }
  ];

  return (
    <main>
      <PageHeader 
        title="The Learning Roadmap"
        description="See exactly how students progress from curious beginners to career-ready developers over time."
        badge="Journey"
        theme="slate"
      />
      
      <section className="py-24 bg-white relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center md:items-stretch gap-8 mb-16 last:mb-0">
                {/* Connecting Line */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-16 bottom-0 w-1 -ml-0.5 bg-slate-100 -z-10 translate-y-16">
                     <div className="w-full bg-gradient-to-b from-indigo-500 to-transparent h-24 animate-pulse"></div>
                  </div>
                )}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute left-8 top-16 bottom-0 w-1 -ml-0.5 bg-slate-100 -z-10 h-full"></div>
                )}
                
                {/* Desktop Left / Mobile Top */}
                <div className={`md:w-5/12 flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:order-3 md:items-start md:text-left'} w-full pl-16 md:pl-0`}>
                  <div className={`text-${step.color}-600 font-bold mb-1 tracking-wider text-sm`}>PHASE {step.phase} • {step.classes}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <div className="text-slate-500 font-medium mb-4">{step.program}</div>
                  
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 w-full">
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className={`flex items-center gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <div className={`w-2 h-2 rounded-full bg-${step.color}-400 shrink-0`}></div>
                          <span className="text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Center Node */}
                <div className={`md:w-2/12 flex justify-center md:order-2 absolute left-0 md:relative md:top-0 top-0 mt-4 md:mt-0`}>
                  <div className={`w-16 h-16 rounded-full bg-${step.color}-100 border-4 border-white shadow-xl flex items-center justify-center text-${step.color}-600 z-10 shrink-0`}>
                    {step.icon}
                  </div>
                </div>
                
                {/* Desktop Right Spacer */}
                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Rocket size={48} className="text-indigo-200 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to launch?</h3>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">Start the journey today and equip your child with the most valuable skills for the future.</p>
          </div>
        </Container>
      </section>

      <ProgramCTA title="the AI Revolution" />
    </main>
  );
};

export default Roadmap;
