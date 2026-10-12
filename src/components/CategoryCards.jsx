import React from 'react';
import { ArrowRight, Cake, Cookie, Flame } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';
import './CategoryCards.css';

export default function CategoryCards({ selectedCategory, onSelectCategory }) {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'cakes':
        return <Cake size={16} />;
      case 'sweets':
        return <Cookie size={16} />;
      case 'hots':
        return <Flame size={16} />;
      default:
        return null;
    }
  };

  const handleCardClick = (categoryId) => {
    onSelectCategory(categoryId);
    const el = document.getElementById('products-grid-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="categories-section" aria-label="Product Categories">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Handcrafted Offerings</span>
          <h2 className="section-title">Our Signature Categories</h2>
          <p className="section-subtitle">
            Explore our curated menu made fresh daily in Bhimavaram — from celebration cakes to royal sweets and piping-hot puffs.
          </p>
        </header>

        <div className="category-cards-grid">
          {BAKERY_INFO.categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <article 
                key={cat.id} 
                className={`category-card ${isActive ? 'is-active' : ''}`}
                onClick={() => handleCardClick(cat.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(cat.id);
                  }
                }}
              >
                <div className="category-image-wrap">
                  <img 
                    src={cat.image} 
                    alt={`${cat.name} Category at Shanmukha Sai Bakery`} 
                    className="category-card-img"
                    loading="lazy"
                  />
                  <span className="category-badge-chip">
                    {getCategoryIcon(cat.id)}
                    <span style={{ marginLeft: '4px' }}>{cat.name}</span>
                  </span>
                </div>

                <div className="category-card-body">
                  <h3 className="category-card-title">{cat.name}</h3>
                  <div className="category-card-tagline">{cat.tagline}</div>
                  <p className="category-card-desc">{cat.description}</p>

                  <button 
                    type="button" 
                    className="btn-category-explore"
                    aria-label={`Explore all ${cat.name}`}
                  >
                    <span>{cat.buttonText}</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
