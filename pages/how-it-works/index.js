import React from 'react';

const index = () => {
  return (
    <main>
      <div className="how-it-works-page">
        <h2>How Does the Service Work?</h2>
        <p>
          Simply sign up to receive three hand-selected traditionally
          crafted bottles of Italian wine to your doorstep each and
          every month. No-hassle cancellation at any time.
        </p>
        <p>Pricing to be determined (service in development).</p>
      </div>
      <style jsx>{`
        main {
          max-width: 80vw;
          margin: auto;
        }
        p {
          padding: 1rem 0;
        }
      `}</style>
    </main>
  );
};

export default index;
