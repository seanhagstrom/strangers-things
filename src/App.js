import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, Posts, AuthForm } from './components';
import { getMe, getPosts } from './api';

function App() {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (localStorage.token) {
      setToken(localStorage.token);
      setIsLoggedIn(!isLoggedIn);
    }
    const fetchPosts = async () => {
      const { data } = await getPosts();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (token) {
      const fetchMe = async () => {
        const { data } = await getMe(token);
        setUser({ username: data.username });
      };
      fetchMe();
    }
  }, [isLoggedIn]);

  // console.log(user);
  // console.log(token);
  // console.log(isLoggedIn);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<Home posts={posts} />} />
        <Route path='/posts' element={<Posts posts={posts} user={user} />} />
        <Route
          path='/auth'
          element={
            <AuthForm
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
