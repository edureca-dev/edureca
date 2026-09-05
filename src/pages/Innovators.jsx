import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import Container from '../components/common/Container';
import TopicCard from '../components/programs/TopicCard';
import ProgramCTA from '../components/programs/ProgramCTA';
import { programs } from '../data/programs';

const Innovators = () => {
  const program = programs.find(p => p.id === 'innovators');

  return (
    <main>
      <PageHeader 
        title={`${program.title}`}
        description={program.description}
        badge={`PHASE ${program.phase} • ${program.classes}`}
        badgeColor={program.theme}
        theme="teal"
      />
      
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What You'll Learn</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {program.tagline}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {program.topics.map((topic, idx) => (
              <TopicCard 
                key={idx}
                title={topic.title}
                description={topic.description}
                icon={topic.icon}
                color="teal"
              />
            ))}
          </div>

          <div className="bg-teal-50 rounded-3xl p-8 md:p-12 border border-teal-100 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4 bg-teal-100 text-teal-700">
                CAPSTONE PROJECT
              </span>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{program.capstone.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                {program.capstone.description}
              </p>
              <div className="inline-flex items-center text-teal-700 font-semibold bg-white px-6 py-3 rounded-full shadow-sm">
                View Chatbot Demo
              </div>
            </div>
            <div className="md:w-1/2 bg-white rounded-2xl shadow-xl shadow-teal-200/50 p-6 w-full aspect-video flex flex-col border border-teal-100">
               {/* Chatbot mock */}
               <div className="flex-1 bg-slate-50 rounded-xl mb-4 p-4 flex flex-col gap-3">
                 <div className="bg-teal-100 text-teal-800 p-3 rounded-2xl rounded-tl-none self-start max-w-[80%] text-sm">
                   Hi! I'm your Study Buddy. What subject do you want to review today?
                 </div>
                 <div className="bg-slate-200 text-slate-800 p-3 rounded-2xl rounded-tr-none self-end max-w-[80%] text-sm">
                   Can we review Biology? Specifically cell structures.
                 </div>
               </div>
               <div className="h-10 bg-slate-100 rounded-full flex items-center px-4">
                  <div className="w-full h-2 bg-slate-200 rounded-full"></div>
               </div>
            </div>
          </div>
        </Container>
      </section>

      <ProgramCTA title={program.title} theme="teal" />
    </main>
  );
};

export default Innovators;
