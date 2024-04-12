import React, { useState, useEffect } from 'react';
import './home.css'; // Import your CSS file

function FadingParticles() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the message after 3 seconds
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fading-container">
      {isVisible && (
        <div className="particles-container">
          {Array.from({ length: 50 }).map((_, index) => (
            <div className="particle" key={index}></div>
          ))}
        </div>
      )}
      <div className={`description ${isVisible ? '' : 'hidden'}`}>
        Get ready to embark on your journey with Safe Travels! Just a moment while we prepare your personalized itinerary.
      </div>
    </div>
  );
}

export default FadingParticles;
