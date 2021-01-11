import React from 'react';
import Layout from '../components/Layout';
import '../styles.css';

const App = ({ Component }) => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default App;
