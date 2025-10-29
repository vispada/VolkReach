
import React from 'react';
import { BENEFITS } from '../constants';
import type { Benefit } from '../types';

const BenefitCard: React.FC<{ benefit: Benefit }> = ({ benefit }) => (
    <div className="bg-graphite-light border border-graphite-border p-8 rounded-lg">
        <div className="mb-4">
            {benefit.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
        <p className="text-graphite-text">{benefit.description}</p>
    </div>
);


const Benefits: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-graphite-light border-t border-graphite-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Unblock your team</h2>
          <p className="mt-4 text-lg text-graphite-text">
            Volkreach helps you and your team stay in flow, ship faster, and write better code.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;