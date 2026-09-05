import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import Container from '../common/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group inline-flex">
              <div className="bg-indigo-500/20 p-2 rounded-xl group-hover:bg-indigo-500/30 transition-colors">
                <Sparkles className="text-indigo-400" size={24} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Edureca
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Empowering students from Class 6 to 12 to learn AI, build real projects, and shape the future of technology.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="X (Twitter)" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                {/* X / Twitter icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-pink-600 transition-all">
                {/* Instagram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                {/* LinkedIn icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/programs" className="hover:text-indigo-400 transition-colors">Programs</Link></li>
              <li><Link to="/projects" className="hover:text-indigo-400 transition-colors">Projects</Link></li>
              <li><Link to="/roadmap" className="hover:text-indigo-400 transition-colors">Roadmap</Link></li>
              <li><Link to="/resources" className="hover:text-indigo-400 transition-colors">Resources</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-6">Programs</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/programs/explorers" className="hover:text-purple-400 transition-colors">AI Explorers (Class 6-7)</Link></li>
              <li><Link to="/programs/innovators" className="hover:text-teal-400 transition-colors">AI Innovators (Class 8-9)</Link></li>
              <li><Link to="/programs/pioneers" className="hover:text-orange-400 transition-colors">AI Pioneers (Class 10-12)</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                <a href="mailto:hello@youngaiacademy.edu" className="hover:text-white transition-colors">
                  info.edureca@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                <a href="tel:+917003411355" className="hover:text-white transition-colors">
                  +91 7003411355
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  Sodepur, 
                  Kolkata, West Bengal 700111
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {currentYear} Young AI Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
