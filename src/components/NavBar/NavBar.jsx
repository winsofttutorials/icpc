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
    <section className='NavBar'>
        <nav className='innerWidth flexItem paddings'>
             <img src={logo} alt='logo' className='logo' />
             <div id='navLinks' className={this.state.click ? "#navLinks active" : "#navLinks"}>
                <ul>
                    <li><a href='index.jsx'>Home</a></li>
                    <li><a href='about.jsx'>About Us <img src={arrowIcon} alt='arrowIcon' /></a>
                      <div className='innerWidth submenu'>
                        <ul>
                          <div>
                            <li><a href='#'>History</a></li>
                          <li><a href='#'>The Establishment</a></li>
                          <li><a href='#'>Legislative Background</a></li>
                          </div>
                          <div>
                            <li><a href='#'>Act</a></li>
                          <li><a href='#'>Board Members</a></li>
                          <li><a href='#'>ICPC Structure</a></li>
                          </div>
                          <div>
                            <li><a href='#'>Our Role</a></li>
                          <li><a href='#'>SERVICOM Service</a></li>
                          </div>
                        </ul>
                      </div>
                    </li>
                    <li><a href='media.jsx'>Media <img src={arrowIcon} alt='arrowIcon' /></a>
                    <div className='innerWidth submenu'>
                        <ul>
                          <div>
                            <li><a href='#'>News</a></li>
                          <li><a href='#'>New Release</a></li>
                          <li><a href='#'>System Study & Reviews of MDA's</a></li>
                          </div>
                          <div>
                            <li><a href='#'>Features & Articles</a></li>
                          <li><a href='#'>Wanted Persons</a></li>
                          <li><a href='#'>Petiton Guidlines</a></li>
                          
                          </div>
                          <div>
                          <li><a href='#'>Submit Petition</a></li>
                          <li><a href='#'>Photo Gallery</a></li>
                            <li><a href='#'>Downloads</a></li>
                          </div>
                        </ul>
                      </div></li>
                    <li><a href='media.jsx'>Projects <img src={arrowIcon} alt='arrowIcon' /></a>
                    <div className='innerWidth submenu'>
                        <ul>
                          <div>
                            <li><a href='#'>Constituency/Executive Projects</a></li>
                          <li><a href='#'>Illicit financial flows (IFFS)</a></li>
                          <li><a href='#'>Anti-Corruption & Transpiracy Unit (ACTU)</a></li>
                          </div>
                          <div>
                            <li><a href='#'>National Ethics and Integrity Policy (NEIP)</a></li>
                          <li><a href='#'>Ethics & Integrity Compliance Score Card (EICS)</a></li>
                          <li><a href='#'>Proceeds of Crime, Recovery & Management</a></li>
                          </div>
                          <div>
                            <li><a href='#'>Sexual Harassment Unit</a></li>
                          <li><a href='#'>International Coorperation</a></li>
                          </div>
                        </ul>
                      </div></li>
                    
                    <li><a href='contact.jsx'>Contact Us <img src={arrowIcon} alt='arrowIcon' /></a>
                      <div className='innerWidth submenu'>
                        <ul>
                          <div>
                            <li><a href='#'>Got a question? A query? Want to pass some information across to the ICPC?</a></li>
                          <li><a href='#'>Talk to Us!</a></li>
                            <li><a href='#'>Address</a></li>
                          <li><a href='#'>Plot 802 Constitution Avenue,
                                Central District,PMB 535, Garki, Abuja, Nigeria.</a></li>
                          <li><a href='#'>Other Office Locations</a></li>
                          </div>
                          <div>
                            <li><a href='#'>Phone</a></li>
                          <li><a href='#'>MTN: 0803-123-0280, 0803-123-0281, 0803-123-0282</a></li>
                          <li><a href='#'>GLO: 0705-699-0190, 0705-699-0191</a></li>
                           <li><a href='#'>Opening Hours</a></li>
                          <li><a href='#'>Monday – Friday: 9am – 5pm</a></li>
                          <li><a href='#'>View State Offices Locations</a></li>
                          </div>
                        </ul>
                      </div>
                    </li>
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