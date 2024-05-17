import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Contratos">Contratos</Link></li>
        <li><Link to="/Sueldos">Sueldos</Link></li>
        <li><Link to="/Trabajadores">Trabajadores</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
