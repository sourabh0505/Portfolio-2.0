import React from 'react'
import './navbar.css' 
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className='navbarDiv' id='/'>
        <div className="logo">
            <h2>Sourabh Bishnoi</h2>
        </div>

        <ul>
            <li><Link to="/" spy={true} smooth={true} offset={-4000} duration={2000}>Home</Link></li>
            <li><Link to="/aboutme" spy={true} smooth={true} offset={-100} duration={2000}><a href="/aboutme">About</a></Link></li>
            <li><Link to="/projects" spy={true} smooth={true} offset={-100} duration={2000}>Projects</Link></li>
            <li><Link to="/contact" spy={true} smooth={true} offset={-100} duration={2000}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar