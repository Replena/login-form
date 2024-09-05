import React from 'react';
import '../App.css';

export default function StarryBackground() {
  return (
    <>
      <div className="bg"></div>
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
    </>
  );
}
