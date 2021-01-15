import React from 'react';
import Image from 'next/image';
import Highlight from './Highlight/Highlight';

const Main = () => {
  return (
    <main>
      <section className="main-hero">
        <h1>
          Hand-selected small-batch Italian wines delivered to your
          doorstep each month.
        </h1>
        <div className="main-hero-text">
          <h2>
            Start your Italian wine journey with Vinizio! <br />
            Three new wines each month, every delivery highlighting a
            unique wine region of Italy.
          </h2>
        </div>
      </section>
      <section className="main-description">
        <h3>With your monthly subscription:</h3>
        <ul>
          <li>
            Emphasis on small-batch vintners and traditional methods,
            fantastic way to discover new varieties not commonly
            available at your local supermarket.
          </li>
          <li>
            Discover the best hand-selected wines from independent
            producers
          </li>
          <li>
            Support traditional wine production throughout the Italian
            peninsula
          </li>
          <li>
            Learn about where your wine originates, the story of the
            producer, and what makes your bottle so special
          </li>
          <li>
            Pair your discoveries with traditional regional recipes,
            included with your order
          </li>
          <li>No-hassle cancellation at any time</li>
        </ul>
        <h2>
          Easily set your choice between reds, whites, or a mix of
          both. Unique gift subscription for the wine lover. Shipping
          throughout the E.U.
        </h2>
      </section>
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
