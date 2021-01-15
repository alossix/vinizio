import React from 'react';
import Arrow from '../../Nav/Arrow';

const Hero = () => {
  return (
    <section className="main-hero">
      <div className="main-hero-text">
        <h1>
          Hand-selected small-batch Italian wines delivered to your
          doorstep each month.
        </h1>
        <h2>
          Start your Italian wine journey with Vinizio! <br />
          Three new wines each month, every delivery highlighting a
          unique wine region of Italy.
        </h2>
        <Arrow />
      </div>
    </section>
  );
};

export default Hero;
