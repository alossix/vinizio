import { signin, useSession } from 'next-auth/client';
import React from 'react';

const Signup = () => {
  const [session, loading] = useSession();
  return (
    <section className="signup-area">
      <h2 className="signup-area-text">
        Simple, fast passwordless signup
      </h2>
      {session ? null : (
        <button onClick={signin} className="signup-area-button">
          Sign Up Now!
        </button>
      )}
      <section className="reorder-section">
        <h3>
          Like what you've tasted? Reorder your favorite bottles,
          while supplies last. Shipping throughout the E.U.
        </h3>
      </section>
      <style jsx>
        {`
          .signup-area {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .signup-area h2 {
            margin: 4rem 0 0 0;
            max-width: 60vw;
          }
          .signup-area button {
            padding: 1rem 4rem;
            margin: 3rem 0;
            border-radius: 15px;
            background-color: #6d0000;
            color: white;
            border: 3px solid #6d0000;
            font-size: 1.5rem;
            text-transform: uppercase;
          }
          .signup-area button:hover {
            cursor: pointer;
            background-color: white;
            color: #6d0000;
          }
        `}
      </style>
    </section>
  );
};

export default Signup;
