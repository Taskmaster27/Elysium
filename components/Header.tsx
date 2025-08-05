
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  scrollY: number;
}

export default function Header({ scrollY }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (scrollY > lastScrollY && scrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(scrollY);
  }, [scrollY, lastScrollY]);

  const blurAmount = Math.min(scrollY / 100, 1);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        backdropFilter: `blur(${blurAmount * 20}px)`,
        backgroundColor: `rgba(5, 6, 15, ${blurAmount * 0.8})`,
      }}
    >
      <nav className="px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="font-bold text-2xl text-[#D8ECF8] tracking-wider glow-text">
            ELYSIUM
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-white/80 hover:text-[#D8ECF8] transition-colors duration-300 whitespace-nowrap">
              About
            </Link>
            <Link href="#testimonials" className="text-white/80 hover:text-[#D8ECF8] transition-colors duration-300 whitespace-nowrap">
              Testimonials
            </Link>
            <Link href="#projects" className="text-white/80 hover:text-[#D8ECF8] transition-colors duration-300 whitespace-nowrap">
              Projects
            </Link>
            <Link href="#gallery" className="text-white/80 hover:text-[#D8ECF8] transition-colors duration-300 whitespace-nowrap">
              Gallery
            </Link>
            <Link href="#contact" className="text-white/80 hover:text-[#D8ECF8] transition-colors duration-300 whitespace-nowrap">
              Contact
            </Link>
          </div>

          <button className="md:hidden text-white">
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
