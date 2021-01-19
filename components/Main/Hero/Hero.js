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
      <style jsx>
        {`
          .main-hero {
            height: calc(100vh - 4rem);
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.2)
              ),
              url('/vineyard.jpg');
            background-size: cover;
            background-position-y: 10%;
            background-blend-mode: darken;
            color: #fff;
            width: 100vw;
          }
          .main-hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            height: 100%;
            width: 80vw;
            margin: auto;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
