import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="nav-bar">
            <div className="nav-left">
                <Link to="/">
                    <img src="/Logo.png" alt="Logo ConcentraTDA" className="logo"/>
                </Link>
            </div>

            <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <Link to="/">Inicio</Link>
                <Link to="/sobretda">Sobre El TDA</Link>
                <Link to="/nosotros">Nosotros</Link>
                <button>Descargar</button>
            </nav>

            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
        </header>
    );
};

export default NavBar;