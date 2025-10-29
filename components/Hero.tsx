import React from 'react';
import { GrowthIcon } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32">
        <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-graphite-dark"></div>

      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-4xl mx-auto">
          Get SaaS Businesses To Consistently Rank #1 On Google For High-Intent Keywords Without Wasting Ad Spend On Untargeted Traffic.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-graphite-text mb-8">
          Stop relying on expensive ads. VolkReach delivers predictable, high-quality organic leads, guaranteed.
        </p>
        <div className="flex justify-center">
          <a href="#" className="flex items-center space-x-2 bg-graphite-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-graphite-accent-hover transition-transform transform hover:scale-105">
            <GrowthIcon className="w-5 h-5" />
            <span>Start Growing</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;