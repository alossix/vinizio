import React from 'react';
import Image from 'next/image';

const Liguria = () => {
  return (
    <div className="region-page">
      <div className="region-title-icon">
        <a class="anchor" id="liguria"></a>
        <h2 className="region-title">Liguria</h2>
        <Image
          src="/regions/liguria.png"
          alt="Liguria Wine Region of Italy"
          width={110}
          height={200}
          objectFit={'cover'}
        />
      </div>
      <div className="region-description">
        <p>
          Liguria is an Italian wine region located in the northwest
          region of Italy along the Italian Riviera. It is bordered by
          the Piedmont wine region to the north, the Alps and French
          wine region of Provence to the west, the Apennine Mountains
          and the Emilia-Romagna wine region to the east with a small
          border shared with Tuscany in the south-east along the
          Ligurian sea.[1]
        </p>
        <p>
          Liguria has several Denominazione di origine controllata
          regions with the most notable being the Cinque Terre DOC
          from cliff side vineyards situated among the five fishing
          villages of Cinque Terre in the province of La Spezia. The
          DOC produces light white wines made from grape varieties
          such as Bosco, Albarola and Vermentino. In the west is the
          red wine-producing region of Dolceacqua, producing wine from
          the indigenous Rossese grape.[2]
        </p>
      </div>
    </div>
  );
};

export default Liguria;
