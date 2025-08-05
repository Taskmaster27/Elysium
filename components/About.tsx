
'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const facilities = [
    { icon: 'ri-mic-line', name: 'Voice Cloning' },
    { icon: 'ri-sound-module-line', name: 'Voice Modulation' },
    { icon: 'ri-equalizer-line', name: 'Voice Synthesis' },
    { icon: 'ri-robot-line', name: 'Artificial Voice' },
    { icon: 'ri-speak-line', name: 'Text to Speech' },
    { icon: 'ri-chat-voice-line', name: 'Speech to Text' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Glowing image */}
          <div className="relative">
            <div 
              className={`relative group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D8ECF8]/20 to-transparent rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border border-[#D8ECF8]/30 group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500">
                <img 
                  src="https://readdy.ai/api/search-image?query=Futuristic%20digital%20brain%20neural%20network%20glowing%20in%20dark%20space%20with%20blue%20cyan%20lights%2C%20high-tech%20AI%20visualization%2C%20cinematic%20lighting%2C%20dark%20background%20with%20subtle%20geometric%20patterns%2C%20modern%20sci-fi%20aesthetic%2C%20professional%20technology%20concept&width=400&height=400&seq=elysium-about&orientation=squarish"
                  alt="ELYSIUM AI Technology"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D8ECF8]/15 via-transparent to-purple-500/10 rounded-full"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-[#D8ECF8]/5 to-transparent rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-[#D8ECF8] bg-clip-text text-transparent">
              About ELYSIUM
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              ELYSIUM represents the pinnacle of voice AI technology, transforming how humans interact with artificial intelligence. Our cutting-edge platform delivers unprecedented voice synthesis capabilities, enabling seamless communication between digital and human worlds.
            </p>

            {/* Facilities */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#D8ECF8] mb-6">Our Facilities</h3>
              <div className="grid grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <div 
                    key={facility.name}
                    className={`flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#D8ECF8]/30 transition-all duration-500 hover:bg-white/10 group ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className={`${facility.icon} text-xl text-[#D8ECF8] group-hover:scale-110 transition-transform duration-300`}></i>
                    </div>
                    <span className="text-white/90 whitespace-nowrap">{facility.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
