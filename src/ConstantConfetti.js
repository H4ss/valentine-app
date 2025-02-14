import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

function ConstantConfetti() {
  useEffect(() => {
    // Create an interval that fires confetti continuously
    const intervalId = setInterval(() => {
      confetti({
        particleCount: 50,        // fewer particles to avoid performance issues
        angle: 180,              // straight down (use 0 or 180 for sideways, etc.)
        spread: 45,             // how wide the confetti goes
        startVelocity: 30,      // initial velocity
        origin: { x: Math.random(), y: 0 },  // random horizontal start, top of screen
        colors: ['#454851', '#73956F', '#7BAE7F', '#95D7AE'], // a Valentine's color palette
      });
    }, 500); // every 500 ms

    // Clear interval on unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return null; // This component only launches confetti; it renders nothing
}

export default ConstantConfetti;
