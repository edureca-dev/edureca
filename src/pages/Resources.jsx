import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import Container from '../components/common/Container';
import ProgramCTA from '../components/programs/ProgramCTA';
import Badge from '../components/common/Badge';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { resources } from '../data/resources';

const Resources = () => {
  return (
    <main>
      <PageHeader 
        title="AI Learning Hub"
        description="Free educational resources, articles, and guides to help students and parents understand the AI landscape."
        badge="Library"
        theme="teal"
      />
      
      <section className="py-24 bg-slate-50 min-h-screen">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group">
                <div className="flex justify-between items-start mb-6">
                  <Badge color="indigo">{resource.category}</Badge>
                  <Badge color={resource.difficulty === 'Beginner' ? 'emerald' : resource.difficulty === 'Intermediate' ? 'amber' : 'orange'}>
                    {resource.difficulty}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-slate-600 mb-8 flex-grow">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                  <div className="flex items-center text-sm text-slate-500 font-medium">
                    <Clock size={16} className="mr-2" />
                    {resource.readTime}
                  </div>
                  
                  <a href={resource.link} className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                    Read Article <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProgramCTA title="Learning" />
    </main>
  );
};

export default Resources;
