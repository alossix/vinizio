import React, { useState } from 'react';
import Link from 'next/link';

const Arrow = () => {
  const [arrowVisible, setArrowVisible] = useState(false);

  const clickHandler = () => {
    document.querySelector('#description').scrollIntoView({
      behavior: 'smooth',
    });
    setArrowVisible(true);
  };

  return (
    <div>
      {!arrowVisible ? (
        <div className="arrow-holder">
          <Link href="/#description">
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
      <style jsx>
        {`
          .arrow-holder {
            display: flex;
            justify-content: center;
            margin: auto;
            width: 70px;
            height: 70px;
            padding-top: 2rem;
          }
          .arrow-holder:hover {
            cursor: pointer;
          }
          .arrow-image {
            height: 13vh;
            filter: invert(100);
            z-index: 1;
          }
          .arrow-image:hover {
            filter: invert(0.6);
          }
        `}
      </style>
    </div>
  );
};

export default Arrow;
