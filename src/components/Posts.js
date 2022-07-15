import React from 'react';

function Posts({ posts, user }) {
  return (
    <>
      <h1>Our posts will live here!</h1>
      {posts.length &&
        posts.map((post) => {
          return <h1 key={post._id}>{post.title}</h1>;
        })}
    </>
  );
}

export default Posts;
