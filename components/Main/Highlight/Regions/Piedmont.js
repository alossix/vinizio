import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Piedmont = () => {
  return (
    <div className="highlight-card">
      <h4 className="highlight-title">February: Piedmont</h4>
      <div className="highlight-image">
        <Image
          src="/highlights/piedmont.jpg"
          alt="Piedmont Wine Region of Italy"
          width={250}
          height={250}
          objectFit={'cover'}
        />
        <div className="highlight-card-container">
          <p>
            February highlights three new wines from the Piedmont
            region:
          </p>
          <ul>
            <li>Barolo</li>
            <li>Barbera</li>
            <li>Moscato d'Asti</li>
          </ul>
        </div>
        <Link href="/regions/piedmont">
          <a className="highlight-card-link">
            Read more about Piedmont
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Piedmont;