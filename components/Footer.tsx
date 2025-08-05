
'use client';

import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Voice Cloning', href: '#' },
        { name: 'Voice Synthesis', href: '#' },
        { name: 'Speech Recognition', href: '#' },
        { name: 'API Documentation', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Whitepapers', href: '#' },
        { name: 'Support', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR', href: '#' }
      ]
    }
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#05060f]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="font-bold text-3xl text-[#D8ECF8] tracking-wider mb-6 glow-text">
              ELYSIUM
            </div>
            <p className="text-white/70 mb-8 leading-relaxed">
              Pioneering the future of voice AI technology with cutting-edge synthesis, cloning, and recognition capabilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:border-[#D8ECF8]/30 hover:bg-[#D8ECF8]/10 transition-all duration-300 group">
                <i className="ri-twitter-x-line text-white/70 group-hover:text-[#D8ECF8]"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:border-[#D8ECF8]/30 hover:bg-[#D8ECF8]/10 transition-all duration-300 group">
                <i className="ri-linkedin-line text-white/70 group-hover:text-[#D8ECF8]"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:border-[#D8ECF8]/30 hover:bg-[#D8ECF8]/10 transition-all duration-300 group">
                <i className="ri-github-line text-white/70 group-hover:text-[#D8ECF8]"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:border-[#D8ECF8]/30 hover:bg-[#D8ECF8]/10 transition-all duration-300 group">
                <i className="ri-discord-line text-white/70 group-hover:text-[#D8ECF8]"></i>
              </a>
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section, index) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/60 hover:text-[#D8ECF8] transition-colors duration-300 whitespace-nowrap"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            2024 ELYSIUM. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-white/50 text-sm">Made with</span>
            <i className="ri-heart-fill text-red-400 text-sm"></i>
            <span className="text-white/50 text-sm">for the future of AI</span>
          </div>
        </div>
      </div>

      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#D8ECF8]/5 to-transparent pointer-events-none"></div>
    </footer>
  );
}
