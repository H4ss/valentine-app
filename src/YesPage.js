import myPic from './1.jpg'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './YesPage.css';
import ConstantConfetti from './ConstantConfetti';

function YesPage() {
  const navigate = useNavigate();
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Number of hearts to generate
    const heartCount = 30; // Adjust as you like
    const tempHearts = [];

    for (let i = 0; i < heartCount; i++) {
      // For each heart, pick random horizontal position (0-100%)
      const leftPos = Math.random() * 100;
      // Random animation duration between 4s and 8s
      const duration = 4 + Math.random() * 4;
      // Random delay between 0s and 5s (so they don't all start together)
      const delay = Math.random() * 5;

      tempHearts.push({
        id: i, 
        left: leftPos,
        duration,
        delay
      });
    }

    setHearts(tempHearts);
  }, []);

  return (
    <div className="yes-page-container">
      {/* Falling hearts */}
      <div className="heart-rain-container">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="falling-heart"
            style={{
              left: `${heart.left}%`,
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <ConstantConfetti />
      <h2 className="love-message">I love you</h2>

      <button className="return-button" onClick={() => navigate('/')}>
        Return
      </button>
    </div>
  );
}

export default YesPage;
