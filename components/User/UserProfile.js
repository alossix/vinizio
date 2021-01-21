import React, { useEffect } from 'react';

const UserProfile = (props) => {
  const { _id, email } = props.userData;

  return (
    <main className="user-profile-page">
      <h2>User Profile Page</h2>
      <p>User ID: {_id}</p>
      <p>User Email: {email}</p>
    </main>
  );
};

export default UserProfile;
