import React, { useState } from 'react';
import { login } from '../api';

function AuthForm({ token, setToken, setUser, setIsLoggedIn }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const user = {
      username,
      password,
    };
    const { data } = await login(user);
    localStorage.token = data.token;
    setIsLoggedIn(true);
    setToken(localStorage.token);
  }

  function logOut() {
    delete localStorage.token;
    setIsLoggedIn(false);
    setUser({});
  }

  console.log(username);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className='flex'>
          Username:
          <input
            type='text'
            onChange={(event) => setUserName(event.target.value)}
          ></input>
        </label>
        <label>
          Password:
          <input
            type='text'
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </label>
        <button type='submit'>Login</button>
      </form>

      <button onClick={logOut}>LogOut</button>
    </>
  );
}

export default AuthForm;
