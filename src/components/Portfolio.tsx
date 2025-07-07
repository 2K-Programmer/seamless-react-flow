
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Services from './Services';
import Projects from './Projects';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';
import AdminPanel from './AdminPanel';
import AdminButton from './AdminButton';

const Portfolio = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      
      {/* Admin Panel */}
      <AdminPanel 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
      />
      
      {/* Floating Admin Button */}
      <AdminButton onClick={() => setIsAdminOpen(true)} />
    </div>
  );
};

export default Portfolio;
