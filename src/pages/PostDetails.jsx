import React from 'react'
import { useParams } from 'react-router';
import { useState,useEffect } from 'react';

const PostDetails = () => {
    const { id } = useParams();
    
    //const obj = useParams();
    //<h2>PostDetails page of post id - {obj.id} </h2>
    
    const [post,setPost] = useState(null);

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
           .then((res) => res.json())
           .then((data)=> setPost(data));

    },[]);
  return (
    <>

    <h2>PostDetails page of post id - {id} </h2>
    <h2>Titile - {post?.title} </h2>
    <p>description - {post?.body} </p>  
    </>
  );
}

export default PostDetails;