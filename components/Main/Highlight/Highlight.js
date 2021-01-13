import React from 'react';
import Piedmont from './Regions/Piedmont';
import Puglia from './Regions/Puglia';
import Veneto from './Regions/Veneto';

const Highlight = (props) => {
<<<<<<< HEAD
=======
  console.log(props.upcoming);
>>>>>>> 85fb0eaceb1dd13ffb49fdee0bd56b93905c72d3
  const { upcoming } = props;
  const HighlightComponents = {
    // Abruzzo: <Abruzzo />,
    // Basilicata: <Basilicata />,
    // Calabria: <Calabria />,
    // Campania: <Campania />,
    // EmiliaRomagna: <EmiliaRomagna />,
    // FriuliVeneziaGiulia: <FriuliVeneziaGiulia />,
    // Lazio: <Lazio />,
    // Liguria: <Liguria />,
    // Lombardy: <Lombardy />,
    // Marche: <Marche />,
    // Molise: <Molise />,
    Piedmont: <Piedmont />,
    Puglia: <Puglia />,
    // Sardinia: <Sardinia />,
    // Sicily: <Sicily />,
    // TrentinoAltoAdigeSudtirol: <TrentinoAltoAdigeSudtirol />,
    // Tuscany: <Tuscany />,
    // Umbria: <Umbria />,
    // ValledAosta: <ValledAosta />,
    Veneto: <Veneto />,
  };
  return (
    <section>
      <h2 className="highlight-title">Upcoming Deliveries</h2>
      <div className="highlight-upcoming">
        {HighlightComponents[props.upcoming[0]]}
        {HighlightComponents[props.upcoming[1]]}
        {HighlightComponents[props.upcoming[2]]}
      </div>
    </section>
  );
};

export default Highlight;
