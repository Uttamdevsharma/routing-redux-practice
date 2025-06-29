import React from 'react'
import { useParams } from 'react-router';

const PostDetails = () => {

    const janiNah = useParams();
    console.log(janiNah , "janiNah");
  return (
    <>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed nulla rerum ut commodi blanditiis id molestiae eum architecto omnis quas.</div>
    </>
  )
}

export default PostDetails;