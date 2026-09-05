import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import Container from '../components/common/Container';
import TopicCard from '../components/programs/TopicCard';
import ProgramCTA from '../components/programs/ProgramCTA';
import { programs } from '../data/programs';

const Explorers = () => {
  const program = programs.find(p => p.id === 'explorers');

  return (
    <main>
      <PageHeader 
        title={`${program.title}`}
        description={program.description}
        badge={`PHASE ${program.phase} • ${program.classes}`}
        badgeColor={program.theme}
        theme="purple"
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
                color="purple"
              />
            ))}
          </div>

          <div className="bg-purple-50 rounded-3xl p-8 md:p-12 border border-purple-100 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4 bg-purple-100 text-purple-700">
                CAPSTONE PROJECT
              </span>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{program.capstone.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                {program.capstone.description}
              </p>
              <div className="inline-flex items-center text-purple-700 font-semibold bg-white px-6 py-3 rounded-full shadow-sm">
                View Project Ideas
              </div>
            </div>
            <div className="md:w-1/2 bg-white rounded-2xl shadow-xl shadow-purple-200/50 p-6 w-full aspect-video flex items-center justify-center border border-purple-100">
               <div className="text-purple-300 font-medium">Interactive Storybook Preview</div>
            </div>
          </div>
        </Container>
      </section>

      <ProgramCTA title={program.title} theme="purple" />
    </main>
  );
};

export default Explorers;
