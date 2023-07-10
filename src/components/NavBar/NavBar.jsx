import React, { Component } from 'react'
import logo from '../image/icpc-logo.png'
import openMenu from '../image/icon-hamburger.svg'
import closeMenu from '../image/icon-close.svg'
import arrowIcon from '../image/icon-down.svg'
import { Link } from 'react-router-dom'

class NavBar extends Component {

  state = { click: false };

  handleClick = () => {
    this.setState({ click: !this.state.click })
  }
  render() {
    return (
      <section className='NavBar'>
        <nav className='innerWidth flexItem paddings'>
          <img src={logo} alt='logo' className='logo' />
          <div id='navLinks' className={this.state.click ? "#navLinks active" : "#navLinks"}>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='about'>About Us <img src={arrowIcon} alt='arrowIcon' /></Link>
                <div className='innerWidth submenu'>
                  <ul>
                    <div>
                      <li><Link to='/'>History</Link></li>
                      <li><Link to='/'>
                        The Establishment
                      </Link></li>
                      <li><Link to='/'>
                        Legislative Background
                      </Link></li>
                    </div>
                    <div>
                      <li><Link to='/'>
                        Act
                      </Link></li>
                      <li><Link to='/'>
                        Board Members
                      </Link></li>
                      <li><Link to='/'>
                        ICPC Structure
                      </Link></li>
                    </div>
                    <div>
                      <li><Link to='/'>
                        Our Role
                      </Link></li>
                      <li><Link to='/'>
                        SERVICOM Service
                      </Link></li>
                    </div>
                  </ul>
                </div>
              </li>
              <li><Link to='media'>Media <img src={arrowIcon} alt='arrowIcon' /></Link>
                <div className='innerWidth submenu'>
                  <ul>
                    <div>
                      <li><Link to='/'>News</Link></li>
                      <li><Link to='/'>New Release</Link></li>
                      <li><Link to='/'>System Study & Reviews of MDA's</Link></li>
                    </div>
                    <div>
                      <li><Link to='/'>Features & Articles</Link></li>
                      <li><Link to='/'>Wanted Persons</Link></li>
                      <li><Link to='/'>Petiton Guidlines</Link></li>

                    </div>
                    <div>
                      <li><Link to='/'>Submit Petition</Link></li>
                      <li><Link to='/'>Photo Gallery</Link></li>
                      <li><Link to='/'>Downloads</Link></li>
                    </div>
                  </ul>
                </div></li>
              <li><Link to='/'>Projects <img src={arrowIcon} alt='arrowIcon' /></Link>
                <div className='innerWidth submenu'>
                  <ul>
                    <div>
                      <li><Link to='/'>Constituency/Executive Projects</Link></li>
                      <li><Link to='/'>Illicit financial flows (IFFS)</Link></li>
                      <li><Link to='/'>Anti-Corruption & Transpiracy Unit (ACTU)</Link></li>
                    </div>
                    <div>
                      <li><Link to='/'>National Ethics and Integrity Policy (NEIP)</Link></li>
                      <li><Link to='/'>Ethics & Integrity Compliance Score Card (EICS)</Link></li>
                      <li><Link to='/'>Proceeds of Crime, Recovery & Management</Link></li>
                    </div>
                    <div>
                      <li><Link to='/'>Sexual Harassment Unit</Link></li>
                      <li><Link to='/'>International Coorperation</Link></li>
                    </div>
                  </ul>
                </div></li>

              <li><Link to='/'>Contact Us <img src={arrowIcon} alt='arrowIcon' /></Link>
                <div className='innerWidth submenu'>
                  <ul>
                    <div>
                      <li><Link to=''>Got a question? A query? Want to pass some information across to the ICPC?</Link></li>
                      <li><Link to=''>Talk to Us!</Link></li>
                      <li><Link to=''>Address</Link></li>
                      <li><Link to=''>Plot 802 Constitution Avenue,Central District,PMB 535, Garki, Abuja, Nigeria.</Link></li>
                      <li><Link to=''>Other Office Locations</Link></li>
                    </div>
                    <div>
                      <li><Link to=''>Phone</Link></li>
                      <li><Link to=''>MTN: 0803-123-0280, 0803-123-0281, 0803-123-0282</Link></li>
                      <li><Link to=''>GLO: 0705-699-0190, 0705-699-0191</Link></li>
                      <li><Link to=''>Opening Hours</Link></li>
                      <li><Link to=''>Monday – Friday: 9am – 5pm</Link></li>
                      <li><Link to=''>View State Offices Locations</Link></li>
                    </div>
                  </ul>
                </div>
              </li>
            </ul>
            <button className='button'>Login</button>
          </div >
          <div id='menuBar' onClick={this.handleClick}>
            <img src={this.state.click ? (closeMenu) : (openMenu)} alt='menuIcon' className='menuIcon' />
          </div>
        </nav >
      </section >
    )
  }
}

export default NavBar