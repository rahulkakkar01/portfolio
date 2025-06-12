import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Hackathons from './Hackathons';

const Main: React.FC = () => {
  return (
    <main className="space-y-20">
      <Hero />
      <About />
      <Hackathons />
      <Projects />
    </main>
  );
};

export default Main;
