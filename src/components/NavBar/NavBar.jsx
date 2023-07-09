import React, { Component } from 'react'
import logo from '../image/icpc-logo.png'
import openMenu from '../image/icon-hamburger.svg'
import closeMenu from '../image/icon-close.svg'
import arrowIcon from '../image/icon-down.svg'

class NavBar extends Component {
    
    state = {click: false};

   handleClick = () =>{
        this.setState({click: !this.state.click})
    }
    render(){
  return (
    <section className='innerWidth NavBar'>
        <nav className='flexItem paddings'>
             <img src={logo} alt='logo' className='logo' />
             <div id='navLinks' className={this.state.click ? "#navLinks active" : "#navLinks"}>
                <ul>
                    <li><a href='index.jsx'>Home</a></li>
                    <li><a href='about.jsx'>About Us <img src={arrowIcon} alt='arrowIcon' /></a></li>
                    <li><a href='media.jsx'>Media <img src={arrowIcon} alt='arrowIcon' /></a></li>
                    <li><a href='contact.jsx'>Contact Us <img src={arrowIcon} alt='arrowIcon' /></a></li>
                </ul>
                <button className='button'>Login</button>
             </div>
             <div id='menuBar' onClick={this.handleClick}>
                <img src={this.state.click ? (closeMenu) : (openMenu) } alt='menuIcon' className='menuIcon'/>
             </div>
           </nav>
    </section>
  )
}
}

export default NavBar