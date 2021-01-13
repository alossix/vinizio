import React from 'react';
import Image from 'next/image';

const Tuscany = () => {
  return (
    <div id="tuscany" className="region-page">
      <div className="region-title-icon">
        <h2 className="region-title">Tuscany</h2>
        <Image
          src="/regions/tuscany.png"
          alt="Tuscany Wine Region of Italy"
          width={110}
          height={200}
          objectFit={'cover'}
        />
      </div>
      <div className="region-description">
        <p>
          Tuscan wine (Italian Toscana) is Italian wine from the
          Tuscany region. Located in central Italy along the
          Tyrrhenian coast, Tuscany is home to some of the world's
          most notable wine regions. Chianti, Brunello di Montalcino
          and Vino Nobile di Montepulciano are primarily made with
          Sangiovese grape whereas the Vernaccia grape is the basis of
          the white Vernaccia di San Gimignano. Tuscany is also known
          for the dessert wine Vin Santo, made from a variety of the
          region's grapes. Tuscany has forty-one Denominazioni di
          origine controllata (DOC) and eleven Denominazioni di
          Origine Controllata e Garantita (DOCG). In the 1970s a new
          class of wines known in the trade as "Super Tuscans"
          emerged. These wines were made outside DOC/DOCG regulations
          but were considered of high quality and commanded high
          prices. Many of these wines became cult wines. In the
          reformation of the Italian classification system many of the
          original Super Tuscans now qualify as DOC or DOCG wines
          (such as the new Bolgheri label) but some producers still
          prefer the declassified rankings or to use the Indicazione
          Geografica Tipica (IGT) classification of Toscana. Tuscany
          has six sub-categories of IGT wines today.
        </p>
      </div>
    </div>
  );
};

export default Tuscany;
