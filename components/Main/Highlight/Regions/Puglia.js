import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Puglia = () => {
  return (
<<<<<<< HEAD
    <Link href="/regions#puglia">
      <div className="highlight-card">
        <h4 className="highlight-card-title">March '21: Puglia</h4>
        <div className="highlight-image">
          <Image
            src="/highlights/puglia.jpg"
            alt="Puglia Wine Region of Italy"
            width={250}
            height={250}
            objectFit={'cover'}
          />
          <div className="highlight-card-container">
            <p>
              March highlights three new wines from the Puglia region:
            </p>
            <ul>
              <li>Primitivo</li>
              <li>Negroamaro</li>
              <li>Trebbiano</li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
=======
    <div className="highlight-card">
      <h4 className="highlight-title">March: Puglia (Apulia)</h4>
      <div className="highlight-image">
        <Image
          src="/highlights/puglia.jpg"
          alt="Puglia Wine Region of Italy"
          width={250}
          height={250}
          objectFit={'cover'}
        />
        <div className="highlight-card-container">
          <p>
            March highlights three new wines from the Puglia region:
          </p>
          <ul>
            <li>Primitivo</li>
            <li>Negroamaro</li>
            <li>Trebbiano</li>
          </ul>
        </div>
        <Link href="/regions/puglia">
          <a className="highlight-card-link">
            Read more about Puglia
          </a>
        </Link>
      </div>
    </div>
>>>>>>> 85fb0eaceb1dd13ffb49fdee0bd56b93905c72d3
  );
};

export default Puglia;
