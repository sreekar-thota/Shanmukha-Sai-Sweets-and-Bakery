import React from 'react';
import { MessageCircle, Check, X, Sparkles, Clock } from 'lucide-react';
import { getWhatsAppUrl } from '../data/bakeryInfo';
import './ProductCard.css';

export default function ProductCard({ 
  product, 
  isSelected, 
  onToggleSelect 
}) {
  const whatsappUrl = getWhatsAppUrl(product.name);

  const handleClick = (e) => {
    // If user clicked the WhatsApp button or close button, don't trigger the card toggle
    if (e.target.closest('.btn-whatsapp-more-info') || e.target.closest('.btn-card-close')) {
      return;
    }
    onToggleSelect(product.id);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    onToggleSelect(product.id);
  };

  return (
    <div className="product-card-wrapper">
      <article
        id={`product-card-${product.id}`}
        className={`product-card ${isSelected ? 'is-selected' : ''}`}
        onClick={handleClick}
        tabIndex={0}
        role="button"
        aria-pressed={isSelected}
        aria-label={`${product.name} - ${isSelected ? 'Selected' : 'Click to select and view enquiry options'}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e);
          }
        }}
      >
        {/* Selected Banner Indicator */}
        {isSelected && (
          <div className="selected-indicator-banner">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Check size={14} /> Selected Product
            </span>
            <button 
              type="button" 
              className="btn-card-close" 
              onClick={handleClose}
              aria-label={`Deselect ${product.name}`}
            >
              <X size={14} />
            </button>
          </div>
        )}

        {/* Product Media */}
        <div className="product-card-media">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
            loading="lazy"
          />
          {product.badge && (
            <span className="product-badge">{product.badge}</span>
          )}
          <span className="product-category-chip">{product.category}</span>
        </div>

        {/* Product Content Body */}
        <div className="product-card-body">
          <div className="product-card-header">
            <h3 className="product-title">{product.name}</h3>
            {product.priceDisplay && (
              <div className="product-price-display">
                <Clock size={14} />
                <span>{product.priceDisplay}</span>
              </div>
            )}
          </div>

          {product.shortDescription && (
            <p className="product-desc">{product.shortDescription}</p>
          )}

          {product.tags && product.tags.length > 0 && (
            <div className="product-tags">
              {product.tags.map((tag, idx) => (
                <span key={idx} className="product-tag-item">{tag}</span>
              ))}
            </div>
          )}

          {/* Prompt hint when not selected */}
          {!isSelected && (
            <div className="card-select-hint">
              <Sparkles size={14} />
              <span>Tap for details & WhatsApp enquiry</span>
            </div>
          )}

          {/* Revealed Action on Lift Effect */}
          <div className="product-card-reveal-action">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-more-info"
              id={`whatsapp-enquire-${product.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <MessageCircle size={18} />
              <span>Click for More Info</span>
            </a>
            <span className="enquiry-note">
              Opens WhatsApp chat with product name prefilled
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
