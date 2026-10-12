import React, { useState, useEffect } from 'react';
import { BAKERY_INFO } from '../data/bakeryInfo';
import './WelcomeIntro.css';

export default function WelcomeIntro({ onIntroComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const holdDuration = prefersReducedMotion ? 400 : 2500;
    const fadeDuration = prefersReducedMotion ? 200 : 700;

    const timerHold = setTimeout(() => {
      setIsFadingOut(true);
    }, holdDuration);

    const timerComplete = setTimeout(() => {
      setIsVisible(false);
      if (onIntroComplete) {
        onIntroComplete();
      }
    }, holdDuration + fadeDuration);

    return () => {
      clearTimeout(timerHold);
      clearTimeout(timerComplete);
    };
  }, [onIntroComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onIntroComplete) {
        onIntroComplete();
      }
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <aside 
      className={`welcome-overlay ${isFadingOut ? 'fade-out' : ''}`}
      aria-label="Welcome Intro Screen"
      aria-hidden={isFadingOut}
      onClick={handleSkip}
    >
      <div className="welcome-aura" aria-hidden="true" />
      
      <div className="welcome-content">
        <div className="welcome-logo-wrapper">
          <div className="welcome-logo-ring" aria-hidden="true" />
          <img 
            src={BAKERY_INFO.logo} 
            alt="Shanmukha Sai Bakery & Sweets Official Logo" 
            className="welcome-logo"
          />
        </div>

        <span className="welcome-brand-badge">Bhimavaram's Finest Delights</span>
        <h1 className="welcome-heading">Welcome to Shanmukha Sai Bakery</h1>
        <p className="welcome-tagline">{BAKERY_INFO.tagline}</p>
      </div>

      <button 
        type="button" 
        className="welcome-skip" 
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        aria-label="Skip welcome animation and view website"
      >
        Skip to Website →
      </button>
    </aside>
  );
}
