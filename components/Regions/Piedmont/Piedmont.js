import React from 'react';
import Image from 'next/image';

const Piedmont = () => {
  return (
    <div id="piedmont" className="region-page">
      <div className="region-title-icon">
        <h2 className="region-title">Piedmont</h2>
        <Image
          src="/regions/piedmont.png"
          alt="Piedmont Wine Region of Italy"
          width={110}
          height={200}
          objectFit={'cover'}
        />
      </div>
      <div className="region-description">
        <p>
          Piemonte wine is the range of Italian wines made in the
          region of Piedmont in the northwestern corner of Italy. The
          best-known wines from the region include Barolo and
          Barbaresco. They are made from the Nebbiolo grape. These
          wines are ideal for storage and a well-aged Barolo for
          instance may leave a feeling of drinking velvet because the
          tannins are polished and integrated more and more into the
          wine. As the wine matures the colour becomes more brownish
          and rust-red.
        </p>
        <p>
          Other popular grapes used for red wine production are
          Barbera and Dolcetto. Wine made with the Barbera grape is
          often fruity, with high acidity. It can be delicate with
          less tannin than wine made from the Nebbiolo grape. Dolcetto
          on the other side, is not, as the name indicates, sweet.
          Dolcetto means "little sweet one". (dolce is Italian for
          sweet). The grape gives fresh and dry red wines with some
          tannin. The wines made with the Dolcetto grape are typically
          consumed relatively young.
        </p>
        <p>
          The sparkling wine Asti spumante is made from the Moscato
          grape. The majority of the area's winemaking take places in
          the provinces of Cuneo, Asti and Alessandria. The Brachetto
          is another variety used for making sweet and sparkling red
          wines.
        </p>
        <p>
          While Turin is the capital of the Piedmont, Alba and Asti
          are at the heart of the region's wine industry. The
          winemaking industry of the Piedmont played a significant
          role in the early stages of the Risorgimento with some of
          the era's most prominent figures – such as Camillo Benso,
          conte di Cavour and Giuseppe Garibaldi – owning vineyards in
          Piedmont region and making significant contributions to the
          development of Piedmontese wines. The excessively high
          tariffs imposed by the Austrian Empire on the export of
          Piedmontese wines to Austrian controlled areas of northern
          Italy was one of the underlying sparks to the revolutions of
          1848–1849.
        </p>
      </div>
    </div>
  );
};

export default Piedmont;
