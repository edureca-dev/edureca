import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import Container from '../components/common/Container';
import PhaseCard from '../components/home/PhaseCard';
import ProgramCTA from '../components/programs/ProgramCTA';
import { programs } from '../data/programs';

const Programs = () => {
  return (
    <main>
      <PageHeader 
        title="Our Educational Programs"
        description="A structured, progressive path designed to take students from curious beginners to career-ready AI developers."
        badge="Curriculum"
      />
      
      <section className="py-24 bg-white relative">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <PhaseCard 
                key={program.id}
                phase={program.phase}
                title={program.title}
                classes={program.classes}
                description={program.description}
                theme={program.theme}
                link={`/programs/${program.id}`}
              />
            ))}
          </div>
        </Container>
      </section>

      <ProgramCTA title="AI Education" />
    </main>
  );
};

export default Programs;
