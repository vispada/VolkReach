
import React from 'react';
import { COMPANY_LOGOS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 bg-graphite-dark">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-graphite-text uppercase tracking-widest mb-8">
          Trusted by the world's best engineering teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
          {COMPANY_LOGOS.map(logo => (
            <div key={logo} className="text-gray-500 font-mono text-2xl filter grayscale opacity-60 hover:opacity-100 hover:filter-none transition-all">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
