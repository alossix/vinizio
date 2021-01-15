import React from 'react';
import Hero from './Hero/Hero';
import Description from './Description/Description';
import Highlight from './Highlight/Highlight';

const Main = () => {
  return (
    <main>
      <Hero />
      <Description />
      <h2>
        Easily set your choice between reds, whites, or a mix of both.
        Unique gift subscription for the wine lover. Shipping
        throughout the E.U.
      </h2>
      <section className="signup-area">
        <button>Sign Up Now!</button>
      </section>
      <section className="reorder-section">
        <h3>
          Like what you've tasted? Reorder your favorite bottles,
          while supplies last.
        </h3>
      </section>
      <Highlight />
    </main>
  );
};

export default Main;
