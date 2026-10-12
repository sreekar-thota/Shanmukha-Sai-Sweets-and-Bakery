import React, { useState } from 'react';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';
import { BAKERY_INFO, getWhatsAppUrl } from '../data/bakeryInfo';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar" role="banner">
      <div className="container navbar-container">
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <img 
            src={BAKERY_INFO.logo} 
            alt="Shanmukha Sai Bakery Logo" 
            className="navbar-logo"
          />
          <div className="navbar-brand-text">
            <span className="navbar-brand-title">Shanmukha Sai</span>
            <span className="navbar-brand-sub">Bakery & Sweets</span>
          </div>
        </a>

        <nav role="navigation" aria-label="Main Navigation">
          <ul className={`navbar-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={closeMenu}>About Us</a>
            </li>
            <li>
              <a href="#categories" className="nav-link" onClick={closeMenu}>Categories</a>
            </li>
            <li>
              <a href="#products" className="nav-link" onClick={closeMenu}>Products</a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
            </li>
            <li className="nav-mobile-cta" style={{ display: 'none' }}>
              <a 
                href={getWhatsAppUrl()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp-nav"
                onClick={closeMenu}
              >
                <MessageCircle size={18} />
                WhatsApp Enquiry
              </a>
            </li>
          </ul>
        </nav>

        <div className="navbar-actions">
          <a 
            href={getWhatsAppUrl()} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-whatsapp-nav"
            title="Chat directly with Shanmukha Sai Bakery on WhatsApp"
          >
            <MessageCircle size={18} />
            WhatsApp Enquiry
          </a>

          <button 
            type="button" 
            className="nav-toggle" 
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
}
