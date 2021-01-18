import React, { useState, useEffect } from 'react';
import { signin, useSession } from 'next-auth/client';
import Link from 'next/link';

const index = () => {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/user');
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== 'undefined' && loading) return null;

  if (!session) {
    return (
      <main>
        <h2>
          You aren't signed in. Please{' '}
          <button onClick={signin}>sign in</button> first.
        </h2>
      </main>
    );
  }
  return (
    <main className="user-profile-page">
      <h2>User Profile Page</h2>
      <p>{content}</p>
    </main>
  );
};

export default index;
