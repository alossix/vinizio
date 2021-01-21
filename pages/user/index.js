import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import UserProfileLoading from '../../components/User/UserProfileLoading';
import UserNotSignedIn from '../../components/User/UserNotSignedIn';
import axios from 'axios';

const index = () => {
  const [session, loading] = useSession();
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await axios.get('/api/user');
        setEmail(res.data.user.email);
        try {
          const res = await axios.post('/api/db', { email });
          setUserData(res.data.data[0]);
        } catch (err) {
          console.log(`Error: ${err}`);
        }
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    };
    fetchSession();
  }, [session]);

  if (!session && loading) {
    return <UserProfileLoading />;
  } else if (!session) {
    return <UserNotSignedIn />;
  } else {
    if (userData) {
      return (
        <main className="user-profile-page">
          <h2>User Profile Page</h2>
          <p>User ID: {userData._id}</p>
          <p>User Email: {email}</p>
        </main>
      );
    } else {
      return (
        <main className="user-profile-page">
          <h2>User Profile Page</h2>
          <p>Loading user profile</p>
        </main>
      );
    }
  }
};

export default index;
