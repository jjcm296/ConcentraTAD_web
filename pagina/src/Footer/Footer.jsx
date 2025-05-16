import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="footer">
            <h3>Síguenos</h3>
            <div className="footer-icons">
                <a href="https://www.instagram.com/concentratda?igsh=MTBjdjh6eDBxanNxZg%3D%3D&utm_source=qr"><FaInstagram /></a>
                <a href="https://www.facebook.com/share/15K3BNLk4U/?mibextid=wwXIfr"><FaFacebookF /></a>
                <a href="https://www.tiktok.com/@concentratda?_t=ZS-8wKhs2Gu0bH&_r=1"><SiTiktok /></a>
            </div>

            <hr />
            <div className="footer-bottom">
                <p>© 2025 Concentra TDA &nbsp; | &nbsp; <a href="#">Términos de uso</a> &nbsp; | &nbsp; <a href="#">Política de privacidad</a></p>
            </div>
        </footer>
    );
};

export default Footer;
