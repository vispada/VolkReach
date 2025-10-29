
import React, { useState } from 'react';
import { NAV_LINKS, VolkreachLogo, GithubIcon } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-graphite-dark/80 backdrop-blur-sm border-b border-graphite-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="#" className="flex items-center">
              <VolkreachLogo />
            </a>
            <nav className="hidden md:flex items-center space-x-6">
              {NAV_LINKS.map(link => (
                <a key={link.label} href={link.href} className="text-sm text-graphite-text hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-sm text-graphite-text hover:text-white transition-colors">Sign in</a>
            <a href="#" className="flex items-center space-x-2 bg-white text-black text-sm font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
              <GithubIcon className="w-4 h-4" />
              <span>Get started</span>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-graphite-light">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} className="block text-graphite-text hover:text-white transition-colors py-2">
                {link.label}
              </a>
            ))}
             <div className="border-t border-graphite-border pt-4 space-y-3">
                <a href="#" className="block text-graphite-text hover:text-white transition-colors">Sign in</a>
                <a href="#" className="flex items-center justify-center space-x-2 w-full bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
                  <GithubIcon className="w-4 h-4" />
                  <span>Get started</span>
                </a>
             </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;