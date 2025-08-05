
'use client';

import { useEffect, useRef, useState } from 'react';

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const galleryItems = [
    {
      title: "Voice Cloning Technology",
      image: "https://readdy.ai/api/search-image?query=Advanced%20voice%20cloning%20laboratory%20with%20futuristic%20audio%20equipment%2C%20glowing%20blue%20waveforms%20on%20screens%2C%20high-tech%20voice%20analysis%20setup%2C%20dark%20professional%20environment%20with%20cyan%20accent%20lighting%2C%20modern%20recording%20studio%20aesthetic&width=400&height=300&seq=gallery-voice-1&orientation=landscape"
    },
    {
      title: "Real-time Voice Modulation",
      image: "https://readdy.ai/api/search-image?query=Real-time%20voice%20modulation%20interface%20with%20dynamic%20sound%20wave%20patterns%2C%20glowing%20blue%20audio%20visualizations%2C%20professional%20recording%20equipment%2C%20dark%20tech%20environment%2C%20futuristic%20audio%20processing%20displays&width=400&height=300&seq=gallery-voice-2&orientation=landscape"
    },
    {
      title: "Neural Voice Synthesis",
      image: "https://readdy.ai/api/search-image?query=Neural%20network%20voice%20synthesis%20visualization%20with%20interconnected%20nodes%2C%20glowing%20blue%20neural%20pathways%2C%20AI%20brain%20processing%20audio%20data%2C%20dark%20background%20with%20technical%20interface%20elements%2C%20futuristic%20voice%20AI%20technology&width=400&height=300&seq=gallery-voice-3&orientation=landscape"
    },
    {
      title: "Voice Authentication System",
      image: "https://readdy.ai/api/search-image?query=Voice%20biometric%20authentication%20system%20with%20security%20interface%2C%20glowing%20voice%20print%20patterns%2C%20blue%20security%20scanner%20displays%2C%20high-tech%20identification%20technology%2C%20professional%20security%20environment%20with%20modern%20design&width=400&height=300&seq=gallery-voice-4&orientation=landscape"
    },
    {
      title: "Multi-Language Voice Engine",
      image: "https://readdy.ai/api/search-image?query=Multi-language%20voice%20processing%20engine%20with%20global%20language%20indicators%2C%20glowing%20text%20translations%2C%20international%20voice%20synthesis%20interface%2C%20blue%20accent%20lighting%2C%20modern%20translation%20technology%20setup&width=400&height=300&seq=gallery-voice-5&orientation=landscape"
    },
    {
      title: "Voice Emotion Analysis",
      image: "https://readdy.ai/api/search-image?query=Voice%20emotion%20analysis%20dashboard%20with%20mood%20visualization%20charts%2C%20glowing%20emotional%20indicators%2C%20professional%20audio%20analysis%20interface%2C%20blue%20gradient%20displays%2C%20modern%20psychological%20voice%20processing%20technology&width=400&height=300&seq=gallery-voice-6&orientation=landscape"
    }
  ];

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

  return (
    <section id="gallery" ref={sectionRef} className="py-32 px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#D8ECF8] bg-clip-text text-transparent">
            Voice Technology Gallery
          </h2>
          <p className="text-xl text-white/70">
            Discover our cutting-edge voice modulation and synthesis capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#D8ECF8]/30 transition-all duration-500">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center">
                    <i className="ri-eye-line text-3xl text-[#D8ECF8] mb-2"></i>
                    <p className="text-white font-semibold">{item.title}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-8 h-8 bg-[#D8ECF8]/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <i className="ri-fullscreen-line text-[#D8ECF8]"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <img 
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
