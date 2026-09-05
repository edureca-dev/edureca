import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { CheckCircle2, ChevronRight, GraduationCap } from 'lucide-react';
import { programs } from '../data/programs';

const Enroll = () => {
  const [step, setStep] = useState(1);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const navigate = useNavigate();

  const handleProgramSelect = (programId) => {
    setSelectedProgram(programId);
    setStep(2);
  };

  const handleEnrollmentSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <Container className="max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-100 text-indigo-600 rounded-full mb-6">
            <GraduationCap size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Start Your AI Journey
          </h1>
          <p className="text-xl text-slate-600">
            Join the Young AI Academy and prepare for a future driven by technology.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}>1</div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-indigo-600' : 'bg-slate-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}>2</div>
            <div className={`w-16 h-1 ${step >= 3 ? 'bg-indigo-600' : 'bg-slate-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 3 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}>3</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
          
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Select Your Student's Class Level</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {programs.map(program => (
                  <button 
                    key={program.id}
                    onClick={() => handleProgramSelect(program.id)}
                    className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                      selectedProgram === program.id 
                        ? `border-${program.color}-500 bg-${program.color}-50 shadow-md` 
                        : 'border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div className={`text-${program.color}-600 font-bold text-xs tracking-wider mb-2 uppercase`}>{program.classes}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{program.title}</h3>
                    <p className="text-sm text-slate-500 mb-6">{program.tagline}</p>
                    <div className={`flex items-center text-${program.color}-600 font-medium text-sm`}>
                      Select Program <ChevronRight size={16} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900">Student Information</h2>
                <button onClick={() => setStep(1)} className="text-sm text-indigo-600 font-medium hover:underline">Change Program</button>
              </div>
              
              <form onSubmit={handleEnrollmentSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Student Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Parent Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Phone Number</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50" />
                  </div>
                </div>
                
                <div className="pt-6">
                  <Button type="submit" variant="primary" className="w-full" size="lg">
                    Complete Enrollment
                  </Button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in text-center py-10 max-w-lg mx-auto">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Application Received!</h2>
              <p className="text-lg text-slate-600 mb-8">
                Welcome to Young AI Academy. We have sent an email with the next steps and program schedule to your inbox.
              </p>
              <Button onClick={() => navigate('/')} variant="primary">
                Return to Home
              </Button>
            </div>
          )}
          
        </div>
      </Container>
    </main>
  );
};

export default Enroll;
