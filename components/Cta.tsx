import React from 'react';
import { GrowthIcon } from '../constants';

const Cta: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-graphite-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Get started with Volkreach
        </h2>
        <p className="max-w-xl mx-auto text-lg text-graphite-text mb-8">
          Start driving quality traffic and leads. Let's get started.
        </p>
        <a href="#" className="inline-flex items-center space-x-2 bg-graphite-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-graphite-accent-hover transition-transform transform hover:scale-105">
            <GrowthIcon className="w-5 h-5" />
            <span>Let's start growing</span>
        </a>
      </div>
    </section>
  );
};

export default Cta;