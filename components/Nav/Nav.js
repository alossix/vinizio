import { signin, signout, useSession } from 'next-auth/client';
import Link from 'next/link';
import Head from 'next/head';

const Nav = () => {
  const [session, loading] = useSession();

  return (
    <div>
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
              <button onClick={signin}>Log In</button>
              <button className="signup-button">Sign Up</button>
            </div>
          )}
          {session && (
            <div className="signup-login">
              <button onClick={signout}>Log Out</button>
            </div>
          )}
        </ul>

        {/* {!session && (
            <>
              <span className={styles.notSignedIn}>
                Not signed in
              </span>
              <a
                href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault();
                  signin();
                }}
              >
                <button className={styles.signinButton}>
                  Sign in
                </button>
              </a>
            </>
          )}
          {session && (
            <>
              <span
                style={{
                  backgroundImage: `url(${session.user.image})`,
                }}
                className={styles.avatar}
              />
              <span className={styles.signedIn}>
                Signed in as <strong>{session.user.email}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault();
                  signout();
                }}
              >
                <button className={styles.signoutButton}>
                  Sign out
                </button>
              </a>
            </>
          )} */}
        {/* </p> */}
      </nav>
    </div>
  );
};

export default Nav;
