import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';

const HomePage = () => {
  return (
    <>
      <Hero />
      <main id="main">
        <Services />
      </main>
    </>
  );
};

export default HomePage;
