import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">NG.</div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
      </button>
    </nav>
  );
}

export default Navbar;
