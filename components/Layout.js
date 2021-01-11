import React from 'react';
import Nav from './Nav/Nav';
import Footer from './Nav/Footer';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
