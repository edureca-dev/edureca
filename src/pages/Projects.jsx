import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import Container from '../components/common/Container';
import ProjectCard from '../components/projects/ProjectCard';
import ProgramCTA from '../components/programs/ProgramCTA';
import { projects } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main>
      <PageHeader 
        title="Student Projects"
        description="Explore the amazing AI applications, models, and interactive stories built by our students."
        badge="Portfolio"
        theme="indigo"
      />
      
      <section className="py-24 bg-slate-50 min-h-screen">
        <Container>
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-white text-slate-600 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="animate-fade-in">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No projects found for this category.
            </div>
          )}
        </Container>
      </section>

      <ProgramCTA title="Building Projects" />
    </main>
  );
};

export default Projects;
