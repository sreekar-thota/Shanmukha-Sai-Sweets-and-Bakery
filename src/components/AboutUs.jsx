import React from 'react';
import { Cake, Cookie, Flame, MapPin, Sparkles, Heart } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <section id="about" className="about-section" aria-label="About Shanmukha Sai Bakery">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-card-badge">
            <img 
              src={BAKERY_INFO.logo} 
              alt="Shanmukha Sai Bakery & Sweets Official Seal" 
              className="about-logo-large"
            />
            <h3 className="about-badge-title">Shanmukha Sai</h3>
            <div className="about-badge-sub">Bakery & Sweets</div>
            <div className="about-location-tag">
              <MapPin size={14} color="#C58A4B" />
              <span>Chinnamaram, Bhimavaram</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">
            <Heart size={14} color="#C58A4B" />
            Our Bakery Story
          </span>
          <h2 className="about-content-heading">
            Authentic Flavours & Daily Fresh Baking in Bhimavaram
          </h2>
          <p className="about-lead">
            At Shanmukha Sai Bakery & Sweets, every recipe begins with pure ingredients, authentic culinary care, and the goal of bringing smiles to every family table.
          </p>
          <p className="about-p">
            Located at Abbulu Gari Complex in Chinnamaram, Bhimavaram, we specialize in three core delicious craft categories: handcrafted celebration cakes for life's milestones, traditional melt-in-mouth pure ghee sweets, and golden oven-fresh puffs and savory hots.
          </p>

          <div className="about-pillars">
            <div className="about-pillar-card">
              <div className="pillar-icon-box">
                <Cake size={22} />
              </div>
              <h4 className="pillar-title">Custom Cakes</h4>
              <p className="pillar-desc">Artisan bakes with fresh cream & rich chocolate</p>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-icon-box">
                <Cookie size={22} />
              </div>
              <h4 className="pillar-title">Pure Sweets</h4>
              <p className="pillar-desc">Traditional mithai made with pure ghee</p>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-icon-box">
                <Flame size={22} />
              </div>
              <h4 className="pillar-title">Crispy Hots</h4>
              <p className="pillar-desc">Oven-hot puffs and savory crunch daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
