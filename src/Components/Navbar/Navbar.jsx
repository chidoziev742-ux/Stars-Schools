import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />

      {/* Hamburger Icon */}
      <div 
        className={`hamburger ${menuOpen ? 'active' : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "open" : ""}>
        <li><Link to='hero' smooth={true} offset={0} duration={-250} onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={-250} onClick={() => setMenuOpen(false)}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={() => setMenuOpen(false)}>Campus</Link></li>
        <li><Link to='testimonals' smooth={true} offset={-260} duration={500} onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} onClick={() => setMenuOpen(false)}className='btn'>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
