'use client';

import { useState, useEffect, useRef } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CTO at TechFlow",
      image: "https://readdy.ai/api/search-image?query=Professional%20Asian%20woman%20executive%20in%20modern%20office%2C%20confident%20smile%2C%20business%20attire%2C%20clean%20corporate%20headshot%2C%20soft%20lighting%2C%20professional%20photography%20style&width=80&height=80&seq=testimonial-1&orientation=squarish",
      review: "ELYSIUM's voice synthesis technology has revolutionized our customer service. The quality is indistinguishable from human speech."
    },
    {
      name: "Marcus Rodriguez",
      title: "Product Manager at VoiceAI",
      image: "https://readdy.ai/api/search-image?query=Professional%20Hispanic%20man%20in%20business%20suit%2C%20friendly%20expression%2C%20corporate%20headshot%2C%20modern%20office%20background%2C%20professional%20lighting%2C%20executive%20portrait&width=80&height=80&seq=testimonial-2&orientation=squarish",
      review: "The voice cloning capabilities exceeded our expectations. ELYSIUM delivered results that seemed impossible just months ago."
    },
    {
      name: "Emily Watson",
      title: "CEO at AudioTech",
      image: "https://readdy.ai/api/search-image?query=Professional%20blonde%20woman%20CEO%2C%20confident%20business%20portrait%2C%20modern%20corporate%20setting%2C%20executive%20headshot%2C%20professional%20attire%2C%20warm%20lighting&width=80&height=80&seq=testimonial-3&orientation=squarish",
      review: "Working with ELYSIUM has been transformative. Their AI voice technology is years ahead of the competition."
    },
    {
      name: "David Kim",
      title: "Lead Developer at SoundWave",
      image: "https://readdy.ai/api/search-image?query=Professional%20Asian%20man%20software%20developer%2C%20friendly%20smile%2C%20casual%20business%20attire%2C%20modern%20tech%20office%2C%20professional%20headshot%2C%20natural%20lighting&width=80&height=80&seq=testimonial-4&orientation=squarish",
      review: "The integration was seamless and the results speak for themselves. ELYSIUM's platform is incredibly robust and reliable."
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#D8ECF8] bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/70">
            Trusted by industry leaders worldwide
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`w-full flex-shrink-0 px-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 ${
                  index === currentSlide ? 'ring-2 ring-[#D8ECF8]/30 shadow-2xl shadow-[#D8ECF8]/10' : ''
                }`}>
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#D8ECF8]/30">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{testimonial.name}</h3>
                  <p className="text-[#D8ECF8] mb-6">{testimonial.title}</p>
                  <p className="text-white/80 text-lg leading-relaxed italic">
                    "{testimonial.review}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#D8ECF8] shadow-lg shadow-[#D8ECF8]/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}