import React from 'react';
import Hero from './Hero/Hero';
import Description from './Description/Description';
import Signup from './Signup/Signup';
import Highlight from './Highlight/Highlight';

const Main = () => {
  return (
    <main>
      <Hero />
      <Description />
      <Signup />
      <Highlight />
    </main>
  );
};

export default Main;
