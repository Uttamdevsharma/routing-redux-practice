import { Link } from "react-router";

import React from 'react'

const Nav = () => {
  return (
   <ul>
    <li>
        <Link to='/home' >Home</Link>      
    </li>
    <li>
        <Link to= '/about' >About</Link>
    </li>

    <li>
        <Link to ='/posts'>All Posts</Link>
    </li>
   </ul>
  )
}

export default Nav