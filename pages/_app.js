import React from 'react';
import { Provider } from 'next-auth/client';
import Layout from '../components/Layout';
import '../styles.css';

const App = ({ Component, pageProps }) => {
  const { session } = pageProps;
  return (
    <Provider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
