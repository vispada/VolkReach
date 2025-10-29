
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-graphite-dark text-graphite-text font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Testimonials />
        <Benefits />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default App;
