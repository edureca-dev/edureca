import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import PhaseCard from './PhaseCard';
import { programs } from '../../data/programs';

const LearningJourney = () => {
  return (
    <section className="py-24 bg-white relative">
      <Container>
        <SectionHeading 
          title="Our 3-Level AI Learning Journey"
          subtitle="A structured path from curiosity to career readiness. We meet students where they are and guide them to where the future is going."
          badge="Curriculum"
          badgeColor="indigo"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <PhaseCard 
              key={program.id}
              phase={program.phase}
              title={program.title}
              classes={program.classes}
              description={program.tagline}
              theme={program.theme}
              link={`/programs/${program.id}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LearningJourney;
