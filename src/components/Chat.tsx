import React from 'react';
import { Message } from '../types/types';

interface ConversationDisplayProps {
  messages: Message[];
}

const ConversationDisplay: React.FC<ConversationDisplayProps> = ({
  messages,
}) => {
  return (
    <div className='conversation-display'>
      {/* Mapping through messages array to render each message */}
      {messages.map((message) => (
        <div key={message.id} className={`message ${message.sender}`}>
          <p>{message.text}</p> {/* Displaying the text of each message */}
        </div>
      ))}
    </div>
  );
};

export default ConversationDisplay;
