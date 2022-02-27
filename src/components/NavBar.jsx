import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
    <Link to="/" className='nav-button' data-testid="Home_b">
      Home
    </Link>
    <Link to="/about" className='nav-button' data-testid="About_b">
      About
    </Link>
    <Link to="/projects" className='nav-button' data-testid="Projects_b">
      My Projects
    </Link>
    <Link to="/skills" className='nav-button' data-testid="Skills_b">
      Skills
    </Link>
    <Link to="/contact" className='nav-button' data-testid="Contact_b">
      Contact
    </Link>
  </nav>
  )
}

export default NavBar