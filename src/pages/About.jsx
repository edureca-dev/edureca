import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import IconBox from '../components/common/IconBox';
import ProgramCTA from '../components/programs/ProgramCTA';

const About = () => {
  return (
    <main>
      <PageHeader 
        title="Our Mission & Vision"
        description="We believe every student should have the opportunity to understand and shape the future of technology."
        badge="About Us"
        theme="indigo"
      />
      
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why AI Education Matters</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Artificial Intelligence is no longer just a subject for university researchers; it is the new electricity powering our world. From the apps we use daily to breakthroughs in healthcare, AI is everywhere.
              </p>
              <p className="text-slate-600 leading-relaxed">
                At Young AI Academy, our mission is to demystify this technology for school students. We transition them from being passive consumers of technology to active creators, innovators, and leaders.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <div className="absolute -top-6 -left-6 bg-indigo-600 text-white w-12 h-12 flex items-center justify-center rounded-2xl font-bold text-2xl rotate-12 shadow-lg">"</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg italic">
                "To build a world where every young mind is equipped with the knowledge, ethics, and skills to leverage AI for positive global impact."
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-slate-50">
        <Container>
          <SectionHeading 
            title="Our Teaching Philosophy"
            subtitle="We don't just teach code; we teach computational thinking and problem-solving."
            badge="Methodology"
            badgeColor="indigo"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <IconBox icon="Lightbulb" color="amber" className="mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Project-Based Learning</h3>
              <p className="text-slate-600">Students learn best by doing. Every concept is tied to a real-world project, whether it's an interactive story or a machine learning model.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <IconBox icon="Users" color="indigo" className="mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Collaborative Growth</h3>
              <p className="text-slate-600">Innovation doesn't happen in a vacuum. We encourage peer reviews, group projects, and sharing ideas in a safe environment.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <IconBox icon="ShieldCheck" color="emerald" className="mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ethical AI Focus</h3>
              <p className="text-slate-600">With great power comes great responsibility. We integrate digital citizenship and ethical AI usage into every phase of our curriculum.</p>
            </div>
          </div>
        </Container>
      </section>

      <ProgramCTA title="Young AI Academy" />
    </main>
  );
};

export default About;
