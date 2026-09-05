import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', studentClass: '', program: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end validation/submission simulation
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', studentClass: '', program: '', message: '' });
  };

  return (
    <main>
      <PageHeader 
        title="Get in Touch"
        description="Have questions about our programs or admissions? Our team is here to help."
        badge="Contact Us"
        theme="slate"
      />
      
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Reach out to us via email, phone, or simply fill out the contact form. We aim to respond to all inquiries within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email Us</h4>
                    <a href="mailto:hello@youngaiacademy.edu" className="text-slate-600 hover:text-indigo-600">hello@youngaiacademy.edu</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Call Us</h4>
                    <a href="tel:+1234567890" className="text-slate-600 hover:text-indigo-600">+1 (234) 567-890</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Visit Us</h4>
                    <span className="text-slate-600">123 Innovation Drive,<br/>Tech District, SF 94105</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>
                
                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                       <Send size={20} className="text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Message Sent!</h4>
                      <p>Thank you for reaching out. We will get back to you shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Student / Parent Name *</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Email Address *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-colors" placeholder="john@example.com" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-colors" placeholder="+1 (555) 000-0000" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Interested Program</label>
                        <select name="program" value={formData.program} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-colors">
                          <option value="">Select a program...</option>
                          <option value="explorers">AI Explorers (Class 6-7)</option>
                          <option value="innovators">AI Innovators (Class 8-9)</option>
                          <option value="pioneers">AI Pioneers (Class 10-12)</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Message *</label>
                      <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-colors resize-none" placeholder="How can we help you?"></textarea>
                    </div>
                    
                    <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto px-8">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
