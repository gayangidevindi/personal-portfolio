import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header className="header">
      <div className="logo">Gyangi Devindi</div>
      
    
      <nav className="nav">
    
    <Link to="/">Home</Link>
    <Link to="/aboutind">About</Link>
   <Link to="/projects">Projects</Link>
  <Link to="/contact">Contact</Link>

      </nav>
    </header>
  );
}

export default Header;
