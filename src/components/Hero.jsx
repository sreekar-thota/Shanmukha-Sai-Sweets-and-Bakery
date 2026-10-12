import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { BAKERY_INFO, getWhatsAppUrl } from '../data/bakeryInfo';
import './Hero.css';

export default function Hero({ onExploreClick }) {
  const scrollToProducts = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById('products');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Hero Introduction">
      <div className="hero-backdrop-glow" aria-hidden="true" />
      
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <img 
              src={BAKERY_INFO.logo} 
              alt="Shanmukha Sai Bakery Logo Mark" 
              className="hero-logo-mini"
            />
            <span className="hero-pill">
              <Sparkles size={14} color="#C58A4B" />
              Shanmukha Sai Bakery & Sweets
            </span>
          </div>

          <h1 className="hero-title">
            Freshly Baked, <br />
            <span className="hero-title-accent">Made with Love</span>
          </h1>

          <p className="hero-desc">
            {BAKERY_INFO.description}
          </p>

          <div className="hero-actions">
            <button 
              type="button" 
              className="btn-primary-hero"
              onClick={scrollToProducts}
              id="hero-view-products-btn"
            >
              View Our Products
              <ArrowDown size={18} />
            </button>

            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp-hero"
              id="hero-whatsapp-btn"
            >
              <MessageCircle size={18} />
              WhatsApp Enquiry
            </a>
          </div>

          <div className="hero-features">
            <div className="hero-feature-item">
              <span className="feature-dot" />
              <span className="feature-text">Oven-Fresh Daily</span>
            </div>
            <div className="hero-feature-item">
              <span className="feature-dot" />
              <span className="feature-text">Pure Desi Ghee Sweets</span>
            </div>
            <div className="hero-feature-item">
              <span className="feature-dot" />
              <span className="feature-text">Custom Celebration Cakes</span>
            </div>
          </div>
        </div>

        <div className="hero-media-wrapper">
          <div className="hero-media-card">
            <img 
              src="/images/hero_bakery.jpg" 
              alt="Artisan counter showcase of fresh cakes, sweets, and pastries at Shanmukha Sai Bakery" 
              className="hero-image"
            />
            <div className="hero-badge-overlay">
              <div>
                <span className="hero-badge-label">Authentic Bakery & Sweets</span>
                <h4 className="hero-badge-title">Handcrafted in Bhimavaram</h4>
              </div>
              <div className="hero-badge-location">
                <MapPin size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '4px' }} />
                Chinnamaram
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
