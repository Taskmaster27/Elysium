
'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#05060f] text-white overflow-x-hidden">
      <Header scrollY={scrollY} />
      <Hero />
      <About />
      <Testimonials />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
      
      {/* Floating light spots */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#D8ECF8]/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-[#D8ECF8]/25 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute bottom-60 left-20 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-4000"></div>
      </div>
    </div>
  );
}
