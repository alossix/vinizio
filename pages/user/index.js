import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import UserProfileLoading from '../../components/User/UserProfileLoading';
import UserNotSignedIn from '../../components/User/UserNotSignedIn';
import UserProfile from '../../components/User/UserProfile';
import axios from 'axios';

const index = () => {
  const [session, loading] = useSession();
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await axios.get('/api/user');
        setEmail(res.data.user);
        try {
          const res = await axios.post('/api/db', email);
          setUserData(res.data.data);
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
  }

  if (!session) {
    return <UserNotSignedIn />;
  }

  return <UserProfile userData={userData} />;
};

export default index;
