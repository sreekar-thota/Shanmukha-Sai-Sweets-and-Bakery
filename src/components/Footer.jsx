import React from 'react';
import { MessageCircle, Phone, MapPin, Heart } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BAKERY_INFO, getWhatsAppUrl } from '../data/bakeryInfo';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-brand-header">
              <img 
                src={BAKERY_INFO.logo} 
                alt="Shanmukha Sai Bakery Official Logo" 
                className="footer-logo"
              />
              <div>
                <h3 className="footer-title">{BAKERY_INFO.name}</h3>
                <div className="footer-subtitle">{BAKERY_INFO.brandSubtitle}</div>
              </div>
            </div>
            <p className="footer-desc">
              Freshly baked cakes, traditional sweets, and savoury hot bakes crafted with love and pure ingredients in Bhimavaram.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="footer-col-title">Quick Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#categories" className="footer-link">Categories</a></li>
              <li><a href="#products" className="footer-link">Our Products</a></li>
              <li><a href="#contact" className="footer-link">Contact & Location</a></li>
            </ul>
          </div>

          {/* Bakery Contact Details */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-info">
              <li className="footer-contact-item">
                <MapPin size={16} color="#C58A4B" />
                <span>Chinnamaram, Bhimavaram, AP - 534204</span>
              </li>
              <li className="footer-contact-item">
                <MessageCircle size={16} color="#25D366" />
                <a 
                  href={getWhatsAppUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#25D366', fontWeight: 600 }}
                >
                  WhatsApp: {BAKERY_INFO.whatsappDisplay}
                </a>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} color="#C58A4B" />
                <a href={`tel:${BAKERY_INFO.phone}`} style={{ color: 'inherit' }}>
                  Phone: {BAKERY_INFO.phoneFormatted}
                </a>
              </li>
              <li className="footer-contact-item">
                <InstagramIcon size={16} color="#C58A4B" />
                <a 
                  href={BAKERY_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'inherit' }}
                >
                  @{BAKERY_INFO.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} {BAKERY_INFO.name}. All rights reserved.
          </p>
          <p style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            Freshly Baked, Made with <Heart size={14} className="footer-heart" /> in Bhimavaram
          </p>
        </div>
      </div>
    </footer>
  );
}
