import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Code2, Target } from 'lucide-react';
import Container from '../components/common/Container';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import ProgramCTA from '../components/programs/ProgramCTA';
import { projects } from '../data/projects';

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <main className="pt-32 pb-24 min-h-[70vh] flex items-center">
        <Container className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Project Not Found</h1>
          <p className="text-slate-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/projects')} variant="primary">
            Back to Projects
          </Button>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-200">
        <Container>
          <Link to="/projects" className="inline-flex items-center text-slate-500 hover:text-indigo-600 font-medium mb-8 transition-colors">
            <ArrowLeft size={18} className="mr-2" /> Back to all projects
          </Link>
          
          <div className="flex gap-3 mb-6">
            <Badge color="indigo">{project.category}</Badge>
            <Badge color="slate">{project.level}</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {project.title}
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
            {project.overview}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium shadow-sm flex items-center gap-2">
                <Code2 size={16} className="text-indigo-500" />
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>
      
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Learning Objectives */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Target className="text-indigo-600" /> Learning Objectives
                </h2>
                <ul className="space-y-4">
                  {project.learningObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 bg-indigo-100 p-1 rounded-full text-indigo-600">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-slate-700 text-lg">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Workflow */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Code2 className="text-indigo-600" /> Project Workflow
                </h2>
                <div className="space-y-6">
                  {project.workflow.map((step, i) => (
                    <div key={i} className="flex gap-6 items-start relative">
                      {i !== project.workflow.length - 1 && (
                        <div className="absolute top-10 left-6 bottom-0 w-px bg-slate-200 -z-10 h-full"></div>
                      )}
                      <div className="w-12 h-12 rounded-full bg-slate-50 border-2 border-indigo-100 text-indigo-600 font-bold flex items-center justify-center shrink-0 shadow-sm z-10">
                        {i + 1}
                      </div>
                      <div className="pt-3 pb-8">
                        <p className="text-slate-800 font-medium text-lg">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 sticky top-32">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Expected Outcome</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {project.expectedOutcome}
                </p>
                <h4 className="font-semibold text-slate-900 mb-2">Difficulty Level</h4>
                <Badge color={project.difficulty === 'Easy' ? 'emerald' : project.difficulty === 'Medium' ? 'amber' : 'orange'} className="mb-8">
                  {project.difficulty}
                </Badge>
                
                <hr className="border-slate-200 mb-8" />
                
                <h4 className="font-semibold text-slate-900 mb-4">Want to build this?</h4>
                <Button to="/enroll" variant="primary" className="w-full">
                  Enroll in Program
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProgramCTA title="Project Building" />
    </main>
  );
};

export default ProjectDetailsPage;
