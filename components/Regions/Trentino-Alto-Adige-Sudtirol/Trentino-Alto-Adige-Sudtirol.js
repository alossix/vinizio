import React from 'react';
import Image from 'next/image';

const TrentinoAltoAdigeSudtirol = () => {
  return (
    <div id="trentinoaltoadigesudtirol" className="region-page">
      <div className="region-title-icon">
        <h2 className="region-title">
          Trentino-
          <br />
          Alto Adige/
          <br />
          Südtirol
        </h2>
        <Image
          src="/regions/trentinoaltoadigesudtirol.png"
          alt="Trentino-Alto Adige/Südtirol Wine Region of Italy"
          width={110}
          height={200}
          objectFit={'cover'}
        />
      </div>
      <div className="region-description">
        <p>
          One main distinction between Trentino and South Tyrol wine
          production is the fact that in the northern area (South
          Tyrol) the wines are produced mostly by small family-owned
          and managed wineries that sell their high quality wine
          mainly locally with limited exports to Germany and Austria.
          Trentino on the other hand counts on a large number of
          growers who joined into large cooperatives, such as Cavit
          and Mezzacorona, which produce wines that have consistent
          taste and characteristics year after year. These wines are
          popular, both in Italy and abroad, among wine drinkers who
          look for reasonably good and affordable wines for daily
          enjoyment.[1]
        </p>
        <p>
          Three grapes are native to this region: one is the white
          Nosiola and the other two are the red Teroldego Rotaliano
          and the Marzemino. Trentino D.O.C. Nosiola is made from the
          eponymous vine grown on the hillsides of Valle dei Laghi and
          Val di Cembra. Amongst other things, its partially dried
          grapes are used to make the Trentino D.O.C. Vino Santo from
          Trentino. In addition to the native grapes, well known
          international grape varieties such as Chardonnay, Cabernet,
          Merlot, Moscato, Pinot Nero and Pinot Grigio, as well as
          Müller-Thurgau, are grown throughout the region.[2]
        </p>
      </div>
    </div>
  );
};

export default TrentinoAltoAdigeSudtirol;
