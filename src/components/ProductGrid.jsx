import React, { useState } from 'react';
import { Cake, Cookie, Flame, Sparkles, RotateCcw } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';
import './ProductGrid.css';

export default function ProductGrid({ 
  selectedCategory, 
  onSelectCategory 
}) {
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Filter products based on selectedCategory
  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const getCategoryCount = (catId) => {
    if (catId === 'all') return PRODUCTS.length;
    return PRODUCTS.filter(p => p.category === catId).length;
  };

  const handleToggleSelect = (productId) => {
    setSelectedProductId(prev => prev === productId ? null : productId);
  };

  const handleCategoryFilter = (catId) => {
    onSelectCategory(catId);
    setSelectedProductId(null); // Reset active card selection when switching tabs
  };

  const categoriesList = [
    { id: 'all', label: 'All Items', icon: <Sparkles size={16} /> },
    { id: 'cakes', label: 'Cakes', icon: <Cake size={16} /> },
    { id: 'sweets', label: 'Sweets', icon: <Cookie size={16} /> },
    { id: 'hots', label: 'Hots', icon: <Flame size={16} /> }
  ];

  return (
    <section id="products" className="products-grid-section" aria-label="Bakery Products Collection">
      <div id="products-grid-section" />
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Fresh Daily Menu</span>
          <h2 className="section-title">Explore Our Bakery Creations</h2>
          <p className="section-subtitle">
            Click any product to view details and immediately enquire for custom celebration orders or daily counter availability on WhatsApp.
          </p>
        </header>

        {/* Category Filter Tabs */}
        <div className="products-filter-bar" role="tablist" aria-label="Product Categories Tabs">
          {categoriesList.map(tab => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => handleCategoryFilter(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span className="filter-btn-count">{getCategoryCount(tab.id)}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Notice / Reset Bar */}
        {selectedCategory !== 'all' && (
          <div className="category-active-notice">
            <div className="category-active-info">
              <span className="category-active-title">
                Viewing {selectedCategory.toUpperCase()} ({filteredProducts.length} items)
              </span>
              <span className="category-active-count">
                — Handcrafted fresh at Shanmukha Sai Bakery
              </span>
            </div>
            <button 
              type="button" 
              className="btn-show-all"
              onClick={() => handleCategoryFilter('all')}
            >
              <RotateCcw size={14} />
              View All Categories
            </button>
          </div>
        )}

        {/* Stable Product Cards Grid with Lift Interaction */}
        <div className="products-display-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isSelected={selectedProductId === product.id}
              onToggleSelect={handleToggleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
