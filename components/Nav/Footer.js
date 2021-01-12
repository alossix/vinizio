import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <ul>
        <Link href="/about">About Vinizio</Link>
        <Link href="/regions">Wine Regions of Italy</Link>
        <Link href="/vintners">Vintners</Link>
        <Link href="/contact">Customer Service / Contact</Link>
      </ul>
    </footer>
  );
};

export default Footer;
