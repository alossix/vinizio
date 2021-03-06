import React from 'react';
import Image from 'next/image';

const Lombardy = () => {
  return (
    <div className="region-page">
      <div className="region-title-icon">
        <a class="anchor" id="lombardy"></a>
        <h2 className="region-title">Lombardy</h2>
        <Image
          src="/regions/Lombardy.png"
          alt="Lombardy Wine Region of Italy"
          width={110}
          height={200}
          objectFit={'cover'}
        />
      </div>
      <div className="region-description">
        <p>
          Lombardia (Lombardy) wine is the Italian wine produced in
          the Lombardy region of north central Italy. The region is
          known particularly for its sparkling wines made in the
          Franciacorta and Oltrepò Pavese areas. Lombardy also
          produces still red, white and rosé wines made from a variety
          of local and international grapes including Nebbiolo wines
          in the Valtellina region, Trebbiano di Lugana white wines
          produced with the Chiaretto style rosé along the shores of
          Lake Garda. The wine region currently has 15 Denominazione
          di origine controllata (DOC), 3 Denominazione di Origine
          Controllata e Garantita (DOCG) and 13 Indicazione Geografica
          Tipica (IGT) designations. The main cities of the region are
          Milan, Bergamo and Brescia.[1] The region annually produces
          around 1.3 million hectolitres of wine,[2] more than the
          regions of Friuli-Venezia Giulia, Marche, Trentino-Alto
          Adige/Südtirol and Umbria.[3]
        </p>
      </div>
    </div>
  );
};

export default Lombardy;
