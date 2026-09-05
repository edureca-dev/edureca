import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import edurekaLogo from '../../assets/edureca.png';
import Button from '../common/Button';
import Container from '../common/Container';
import MobileMenu from './MobileMenu';
import useScrollPosition from '../../hooks/useScrollPosition';
import useMobileMenu from '../../hooks/useMobileMenu';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/programs', label: 'Programs' },
  { path: '/projects', label: 'Projects' },
  { path: '/roadmap', label: 'Roadmap' },
  { path: '/resources', label: 'Resources' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  
  const isScrolled = scrollPosition > 20;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group shrink-0">
              <img
                src={edurekaLogo}
                alt="Edureca — Learn, Grow, Create"
                className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? 'h-25' : 'h-30'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/50 px-2 py-1.5 rounded-full border border-slate-100 shadow-sm backdrop-blur-sm">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <Button to="/enroll" variant="gradient" size="sm" className="hidden lg:inline-flex shadow-indigo-200/50">
                Enroll Now
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} navLinks={navLinks} />
    </>
  );
};

export default Navbar;
