import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <ul>
        <Link href="/about">About the Service</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/signup">Sign Up</Link>
      </ul>
    </footer>
  );
};

export default Footer;
