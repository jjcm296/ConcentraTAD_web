import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ onDownloadClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleDownloadClick = (e) => {
        if (location.pathname !== '/') {
            e.preventDefault(); // evita que se descargue hasta estar en home
            localStorage.setItem('scrollToDownload', 'true');
            window.location.href = '/';
        } else {
            onDownloadClick(); // cuenta clic
            // la descarga continúa normalmente
        }
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };


    return (
        <header className="nav-bar">
            <div className="nav-left">
                <Link to="/">
                    <img src="/Logo.png" alt="Logo ConcentraTDA" className="logo" />
                </Link>
            </div>

            <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <Link to="/" onClick={handleLinkClick}>Inicio</Link>
                <Link to="/sobretda" onClick={handleLinkClick}>Sobre El TDA</Link>
                <Link to="/nosotros" onClick={handleLinkClick}>Nosotros</Link>
                <a
                    href="/apk/ConcentraTDA.apk"
                    download
                    onClick={(e) => {
                        handleDownloadClick(e);
                        handleLinkClick();
                    }}
                >
                    <button className="clean-download-button">
                        <i className="fab fa-android" style={{ marginRight: '8px' }}></i>
                        Descargar
                    </button>
                </a>
            </nav>

            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
        </header>
    );
};

export default NavBar;
