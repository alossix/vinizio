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
            <Link href="/">
              <a>Vinizio</a>
            </Link>
          </div>
          <Link href="/how-it-works">
            <a>How It Works & Pricing</a>
          </Link>
          <Link href="/gifts">
            <a>Gift Boxes</a>
          </Link>
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
                  <a>My Account</a>
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
      <style jsx>
        {`
          .nav-top {
            grid-area: nav;
            height: 4rem;
            width: 100vw;
            border-bottom: 1px solid rgb(222, 222, 222);
            background-color: #fff;
            position: fixed;
            top: 0;
          }
          .nav-top ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0rem 1.5rem;
            flex-wrap: wrap;
            background-color: #fff;
          }
          .logo-group {
            font-family: 'Patua One', cursive;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .logo-group img {
            height: 2.2rem;
            margin: 0.8rem 0.2rem 0rem 0.2rem;
          }
          .nav-top a {
            color: #444444;
            font-size: 0.8rem;
            text-transform: uppercase;
          }
          .nav-top a:hover {
            color: #6d0000;
          }
          .logo-group a {
            font-size: 2.8rem;
            font-weight: 400;
            text-transform: capitalize;
            color: black;
            padding: 0;
          }
          .logo-group a:hover {
            text-decoration: none;
            color: black;
          }
          .signup-login {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .account-login-button {
            padding: 0.5rem 2rem;
            border-radius: 15px;
            border: 3px solid #6d0000;
            font-size: 0.8rem;
            text-transform: uppercase;
            background-color: white;
            color: #6d0000;
          }
          .account-login-button:hover {
            cursor: pointer;
          }
          .signup-logout-button {
            padding: 0.5rem 2rem;
            margin: 0rem 1rem 0rem 2rem;
            background-color: #6d0000;
            border-radius: 15px;
            color: white;
            border: 3px solid #6d0000;
            font-size: 0.8rem;
            text-transform: uppercase;
          }
          .signup-logout-button:hover {
            cursor: pointer;
            background-color: white;
            color: #6d0000;
          }
        `}
      </style>
    </div>
  );
};

export default Nav;
