import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Veneto = () => {
  return (
    <div className="highlight-card">
      <h4 className="highlight-title">April: Veneto</h4>
      <div className="highlight-image">
        <Image
          src="/highlights/veneto.jpg"
          alt="Veneto Wine Region of Italy"
          width={250}
          height={250}
          objectFit={'cover'}
        />
        <div className="highlight-card-container">
          <p>
            April highlights three new wines from the Veneto region:
          </p>
          <ul>
            <li>Amarone della Valpolicella</li>
            <li>Merlot</li>
            <li>Soave</li>
          </ul>
        </div>
        <Link href="/regions/veneto">
          <a className="highlight-card-link">
            Read more about Veneto
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Veneto;
