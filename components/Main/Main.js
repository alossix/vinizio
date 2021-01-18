import React from 'react';
import Hero from './Hero/Hero';
import Description from './Description/Description';
import SignupArea from './SignupArea/SignupArea';
import Highlight from './Highlight/Highlight';

const Main = () => {
  return (
    <main>
      <Hero />
      <Description />
      <SignupArea />
      <Highlight />
    </main>
  );
};

export default Main;
