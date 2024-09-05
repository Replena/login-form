import React, { useEffect } from 'react';
import '../App.css'; // CSS dosyanızı buraya dahil edin

const StarryBackground = () => {
  useEffect(() => {
    const numStars = 450; // İstediğiniz yıldız sayısı
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.width = `${Math.random() * 3}px`;
      star.style.height = star.style.width;
      starsContainer.appendChild(star);
    }

    document.body.appendChild(starsContainer);

    return () => {
      const stars = document.querySelector('.stars');
      if (stars) {
        stars.remove();
      }
    };
  }, []);

  return null;
};

export default StarryBackground;
