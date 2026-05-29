'use client';

import React, { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fading out after 1 second
    const timer1 = setTimeout(() => {
      setIsFading(true);
    }, 1000);

    // Completely remove from DOM after the fade transition (1.5s total)
    const timer2 = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffffff', // White background so the logo's white box is hidden
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999999, // Ensure it's above absolutely everything
      opacity: isFading ? 0 : 1,
      transition: 'opacity 0.5s ease-out',
      pointerEvents: isFading ? 'none' : 'all',
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes smoothPulse {
          0% { filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.5)); transform: scale(0.98); opacity: 0.8; }
          50% { filter: drop-shadow(0 0 35px rgba(212, 175, 55, 0.8)); transform: scale(1.05); opacity: 1; }
          100% { filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.5)); transform: scale(0.98); opacity: 0.8; }
        }
        .splash-logo-anim {
          animation: smoothPulse 1s ease-in-out infinite;
          width: 250px;
          height: 250px;
          object-fit: contain;
          border-radius: 50%; /* Crop the square into a circle */
          mix-blend-mode: multiply;
        }
      `}} />
      <img src="/logo.png" alt="شعار إبداع الخليج" className="splash-logo-anim" />
    </div>
  );
}
