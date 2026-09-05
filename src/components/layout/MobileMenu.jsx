import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, ChevronRight } from 'lucide-react';
import Button from '../common/Button';
import edurekaLogo from '../../assets/edureca.png';

const MobileMenu = ({ isOpen, closeMenu, navLinks }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <img
              src={edurekaLogo}
              alt="Edureca — Learn, Grow, Create"
              className="h-30 w-auto object-contain"
            />
          </Link>
          <button 
            onClick={closeMenu}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) => 
                `flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-600' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`
              }
            >
              {link.label}
              <ChevronRight size={18} className="opacity-40" />
            </NavLink>
          ))}
        </div>
        
        <div className="p-4 border-t border-slate-100">
          <Button to="/enroll" variant="gradient" className="w-full" onClick={closeMenu}>
            Enroll Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
