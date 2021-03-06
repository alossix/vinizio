import React from 'react';
import Image from 'next/image';

const Molise = () => {
  return (
    <div className="region-page">
      <div className="region-title-icon">
        <a class="anchor" id="molise"></a>
        <h2 className="region-title">Molise</h2>
        <Image
          src="/regions/molise.png"
          alt="Molise Wine Region of Italy"
          width={110}
          height={200}
          objectFit={'cover'}
        />
      </div>
      <div className="region-description">
        <p>
          Tintilia is a red Italian wine grape variety that is grown
          in the Molise region of east-central Italy. A red wine made
          from the grape was classified as Denominazione di origine
          controllata (DOC) in 2011.
        </p>
        <p>
          The area of production of the grapes for the production of
          wines with D.O.C. “Tintilia del Molise”, include lands
          suited to quality and suitable for the cultivation of
          grapevines in the provinces of Campobasso and Isernia.
        </p>
      </div>
    </div>
  );
};

export default Molise;
