import React from 'react';
import Image from 'next/image';

const ValledAosta = () => {
  return (
    <div className="region-page">
      <div className="region-title-icon">
        <a class="anchor" id="valledaosta"></a>
        <h2 className="region-title">Valle d'Aosta</h2>
        <Image
          src="/regions/valledaosta.png"
          alt="Valle d'Aosta Wine Region of Italy"
          width={110}
          height={200}
          objectFit={'cover'}
        />
      </div>
      <div className="region-description">
        <p>
          The Valle d'Aosta DOC (or Vallée d'Aoste DOC, in French[1])
          is an Italian denominazione di origine controllata located
          in the Aosta Valley of northwest Italy. Surrounded by the
          Alps, the Valle d'Aosta is home to the highest elevated
          vineyards in all of Europe. The principal winemaking region
          of the Valle d'Aosta is found along the eastern banks of the
          Dora Baltea (fr., Doire baltée) river with the city of Aosta
          serving as the central winemaking location. The region is
          divided into three main vineyard areas; the upper valley,
          Valdigne, the central valley (locally Valle centrale in
          Italian, Vallée centrale in French) and the lower valley,
          (locally Bassa valle in Italian, Basse vallée in French). To
          the south is the winemaking region of Piedmont. The Valle
          d'Aosta is Italy's smallest winemaking region both in terms
          of size and production with only about 330,000 cases
          produced annually in the region and only 36,000 cases
          produced under the DOC label. Seventy five percent of the
          area's production is red wine made mostly from the Pinot
          noir, Gamay and Petit Rouge varieties. A white wine is made
          from the indigenous Prié blanc grape by the cooperative of
          Blanc de Morgex et de La Salle.[2]
        </p>
        <p>
          The wine-making region of the Valle d'Aosta is generally
          divided into three areas. In the northwest, the Valdigne
          area south of the commune of Courmayeur is home to the
          highest elevated vineyards in Europe at 1,200 metres (3,900
          ft) above sea level. The white grape Prié Blanc (also known
          as Blanc de Morgex) accounts for almost all of the vineyard
          area and is used to produce Blanc de Morgex et de la Salle
          in both a still and sparkling wine style. Roussin de Morgex,
          a rare teinturier variety endemic to only a small area
          around the town of Morgex, has been rescued from extinction
          to make an unusual pink sparkling wine.[3] Due to its high
          elevations, the area has never been affected by phylloxera
          louse, which has allowed the vineyards of this area to
          remain with ungrafted rootstock.
        </p>
      </div>
    </div>
  );
};

export default ValledAosta;
