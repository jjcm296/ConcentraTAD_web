import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="nav-bar">
            <div className="nav-left">
                <h1 className="app-name">Concentra TDA</h1>
            </div>

            <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <a href="#inicio">Inicio</a>
                <a href="#servicios">Servicios</a>
                <a href="#nosotros">Nosotros</a>
                <a href="#contacto">Contacto</a>
            </nav>

            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
        </header>
    );
};

export default NavBar;