import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import Container from '../components/common/Container';
import TopicCard from '../components/programs/TopicCard';
import ProgramCTA from '../components/programs/ProgramCTA';
import { programs } from '../data/programs';
import { Activity, Thermometer, TrendingUp, BookOpen } from 'lucide-react';

const Pioneers = () => {
  const program = programs.find(p => p.id === 'pioneers');

  return (
    <main>
      <PageHeader 
        title={`${program.title}`}
        description={program.description}
        badge={`PHASE ${program.phase} • ${program.classes}`}
        badgeColor={program.theme}
        theme="orange"
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
                color="orange"
              />
            ))}
          </div>

          <div className="bg-orange-50 rounded-3xl p-8 md:p-12 border border-orange-100 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4 bg-orange-100 text-orange-700">
                CAPSTONE PROJECT
              </span>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{program.capstone.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                {program.capstone.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-slate-700 font-medium bg-white p-3 rounded-lg border border-orange-100 shadow-sm"><Activity size={18} className="text-orange-500" /> Healthcare</div>
                <div className="flex items-center gap-2 text-slate-700 font-medium bg-white p-3 rounded-lg border border-orange-100 shadow-sm"><Thermometer size={18} className="text-blue-500" /> Weather</div>
                <div className="flex items-center gap-2 text-slate-700 font-medium bg-white p-3 rounded-lg border border-orange-100 shadow-sm"><TrendingUp size={18} className="text-emerald-500" /> Finance</div>
                <div className="flex items-center gap-2 text-slate-700 font-medium bg-white p-3 rounded-lg border border-orange-100 shadow-sm"><BookOpen size={18} className="text-indigo-500" /> Education</div>
              </div>
              <div className="inline-flex items-center text-orange-700 font-semibold bg-white px-6 py-3 rounded-full shadow-sm">
                View Project Details
              </div>
            </div>
            <div className="md:w-1/2 bg-white rounded-2xl shadow-xl shadow-orange-200/50 p-6 w-full aspect-video flex flex-col border border-orange-100 overflow-hidden">
               {/* Dashboard Mock */}
               <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
                 <div className="font-bold text-slate-700 text-sm">Model Predictions</div>
                 <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Accuracy: 94.2%</div>
               </div>
               <div className="flex-1 flex items-end gap-2 px-4 pt-8 pb-2">
                 {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                   <div key={i} className="bg-orange-400 w-full rounded-t-sm" style={{ height: `${h}%` }}></div>
                 ))}
               </div>
               <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                 <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
               </div>
            </div>
          </div>
        </Container>
      </section>

      <ProgramCTA title={program.title} theme="orange" />
    </main>
  );
};

export default Pioneers;
