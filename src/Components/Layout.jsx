import React from 'react'
import Home from './Home/Home'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
    <Header active={"home"}/>
    <Home/>
    <Footer/>
    </>
  )
}

export default Layout