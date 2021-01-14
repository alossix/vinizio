import React from 'react';
import Highlight from './Highlight/Highlight';

const Main = () => {
  const highlights = ['Piedmont', 'Puglia', 'Veneto'];
  return (
    <main>
      <section className="main-hero">
        <h1>Vinizio: Start Your Italian Wine Journey</h1>
        <h2>
          You'll receive three new wines each month, every delivery
          highlighting a unique wine region of Italy.
        </h2>
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
        <h3>
          Like what you've tasted? Reorder your favorite bottles,
          while supplies last.
        </h3>
        <img
          className="italy-icon"
          src="/italyicon.svg"
          alt="Icon of Italy"
        ></img>
      </section>
      <Highlight upcoming={highlights} />
      <section className="signup-area">
        <button>Sign Up Now!</button>
      </section>
    </main>
  );
};

export default Main;
