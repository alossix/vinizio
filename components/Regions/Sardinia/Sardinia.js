import React from 'react';
import Image from 'next/image';

const Sardinia = () => {
  return (
    <div className="region-page">
      <div className="region-title-icon">
        <a class="anchor" id="sardinia"></a>
        <h2 className="region-title">Sardinia</h2>
        <Image
          src="/regions/sardinia.png"
          alt="Sardinia Wine Region of Italy"
          width={110}
          height={200}
          objectFit={'cover'}
        />
      </div>
      <div className="region-description">
        <p>
          In Italy, Grenache is most commonly found as Cannonau in
          Sardinia where it is one of the principal grapes in the
          island's deeply colored, full bodied red wines that
          routinely maintain alcohol levels around 15%. The Sardinian
          D.O.C. wine Cannonau di Sardegna is by law at least 90%
          local Grenache (Cannonau). Grenache is also found in Sicily,
          Umbria (in Trasimeno lake area), Marche (called Bordò) and
          Calabria. Grenache known with various name in italy, as
          Alicante, Tocai rosso, Granaccia, Vernaccia Nera.
        </p>
      </div>
    </div>
  );
};

export default Sardinia;
