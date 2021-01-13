import React from 'react';
import Image from 'next/image';

const Basilicata = () => {
  return (
    <div id="basilicata" className="region-page">
      <div className="region-title-icon">
        <h2 className="region-title">Basilicata</h2>
        <Image
          src="/regions/basilicata.png"
          alt="Basilicata Wine Region of Italy"
          width={110}
          height={200}
          objectFit={'cover'}
        />
      </div>
      <div className="region-description">
        <p>
          Aglianico is a black grape grown in the southern regions of
          Italy, mostly Basilicata and Campania. It is considered with
          Sangiovese and Nebbiolo to be one of the three greatest
          Italian varieties.[2] Aglianico is sometimes called "The
          Barolo of the South" (il Barolo del Sud) due to its ability
          to produce highly refined, complex fine wines like the
          famous Piedmont wine, Barolo.[3]
        </p>
        <p>
          In Basilicata, Aglianico is the basis of the Aglianico del
          Vulture DOC and the region's only DOCG wine, Aglianico del
          Vulture Superiore, concentrated in the northern area of the
          province of Potenza. The most sought-after productions come
          from the vineyards located in and around the extinct volcano
          Mount Vulture.
        </p>
      </div>
    </div>
  );
};

export default Basilicata;
