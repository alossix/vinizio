import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EmiliaRomagna = () => {
  return (
    <Link href="/regions#emiliaromagna">
      <div className="highlight-card">
        <h4 className="highlight-card-title">Emilia-Romagna</h4>
        <div className="highlight-image">
          <Image
            src="/highlights/emiliaromagna.jpg"
            alt="Emilia-Romagna Wine Region of Italy"
            width={250}
            height={250}
            objectFit={'cover'}
          />
          <div className="highlight-card-container">
            <p>
              This month we are highlighting three new wines from the
              Emilia-Romagna region:
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

export default EmiliaRomagna;
