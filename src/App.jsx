import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import WelcomeIntro from './components/WelcomeIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryCards from './components/CategoryCards';
import ProductGrid from './components/ProductGrid';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { getWhatsAppUrl } from './data/bakeryInfo';
import './App.css';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleExploreHeroClick = () => {
    setSelectedCategory('all');
    const el = document.getElementById('categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-wrapper">
      {/* 1. Animated Welcome Intro Screen (Runs once on page load) */}
      <WelcomeIntro onIntroComplete={() => setIntroFinished(true)} />

      {/* 2. Main Website Content */}
      <Navbar />
      
      <main id="main-content" role="main">
        <Hero onExploreClick={handleExploreHeroClick} />
        
        <CategoryCards 
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        
        <ProductGrid 
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        
        <AboutUs />
        
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp Quick Enquiry Button (revealed after intro) */}
      {introFinished && (
        <a 
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          id="floating-whatsapp-action"
          aria-label="Enquire with Shanmukha Sai Bakery on WhatsApp"
        >
          <span className="floating-pulse-ring" aria-hidden="true" />
          <MessageCircle size={20} />
          <span>WhatsApp Enquiry</span>
        </a>
      )}
    </div>
  );
}
