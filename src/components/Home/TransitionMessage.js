import React, { useState, useEffect } from 'react';
import './home.css'; // Make sure to import your CSS file

function TransitionMessage() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timeout to remove the fade-in class after 3 seconds
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`transition-message ${isVisible ? 'fade-in' : ''}`}>
      Get ready to embark on your journey with Safe Travels! Just a moment while we prepare your personalized itinerary.
    </div>
  );
}

export default TransitionMessage;
