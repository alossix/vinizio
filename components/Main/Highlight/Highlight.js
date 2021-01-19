import React from 'react';
import { HighlightComponents } from './RegionCards/RegionCardsList';

const Highlight = () => {
  const upcoming = ['Piedmont', 'Puglia', 'Veneto'];
  return (
    <section className="highlight-section">
      <h2 className="highlight-title">Upcoming Deliveries</h2>
      <div className="highlight-upcoming">
        {HighlightComponents[upcoming[0]]}
        {HighlightComponents[upcoming[1]]}
        {HighlightComponents[upcoming[2]]}
      </div>
      <style jsx>{`
        .highlight-section {
          margin-bottom: 3rem;
        }
        .highlight-upcoming {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
};

export default Highlight;
