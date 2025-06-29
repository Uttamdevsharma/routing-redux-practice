import React from 'react'
import Nav from '../components/nav'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
    <div id="sidebar">
        <h1>Our App</h1>
        <Nav />
    </div>

    <div id='detail'>
        <Outlet/> 
    </div>
    
    
    </>
    
  )
}

export default RootLayout