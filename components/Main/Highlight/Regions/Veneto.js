import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Veneto = () => {
  return (
    <Link href="/regions#veneto">
      <div className="highlight-card">
        <h4 className="highlight-card-title">April '21: Veneto</h4>
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
        </div>
      </div>
    </Link>
  );
};

export default Veneto;
