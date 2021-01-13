import React from 'react';
import Image from 'next/image';

const Marche = () => {
  return (
    <div id="marche" className="region-page">
      <div className="region-title-icon">
        <h2 className="region-title">Marche</h2>
        <Image
          src="/regions/marche.png"
          alt="Marche Wine Region of Italy"
          width={110}
          height={200}
          objectFit={'cover'}
        />
      </div>
      <div className="region-description">
        <p>
          Verdicchio (/vɛərˈdiːkioʊ/, also US: /vɜːrˈ-, -kjoʊ,
          vɛərˈdɪkioʊ/,[1][2][3] Italian: [verˈdikkjo]) is a white
          Italian wine grape variety grown primarily in the Marche
          region of central Italy.[4] The name Verdicchio derives from
          verde (or "green") and refers to the slight green/yellow hue
          that wines made from the grape can have.[5]
        </p>
        <p>
          Verdicchio is the principal grape behind two Denominazione
          di Origine Controllata (DOC) wines produced in the provinces
          of Macerata and Ancona, Verdicchio di Matelica and
          Verdicchio dei Castelli di Jesi. In addition to producing
          still wines, Verdicchio grapes are also used to make
          sparkling wine and straw wine.[6]
        </p>
      </div>
    </div>
  );
};

export default Marche;
