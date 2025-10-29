
import React from 'react';
import { FEATURES } from '../constants';
import type { Feature } from '../types';

const FeatureSection: React.FC<{ feature: Feature }> = ({ feature }) => {
  const { overline, title, description, imageUrl, imageAlt, layout } = feature;

  const textContent = (
    <div className="lg:w-1/2 flex flex-col justify-center">
      <p className="text-graphite-accent font-semibold mb-2">{overline}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-lg text-graphite-text">{description}</p>
    </div>
  );

  const imageContent = (
    <div className="lg:w-1/2 mt-8 lg:mt-0">
      <img src={imageUrl} alt={imageAlt} className="rounded-lg shadow-xl object-cover w-full h-full" />
    </div>
  );

  return (
    <div className={`container mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row gap-12 ${layout === 'image-left' ? 'lg:flex-row-reverse' : ''}`}>
      {textContent}
      {imageContent}
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="bg-graphite-light border-t border-b border-graphite-border">
      {FEATURES.map((feature, index) => (
        <div key={index} className={index < FEATURES.length - 1 ? "border-b border-graphite-border" : ""}>
          <FeatureSection feature={feature} />
        </div>
      ))}
    </section>
  );
};

export default Features;
