import React from 'react';

const Description = () => {
  return (
    <section id="description">
      <div className="description">
        <h2>With your monthly subscription...</h2>
        <ul>
          <li>
            Discover the best hand-selected wines from independent
            producers
          </li>
          <li>
            Explore heritage varieties not commonly available at your
            local supermarket
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
      </div>
      <style jsx>
        {`
          .description {
            display: flex;
            justify-content: center;
            margin: auto;
            padding-top: 4rem;
            width: 80vw;
          }
          .description ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .description li {
            margin-left: 3rem;
            padding: 0.5rem 0;
          }
        `}
      </style>
    </section>
  );
};

export default Description;
