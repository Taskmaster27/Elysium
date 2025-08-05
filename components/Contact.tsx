'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: 'ri-twitter-x-line', name: 'Twitter', href: '#' },
    { icon: 'ri-linkedin-line', name: 'LinkedIn', href: '#' },
    { icon: 'ri-github-line', name: 'GitHub', href: '#' },
    { icon: 'ri-discord-line', name: 'Discord', href: '#' }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#D8ECF8] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-white/70">
            Ready to transform your voice AI experience? Let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Social links */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Connect With Us</h3>
            <p className="text-white/80 text-lg mb-12 leading-relaxed">
              Join our community and stay updated with the latest developments in voice AI technology. Follow us on social media for insights, updates, and behind-the-scenes content.
            </p>
            
            <div className="space-y-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D8ECF8]/30 hover:bg-white/10 transition-all duration-500 group ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#D8ECF8]/20 to-[#D8ECF8]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className={`${social.icon} text-xl text-[#D8ECF8]`}></i>
                  </div>
                  <span className="text-white font-medium">{social.name}</span>
                  <i className="ri-arrow-right-line text-white/50 group-hover:text-[#D8ECF8] group-hover:translate-x-1 transition-all duration-300 ml-auto"></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Contact form */}
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div 
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: '800ms' }}
                >
                  <label className="block text-white/80 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-[#D8ECF8]/50 focus:outline-none focus:ring-2 focus:ring-[#D8ECF8]/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div 
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: '900ms' }}
                >
                  <label className="block text-white/80 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-[#D8ECF8]/50 focus:outline-none focus:ring-2 focus:ring-[#D8ECF8]/20 transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div 
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: '1000ms' }}
                >
                  <label className="block text-white/80 mb-2 font-medium">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-[#D8ECF8]/50 focus:outline-none focus:ring-2 focus:ring-[#D8ECF8]/20 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div 
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: '1100ms' }}
                >
                  <label className="block text-white/80 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-[#D8ECF8]/50 focus:outline-none focus:ring-2 focus:ring-[#D8ECF8]/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                  <div className="text-right text-white/50 text-sm mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-[#D8ECF8] to-[#D8ECF8]/80 text-[#05060f] py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#D8ECF8]/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap ${
                    isSubmitting ? 'animate-pulse' : ''
                  } ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: '1200ms' }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <i className="ri-loader-4-line animate-spin"></i>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}