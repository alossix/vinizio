import React from 'react';
import * as Regions from '../../components/Regions/index';

const index = () => {
  const regionsArr = [
    'abruzzo',
    'basilicata',
    'calabria',
    'campania',
    'emilia-romagna',
    'friuli-venezia-giulia',
    'lazio',
    'liguria',
    'lombardy',
    'marche',
    'molise',
    'piedmont',
    'puglia',
    'sardinia',
    'sicily',
    'tuscany',
    'trentino-alto-adige-sudtirol',
    'umbria',
    'valle-daosta',
    'veneto',
  ];
  return (
    <div className="regions">
      {regionsArr.map((region, index) => (
        <div key={index}>
          <h2 className="region-title">{region}</h2>
        </div>
      ))}
    </div>
  );
};

export default index;
