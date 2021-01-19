import { signin, signout, useSession } from 'next-auth/client';
import Link from 'next/link';
import Head from 'next/head';

const Nav = () => {
  const [session, loading] = useSession();

  return (
    <div className="nav-area">
      <Head>
        <title>Vinizio: Start Your Italian Wine Journey</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Patua+One&family=Raleway:wght@400;800&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Vinizio is a hand-curated Italian wine subscription box delivered to your doorstep each month. Delivery throughout the EU/EEA."
        ></meta>
      </Head>
      <nav className="nav-top">
        <ul>
          <div className="logo-group">
            <Link href="/">
              <a>
                <img src="/viniziologo.svg" alt="Vinizio Logo"></img>
              </a>
            </Link>
            <Link href="/">Vinizio</Link>
          </div>
          <Link href="/how-it-works">How It Works & Pricing</Link>
          <Link href="/gifts">Gift Boxes</Link>
          {!session && (
            <div className="signup-login">
              <button
                onClick={signin}
                className="account-login-button"
              >
                Log In
              </button>
              <button
                onClick={signin}
                className="signup-logout-button"
              >
                Sign Up
              </button>
            </div>
          )}
          {session && (
            <div className="signup-login">
              <Link href="/user">
                <button className="account-login-button">
                  My Account
                </button>
              </Link>
              <button
                onClick={signout}
                className="signup-logout-button"
              >
                Log Out
              </button>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
