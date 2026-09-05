import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import IconBox from '../common/IconBox';

const benefits = [
  {
    title: "Future-Ready Skills",
    description: "Prepare for careers in AI, data science, engineering, and technology before college begins.",
    icon: "Rocket",
    color: "indigo"
  },
  {
    title: "Problem Solving",
    description: "Solve real-world problems using computational thinking and structured logic.",
    icon: "Puzzle",
    color: "teal"
  },
  {
    title: "Creativity Boost",
    description: "Use AI tools to create stories, images, games, apps, and bring wild ideas to life.",
    icon: "Palette",
    color: "purple"
  },
  {
    title: "Global Opportunities",
    description: "Prepare students for higher education, competitions, hackathons, and future careers.",
    icon: "Globe",
    color: "orange"
  }
];

const WhyLearnAI = () => {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionHeading 
          title="Why Learn AI Now?"
          subtitle="Artificial Intelligence isn't just a subject; it's the new foundation for every industry."
          badge="The Advantage"
          badgeColor="indigo"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-6">
                <IconBox icon={benefit.icon} color={benefit.color} size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyLearnAI;
