import React from 'react';
import Image from 'next/image';

const Campania = () => {
  return (
    <div id="campania" className="region-page">
      <div className="region-title-icon">
        <h2 className="region-title">Campania</h2>
        <Image
          src="/regions/campania.png"
          alt="Campania Wine Region of Italy"
          width={110}
          height={200}
          objectFit={'cover'}
        />
      </div>
      <div className="region-description">
        <p>
          The major wines of Campania are Falanghina (a fresh,
          easygoing white), Aglianico (a full-bodied red made from the
          local grape variety), Piedirosso (a simple but tasty red
          wine), and Lacrima Christi ("tears of Christ", much of it
          made near Vesuvius). The most sumptuous wines come from
          Eastern Campania, such as the rich Taurasi, light Greco di
          Tufo, and floral Fiano di Avellino.
        </p>
      </div>
    </div>
  );
};

export default Campania;
