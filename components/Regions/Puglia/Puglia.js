import React from 'react';
import Image from 'next/image';

const Puglia = () => {
  return (
    <div className="region-page">
      <div className="region-title-icon">
        <a class="anchor" id="puglia"></a>
        <h2 className="region-title">Puglia</h2>
        <Image
          src="/regions/puglia.png"
          alt="Puglia Wine Region of Italy"
          width={110}
          height={200}
          objectFit={'cover'}
        />
      </div>
      <div className="region-description">
        <p>
          The first documented use of the term Primitivo appears in
          Italian governmental publications of the 1870s.[4] The name
          derives from the terms primativus or primaticcio, which
          refer to the grape's tendency to ripen earlier than other
          varieties.[8] This name's appearance, 40 years after the
          first documented use of the term Zinfandel, was previously
          thought to suggest that Primitivo was introduced to Italy
          from across the Atlantic; however, this hypothesis has
          become unlikely since the discovery of the vine's Croatian
          origin.[9]
        </p>
        <p>
          Primitivo is now thought to have been introduced as a
          distinct clone into the Apulia region of Italy in the 18th
          century.[8][10] Don Francesco Filippo Indellicati, the
          priest of the church at Gioia del Colle near Bari, selected
          an early ("primo") ripening plant of the Zagarese variety
          and planted it in Liponti.[10] This clone ripened at the end
          of August and became widespread throughout northern
          Apulia.[10] Cuttings came to the other great Primitivo DOC
          (denominazione di origine controllata or "denomination of
          controlled origin") as part of the dowry of the Countess
          Sabini of Altamura when she married Don Tommaso
          Schiavoni-Tafuri of Manduria in the late 19th century.[10]
        </p>
      </div>
    </div>
  );
};

export default Puglia;
