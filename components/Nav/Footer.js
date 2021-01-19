import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <ul>
        <Link href="/about">
          <a>About Vinizio</a>
        </Link>
        <Link href="/regions">
          <a>Wine Regions of Italy</a>
        </Link>
        <Link href="/delivery-history">
          <a>Sample of Past Deliveries</a>
        </Link>
        <Link href="/reorder">
          <a>Reorder Bottles from Past Deliveries</a>
        </Link>
        <Link href="/contact">
          <a>Customer Service / Contact</a>
        </Link>
      </ul>
      <style jsx>{`
        footer {
          grid-area: footer;
          background-color: #444444;
          position: static;
          bottom: 0;
          width: 100vw;
        }
        footer ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
          padding: 0 1rem;
        }
        footer a {
          font-size: 0.8rem;
          color: white;
          text-transform: uppercase;
        }
        footer a:hover {
          color: #dddddd;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
