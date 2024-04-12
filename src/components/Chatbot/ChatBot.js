// Chatbot.js
import React, { useState } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './chatbot.css'; // Import the provided CSS file

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleNewUserMessage = (newMessage) => {
    // Handle user messages here, e.g., send to backend for processing
    console.log(`New message incoming! ${newMessage}`);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className={`chatbot-container ${isChatOpen ? 'open' : 'closed'}`}>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Chatbot"
        subtitle=""
        launcher={(toggle) => (
          <div className="chat-launcher" onClick={toggle}>
            {isChatOpen ? 'Close' : 'Open'}
          </div>
        )}
        autofocus={true}
        fullScreenMode={false}
        senderPlaceHolder="Type a message..."
        isOpen={isChatOpen}
        handleToggle={toggleChat}
      />
    </div>
  );
};

export default Chatbot;
