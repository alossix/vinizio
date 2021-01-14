import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ValledAosta = () => {
  return (
    <Link href="/regions#valledaosta">
      <div className="highlight-card">
        <h4 className="highlight-card-title">Valle d'Aosta</h4>
        <div className="highlight-image">
          <Image
            src="/highlights/valledaosta.jpg"
            alt="Valle d'Aosta Wine Region of Italy"
            width={250}
            height={250}
            objectFit={'cover'}
          />
          <div className="highlight-card-container">
            <p>
              This month we are highlighting three new wines from the
              Valle d'Aosta region:
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

export default ValledAosta;
