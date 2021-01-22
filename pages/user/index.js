import React from 'react';
import { useSession } from 'next-auth/client';
import UserDataForm from '../../components/User/UserDataForm';

const index = () => {
  const [session, loading] = useSession();

  return (
    <main className="user-profile-page">
      {!session && loading && <h2>Loading...</h2>}
      {!session && !loading && (
        <h2>You aren't signed in. Please sign in first.</h2>
      )}
      {session && (
        <div>
          <h2>User Profile Page</h2>
          <UserDataForm email={session.user.email} />
        </div>
      )}
      <style jsx>{`
        .user-profile-page div {
          height: 100%;
        }
      `}</style>
    </main>
  );
};

export default index;
