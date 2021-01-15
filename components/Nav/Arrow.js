import React, { useState } from 'react';
import Link from 'next/link';

const Arrow = () => {
  const [arrowVisible, setArrowVisible] = useState(false);

  const clickHandler = () => {
    console.log(`inside clickhandler: ${arrowVisible}`);
    setArrowVisible(true);
  };

  return (
    <div>
      {!arrowVisible ? (
        <div className="arrow-holder">
          <Link href="/#main-description">
            <a>
              <img
                className="arrow-image"
                src="/downarrow.svg"
                alt="arrow"
                onClick={() => clickHandler()}
              ></img>
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Arrow;
