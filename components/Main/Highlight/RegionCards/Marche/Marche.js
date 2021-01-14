import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Marche = () => {
  return (
    <Link href="/regions#marche">
      <div className="highlight-card">
        <h4 className="highlight-card-title">Marche</h4>
        <div className="highlight-image">
          <Image
            src="/highlights/marche.jpg"
            alt="Marche Wine Region of Italy"
            width={250}
            height={250}
            objectFit={'cover'}
          />
          <div className="highlight-card-container">
            <p>
              This month we are highlighting three new wines from the
              Marche region:
            </p>
            <ul>
              <li>Red:</li>
              <li>Red:</li>
              <li>White:</li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Marche;
