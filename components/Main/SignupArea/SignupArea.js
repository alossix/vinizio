import { signin, useSession } from 'next-auth/client';
import React from 'react';

const Signup = () => {
  const [session, loading] = useSession();
  return (
    <section className="signup-area">
      <h2>
        Easily set your choice between reds, whites, or a mix of both.
        Unique gift subscription for the wine lover. Shipping
        throughout the E.U.
      </h2>
      {session ? null : (
        <button onClick={signin} className="signup-area-button">
          Sign Up Now!
        </button>
      )}
      <section className="reorder-section">
        <h3>
          Like what you've tasted? Reorder your favorite bottles,
          while supplies last.
        </h3>
      </section>
    </section>
  );
};

export default Signup;
