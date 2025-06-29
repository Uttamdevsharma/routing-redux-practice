import React from 'react'
import Nav from '../components/nav'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>

    <div>
        <h1>Our App</h1>
        <Nav />
    </div>

    <div id='detail'>

    </div>
    <Outlet/>
    
    </>
    
  )
}

export default RootLayout