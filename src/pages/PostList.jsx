import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router';

const PostList = () => {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
           .then ((res) => res.json())
           .then ((data) => setPosts(data))
    },[])
  return (
    <>
    <h2>All Posts</h2>
    <ul> 
        {posts.map((post) => (
            <li key={post.id}>
             <Link to= {`/posts/${post.id}`}>{post.title}</Link>  </li>
        ))}
    </ul> 
    </> 
  )
}

export default PostList