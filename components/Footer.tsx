
import React from 'react';
import { VolkreachLogo, GithubIcon, FOOTER_LINKS } from '../constants';

const TwitterIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22.46,6C21.78,6.33,21.06,6.56,20.3,6.69C21.09,6.21,21.68,5.49,21.95,4.65C21.2,5.1,20.38,5.43,19.5,5.62C18.79,4.86,17.76,4.38,16.6,4.38C14.42,4.38,12.63,6.17,12.63,8.35C12.63,8.66,12.67,8.96,12.73,9.25C9.33,9.08,6.29,7.5,4.12,5.03C3.76,5.63,3.56,6.36,3.56,7.13C3.56,8.55,4.28,9.8,5.38,10.53C4.73,10.51,4.12,10.33,3.6,10.03C3.6,10.05,3.6,10.07,3.6,10.08C3.6,12.08,5.03,13.75,6.92,14.13C6.58,14.22,6.22,14.27,5.86,14.27C5.6,14.27,5.34,14.24,5.09,14.2C5.62,15.84,7.15,17.03,8.98,17.06C7.55,18.18,5.75,18.85,3.79,18.85C3.47,18.85,3.15,18.83,2.83,18.79C4.68,19.98,6.88,20.62,9.24,20.62C16.58,20.62,20.41,14.5,20.41,9.07C20.41,8.87,20.4,8.67,20.39,8.47C21.17,7.91,21.88,7.01,22.46,6Z"/>
    </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-graphite-light border-t border-graphite-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1 mb-8 md:mb-0">
            <a href="#" className="block mb-4">
              <VolkreachLogo />
            </a>
            <p className="text-sm text-graphite-text">&copy; {new Date().getFullYear()} Volkreach. All rights reserved.</p>
            <div className="flex space-x-4 mt-4">
                <a href="#" className="text-graphite-text hover:text-white"><TwitterIcon className="w-5 h-5" /></a>
                <a href="#" className="text-graphite-text hover:text-white"><GithubIcon className="w-5 h-5 stroke-current fill-none" /></a>
            </div>
          </div>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-graphite-text hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;