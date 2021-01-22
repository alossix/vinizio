import React from 'react';
import { useSession } from 'next-auth/client';

const index = () => {
  const [session, loading] = useSession();

  return (
    <main className="user-profile-page">
      {loading && <h2>Loading...</h2>}
      {session && (
        <div>
          <h2>User Profile Page</h2>
          <p>User Email: {session.user.email}</p>
        </div>
      )}
      {!session && (
        <h2>You aren't signed in. Please sign in first.</h2>
      )}
    </main>
  );
};

export default index;
