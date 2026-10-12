import React from 'react';
import { MessageCircle, Phone, MapPin, Clock, Send } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BAKERY_INFO, getWhatsAppUrl } from '../data/bakeryInfo';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-label="Contact Shanmukha Sai Bakery">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Visit Us & Enquire Today</h2>
          <p className="section-subtitle">
            Need a custom cake for a celebration or want to confirm today's freshly baked sweets and hots? Message us directly on WhatsApp.
          </p>
        </header>

        <div className="contact-grid">
          {/* Main Business Contact Details Card */}
          <div className="contact-card-main">
            <div className="contact-brand-header">
              <img 
                src={BAKERY_INFO.logo} 
                alt="Shanmukha Sai Bakery Official Logo" 
                className="contact-logo"
              />
              <div>
                <h3 className="contact-brand-title">{BAKERY_INFO.name}</h3>
                <div className="contact-brand-tagline">{BAKERY_INFO.brandSubtitle}</div>
              </div>
            </div>

            <div className="contact-items-list">
              {/* WhatsApp Item */}
              <div className="contact-item">
                <div className="contact-item-icon whatsapp-icon">
                  <MessageCircle size={22} />
                </div>
                <div className="contact-item-content">
                  <span className="contact-item-label">WhatsApp Product Orders</span>
                  <div className="contact-item-value">
                    <a 
                      href={getWhatsAppUrl()} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Send WhatsApp Message"
                    >
                      {BAKERY_INFO.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Calling Item */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-item-content">
                  <span className="contact-item-label">Direct Phone</span>
                  <div className="contact-item-value">
                    <a href={`tel:${BAKERY_INFO.phone}`}>
                      {BAKERY_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram Item */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <InstagramIcon size={22} />
                </div>
                <div className="contact-item-content">
                  <span className="contact-item-label">Instagram Page</span>
                  <div className="contact-item-value">
                    <a 
                      href={BAKERY_INFO.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      @{BAKERY_INFO.instagram}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Item */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-item-content">
                  <span className="contact-item-label">Bakery Address</span>
                  <div className="contact-item-value">
                    {BAKERY_INFO.address.line1}, {BAKERY_INFO.address.line2},<br />
                    {BAKERY_INFO.address.statePin}
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-cta-box">
              <h4 className="contact-cta-title">Order Directly on WhatsApp</h4>
              <p className="contact-cta-text">
                Chat with our bakers for cake designs, bulk sweet boxes, and daily fresh batch availability.
              </p>
              <a 
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contact-whatsapp"
                id="contact-whatsapp-btn"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp (+91 9676662334)</span>
              </a>
            </div>
          </div>

          {/* Secondary Info & Location Panel */}
          <div className="contact-side-card">
            <div className="info-card-panel">
              <h3 className="info-panel-title">
                <MapPin size={20} color="#C58A4B" />
                Bakery Location
              </h3>
              <div className="bhimavaram-location-box">
                <p className="bhimavaram-location-text">
                  📍 {BAKERY_INFO.address.full}
                </p>
                <p className="bhimavaram-pin-note">
                  Located conveniently in Chinnamaram, Bhimavaram. Visit our store or message on WhatsApp for delivery enquiries.
                </p>
              </div>
            </div>

            <div className="info-card-panel">
              <h3 className="info-panel-title">
                <Clock size={20} color="#C58A4B" />
                Fresh Daily Baking
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Our bakery ovens start early every morning to prepare fresh batches of crispy puffs, tea snacks, and custom celebration cakes. Pure ghee sweets are stocked fresh daily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
