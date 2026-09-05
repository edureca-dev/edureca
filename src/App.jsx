import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import Programs from './pages/Programs';
import Explorers from './pages/Explorers';
import Innovators from './pages/Innovators';
import Pioneers from './pages/Pioneers';
import Projects from './pages/Projects';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import Roadmap from './pages/Roadmap';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import Enroll from './pages/Enroll';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/explorers" element={<Explorers />} />
            <Route path="/programs/innovators" element={<Innovators />} />
            <Route path="/programs/pioneers" element={<Pioneers />} />
            
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
            
            <Route path="/roadmap" element={<Roadmap />} />
            
            <Route path="/resources" element={<Resources />} />
            
            <Route path="/about" element={<About />} />
            
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/enroll" element={<Enroll />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
