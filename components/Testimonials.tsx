
import React from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-graphite-light border border-graphite-border rounded-lg p-6 flex flex-col h-full">
    <p className="text-graphite-text-light flex-grow">"{testimonial.quote}"</p>
    <div className="flex items-center mt-6">
      <img src={testimonial.avatarUrl} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-semibold text-white">{testimonial.author}</p>
        <p className="text-sm text-graphite-text">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-graphite-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Loved by developers, trusted by teams</h2>
          <p className="mt-4 text-lg text-graphite-text max-w-2xl mx-auto">See what developers at the world's best companies are saying about Volkreach.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;