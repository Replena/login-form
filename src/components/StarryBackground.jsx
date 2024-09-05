import React, { useEffect } from 'react';
import '../App.css';

const StarryBackground = () => {
  useEffect(() => {
    const numStars = 450;
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';

    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.width = `${Math.random() * 3}px`;
      star.style.height = star.style.width;
      return star;
    };

    const addStars = () => {
      for (let i = 0; i < numStars; i++) {
        const star = createStar();
        starsContainer.appendChild(star);
      }
      document.body.appendChild(starsContainer);
    };

    addStars();

    const updateStars = () => {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => {
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
      });
    };


    setInterval(updateStars, 3000);

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
