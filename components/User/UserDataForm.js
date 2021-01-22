import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDataForm = (props) => {
  const [email, setEmail] = useState(props.email);
  const [address, setAddress] = useState('');
  //   const [_id, setId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post('/api/db', { email });
      //   console.log(res.data.data[0]._id);
      //   setId(res.data.data[0]._id);
    };
    fetchData();
  }, []);

  return (
    <div className="user-data-form-container">
      <form className="user-data-form">
        <label>
          Email:
          <input
            className="user-data-email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          Shipping Address:
          <input
            className="user-data-address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </label>
        {/* <label>
          User ID:
          <input
            className="user-data-id"
            type="text"
            value={_id}
            onChange={(e) => setId(e.target.value)}
          ></input>
        </label> */}
      </form>
    </div>
  );
};

export default UserDataForm;
