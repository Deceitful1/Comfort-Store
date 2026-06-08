import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
  <>
<div className="app-layout">
    <Navbar/>

<main className='main-content'>
    <Outlet/>
</main>
<footer>
  <Footer/>
</footer>
</div>
  </>
  )
}

export default Layout