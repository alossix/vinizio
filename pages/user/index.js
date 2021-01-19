import React, { useState, useEffect } from 'react';
import { signin, useSession } from 'next-auth/client';

const index = () => {
  const [session, loading] = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/user');
      const json = await res.json();
    };
    fetchData();
  }, [session]);

  if (!session && loading) {
    return (
      <main className="user-profile-page">
        <h2>Loading...</h2>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="user-profile-page">
        <h2>You aren't signed in. Please sign in first.</h2>
      </main>
    );
  }

  return (
    <main className="user-profile-page">
      <h2>User Profile Page</h2>
    </main>
  );
};

export default index;
