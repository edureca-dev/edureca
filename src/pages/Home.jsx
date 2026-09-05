import React from 'react';
import HeroSection from '../components/home/HeroSection';
import LearningJourney from '../components/home/LearningJourney';
import WhyLearnAI from '../components/home/WhyLearnAI';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/projects/ProjectCard';
import Button from '../components/common/Button';
import ProgramCTA from '../components/programs/ProgramCTA';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';

const Home = () => {
  // Get 3 featured projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      <HeroSection />
      
      {/* Stats/Trust Strip */}
      <section className="bg-slate-900 py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5,000+</div>
              <div className="text-slate-400 text-sm font-medium">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-slate-400 text-sm font-medium">Partner Schools</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-slate-400 text-sm font-medium">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-slate-400 text-sm font-medium">Future Ready</div>
            </div>
          </div>
        </Container>
      </section>

      <LearningJourney />
      
      <WhyLearnAI />

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading 
              title="Built by Our Students"
              subtitle="Explore real AI models, apps, and stories created by our young innovators."
              badge="Student Portfolio"
              badgeColor="indigo"
              align="left"
              className="mb-0"
            />
            <div className="mt-6 md:mt-0">
              <Button to="/projects" variant="outline">
                View All Projects
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-indigo-50">
        <Container>
          <SectionHeading 
            title="What Parents & Students Say"
            subtitle="Don't just take our word for it. Hear from the Young AI Academy community."
            badge="Testimonials"
            badgeColor="indigo"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-8 rounded-3xl shadow-sm border border-indigo-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProgramCTA title="AI Education" />
    </main>
  );
};

export default Home;
