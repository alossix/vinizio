import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Piedmont = () => {
  return (
    <Link href="/regions#piedmont">
      <div className="highlight-card">
        <h4 className="highlight-card-title">May '21: Piedmont</h4>
        <div className="highlight-image">
          <Image
            src="/highlights/piedmont.jpg"
            alt="Piedmont Wine Region of Italy"
            width={250}
            height={250}
            objectFit={'cover'}
          />
          <div className="highlight-card-container">
            <p>May highlights from the Piedmont region:</p>
            <ul>
              <li>Red: Barolo</li>
              <li>Red: Barbera</li>
              <li>White: Moscato d'Asti</li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Piedmont;
