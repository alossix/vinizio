import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDataForm = (props) => {
  const [email, setEmail] = useState(props.email);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [country, setCountry] = useState('');
  // const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post('/api/db', { email });
        setFirstName(res.data.data[0].firstName);
        setLastName(res.data.data[0].lastName);
        setTelephone(res.data.data[0].telephone);
        setCountry(res.data.data[0].country);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userDataReq = async () => {
      try {
        const res = await axios.post('/api/db/update', {
          email,
          firstName,
          lastName,
          telephone,
          country,
        });
      } catch (err) {
        console.log(err);
      }
    };
    userDataReq();
  };

  return (
    <div className="user-data-form-container">
      <form className="user-data-form" onSubmit={formSubmitHandler}>
        <label>
          Email:
          <br />
          <input
            className="user-data-email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          First name:
          <br />
          <input
            className="user-data-first-name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </label>
        <label>
          Last name:
          <br />
          <input
            className="user-data-last-name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </label>
        <label>
          Telephone:
          <br />
          <input
            className="user-data-telephone"
            type="text"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          ></input>
        </label>
        <label>
          Country:
          <br />
          <input
            className="user-data-country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></input>
        </label>
        {/* <label>
          Shipping Address:
          <input
            className="user-data-address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </label> */}
        <button className="user-data-submit-button" type="submit">
          Submit
        </button>
      </form>
      <style jsx>{`
        .user-data-form {
          display: flex;
          flex-direction: column;
          width: 30vw;
          margin-left: 2rem;
        }
        .user-data-form label {
          padding: 0.5rem;
        }
        .user-data-submit-button {
          width: 150px;
          margin: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default UserDataForm;
