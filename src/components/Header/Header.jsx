import React from 'react'
import './Header.css'

import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
const Header = () => {
  return (
    <section className='h-wrapper'>
        <div className='innerWidth h-container'>
           <NavBar />
           <Hero />
        </div>
    </section>
  )
}

export default Header