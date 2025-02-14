import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti'; // Import the library
import './ValentineApp.css';

function ValentineApp() {
  const navigate = useNavigate();
  const [isNoHovered, setIsNoHovered] = useState(false);
  const [noStyle, setNoStyle] = useState({});

  // On first hover of "No," set random position
  const handleNoHover = () => {
    setIsNoHovered(true);
    const randomTop = Math.floor(Math.random() * 80) + 10; // 10-90%
    const randomLeft = Math.floor(Math.random() * 80) + 10; // 10-90%

    setNoStyle({
      position: 'absolute',
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      transform: 'translate(-50%, -50%)',
    });
  };

  // Trigger confetti burst, then navigate to /yes
  const handleYesClick = () => {
    launchConfetti();
    setTimeout(() => {
      navigate('/yes');
    }, 1000); // Wait 1 second so the confetti is visible before changing page
  };

  // This launches two bursts of confetti from the bottom corners
  const launchConfetti = () => {
    // Left side
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 1 }, // bottom left
      colors: ['#ff77a9', '#ffafcc', '#ffcad4'], // Valentine's palette
    });
    // Right side
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 1 }, // bottom right
      colors: ['#ff77a9', '#ffafcc', '#ffcad4'],
    });
  };

  return (
    <div className="valentine-container">
      <h1 className="valentine-title">Would you be my Valentine?</h1>

      <div className="buttons-row">
        <button className="yes-button" onClick={handleYesClick}>
          Yes
        </button>
        <button
          className="no-button"
          style={isNoHovered ? noStyle : {}}
          onMouseEnter={handleNoHover}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default ValentineApp;
