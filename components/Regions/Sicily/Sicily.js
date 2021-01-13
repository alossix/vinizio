import React from 'react';

const Sicily = () => {
  return (
    <div id="sicily" className="region-page">
      <div className="region-title-icon">
        <h2 className="region-title">Sicily</h2>
        <img
          className="region-icon"
          src="/regions/sicily.png"
          alt="Sicily Wines"
        ></img>
      </div>
      <div className="region-description">
        <p>
          Nero d'Avola (Italian pronunciation: [ˈneːro ˈdaːvola];
          'Black of Avola' in Italian) is "the most important red wine
          grape in Sicily"[1] and is one of Italy's most important
          indigenous varieties. It is named after Avola in the far
          south of Sicily, and its wines are compared to New World
          Shirazes, with sweet tannins and plum or peppery flavours.
          It also contributes to Marsala Rubino blends.[2][3][4]
        </p>
        <p>
          "The Black Grape of Avola" appears to have been selected by
          growers near Avola (a small town in south east Sicily)
          several hundred years ago. Initially, it was confined to the
          southern tip of the island but more recently has spread
          throughout the island.
        </p>
      </div>
    </div>
  );
};

export default Sicily;
