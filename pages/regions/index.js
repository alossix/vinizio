import React from 'react';
import {
  regionComponents,
  regionsArr,
} from '../../components/Regions/RegionsList';

const index = () => {
  return (
    <div className="regions">
      {regionsArr.map((region, index) => (
        <div key={index}>{regionComponents[region]}</div>
      ))}
      <style jsx>{`
        .regions {
          width: 90vw;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default index;
