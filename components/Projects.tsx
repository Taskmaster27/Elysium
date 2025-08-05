'use client';

import { useEffect, useRef, useState } from 'react';

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "VoiceFlow Integration",
      service: "Voice Synthesis & AI Integration",
      company: "Microsoft",
      image: "https://readdy.ai/api/search-image?query=Modern%20Microsoft%20office%20building%20with%20glass%20facade%2C%20professional%20corporate%20architecture%2C%20blue%20accent%20lighting%2C%20clean%20minimalist%20design%2C%20technology%20company%20headquarters%2C%20evening%20lighting&width=600&height=400&seq=project-microsoft&orientation=landscape",
      description: "Implemented advanced voice synthesis technology for Microsoft's virtual assistant platform, enhancing user interaction with natural-sounding AI voices."
    },
    {
      title: "Neural Voice Platform",
      service: "Voice Cloning & Modulation",
      company: "Google",
      image: "https://readdy.ai/api/search-image?query=Google%20headquarters%20modern%20campus%20with%20colorful%20architecture%2C%20innovative%20tech%20building%20design%2C%20glass%20structures%2C%20creative%20workspace%2C%20Silicon%20Valley%20aesthetic%2C%20bright%20daylight&width=600&height=400&seq=project-google&orientation=landscape",
      description: "Developed a comprehensive voice cloning solution for Google's content creation tools, enabling creators to generate personalized voice content at scale."
    },
    {
      title: "AI Voice Assistant",
      service: "Speech Recognition & Synthesis",
      company: "Amazon",
      image: "https://readdy.ai/api/search-image?query=Amazon%20corporate%20office%20building%20with%20modern%20architecture%2C%20sleek%20glass%20design%2C%20professional%20business%20environment%2C%20tech%20company%20headquarters%2C%20urban%20setting%2C%20contemporary%20style&width=600&height=400&seq=project-amazon&orientation=landscape",
      description: "Enhanced Amazon's voice assistant capabilities with our cutting-edge speech-to-text and text-to-speech technologies for improved customer experiences."
    },
    {
      title: "Voice Analytics Suite",
      service: "Voice Analysis & Processing",
      company: "Meta",
      image: "https://readdy.ai/api/search-image?query=Meta%20Facebook%20headquarters%20modern%20campus%2C%20innovative%20architecture%20with%20curved%20glass%20buildings%2C%20tech%20company%20office%20complex%2C%20futuristic%20design%2C%20California%20setting&width=600&height=400&seq=project-meta&orientation=landscape",
      description: "Built advanced voice analytics tools for Meta's social platforms, enabling real-time voice processing and sentiment analysis for enhanced user engagement."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const projectElements = document.querySelectorAll('[data-index]');
    projectElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#D8ECF8] bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-xl text-white/70">
            Collaborating with industry giants to shape the future of voice AI
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={index}
              data-index={index}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div 
                className={`relative group transition-all duration-1000 ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                } ${
                  visibleProjects.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D8ECF8]/20 to-transparent rounded-2xl blur-2xl group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#D8ECF8]/30 transition-all duration-500">
                  <img 
                    src={project.image}
                    alt={`${project.company} Project`}
                    className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060f]/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="text-[#D8ECF8] font-semibold text-lg">{project.company}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div 
                className={`transition-all duration-1000 delay-300 ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                } ${
                  visibleProjects.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'}`
                }`}
              >
                <h3 className="text-4xl font-bold mb-4 text-white">
                  {project.title}
                </h3>
                <div className="text-[#D8ECF8] text-lg mb-6 font-medium">
                  {project.service}
                </div>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex items-center space-x-4">
                  <button className="bg-gradient-to-r from-[#D8ECF8] to-[#D8ECF8]/80 text-[#05060f] px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#D8ECF8]/30 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                    View Case Study
                  </button>
                  <button className="border border-[#D8ECF8]/30 text-[#D8ECF8] px-8 py-3 rounded-full font-semibold hover:bg-[#D8ECF8]/10 transition-all duration-300 whitespace-nowrap">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}