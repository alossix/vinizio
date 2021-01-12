import React from 'react';
import Abruzzo from '../../components/Regions/Abruzzo/Abruzzo';
import Basilicata from '../../components/Regions/Basilicata/Basilicata';
import Calabria from '../../components/Regions/Calabria/Calabria';
import Campania from '../../components/Regions/Campania/Campania';
import EmiliaRomagna from '../../components/Regions/Emilia-Romagna/Emilia-Romagna';
import FriuliVeneziaGiulia from '../../components/Regions/Friuli-Venezia-Giulia/Friuli-Venezia-Giulia';
import Lazio from '../../components/Regions/Lazio/Lazio';
import Liguria from '../../components/Regions/Liguria/Liguria';
import Lombardy from '../../components/Regions/Lombardy/Lombardy';
import Marche from '../../components/Regions/Marche/Marche';
import Molise from '../../components/Regions/Molise/Molise';
import Piedmont from '../../components/Regions/Piedmont/Piedmont';
import Puglia from '../../components/Regions/Puglia/Puglia';
import Sardinia from '../../components/Regions/Sardinia/Sardinia';
import Sicily from '../../components/Regions/Sicily/Sicily';
import TrentinoAltoAdigeSudtirol from '../../components/Regions/Trentino-Alto-Adige-Sudtirol/Trentino-Alto-Adige-Sudtirol';
import Tuscany from '../../components/Regions/Tuscany/Tuscany';
import Umbria from '../../components/Regions/Umbria/Umbria';
import ValledAosta from '../../components/Regions/Valle-dAosta/Valle-dAosta';
import Veneto from '../../components/Regions/Veneto/Veneto';

const index = () => {
  const Components = {
    Abruzzo: <Abruzzo />,
    Basilicata: <Basilicata />,
    Calabria: <Calabria />,
    Campania: <Campania />,
    EmiliaRomagna: <EmiliaRomagna />,
    FriuliVeneziaGiulia: <FriuliVeneziaGiulia />,
    Lazio: <Lazio />,
    Liguria: <Liguria />,
    Lombardy: <Lombardy />,
    Marche: <Marche />,
    Molise: <Molise />,
    Piedmont: <Piedmont />,
    Puglia: <Puglia />,
    Sardinia: <Sardinia />,
    Sicily: <Sicily />,
    TrentinoAltoAdigeSudtirol: <TrentinoAltoAdigeSudtirol />,
    Tuscany: <Tuscany />,
    Umbria: <Umbria />,
    ValledAosta: <ValledAosta />,
    Veneto: <Veneto />,
  };
  const regionsArr = [
    `Abruzzo`,
    `Basilicata`,
    `Calabria`,
    `Campania`,
    `EmiliaRomagna`,
    `FriuliVeneziaGiulia`,
    `Lazio`,
    `Liguria`,
    `Lombardy`,
    `Marche`,
    `Molise`,
    `Piedmont`,
    `Puglia`,
    `Sardinia`,
    `Sicily`,
    `Tuscany`,
    `TrentinoAltoAdigeSudtirol`,
    `Umbria`,
    `ValledAosta`,
    `Veneto`,
  ];
  return (
    <div className="regions">
      {regionsArr.map((region, index) => (
        <div key={index}>{Components[region]}</div>
      ))}
    </div>
  );
};

export default index;
