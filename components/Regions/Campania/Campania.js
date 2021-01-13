import React from 'react';

const Campania = () => {
  return (
    <div id="campania" className="region-page">
      <div className="region-title-icon">
        <h2 className="region-title">Campania</h2>
        <img
          className="region-icon"
          src="/regions/campania.png"
          alt="Campania Wines"
        ></img>
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
