import React, { useState } from 'react';
import './App.css';
import QueryBar from './components/QueryBar';
import ConversationDisplay from './components/Chat';
import FormDisplay from './components/Form';
import { Message, FormData } from './types/types';
import { initialQuestion } from './types/questions';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]); // State for storing messages in conversation
  const [formData, setFormData] = useState<FormData | null>(null); // State for form data used in form display component
  const [askingFields, setAskingFields] = useState<boolean>(false); // State to track if AI is asking for fields

  const handleQuerySubmission = (query: string) => {
    addMessageToConversation('user', query); // Adds user query to conversation
    if (!askingFields) {
      simulateAIResponse(); // Simulates AI response if not currently asking for fields
    } else {
      generateFormBasedOnFields(query); // Generates form based on user-provided fields input
    }
  };

  const simulateAIResponse = () => {
    addMessageToConversation('assistant', initialQuestion); // Adds initial AI response to conversation
    setAskingFields(true); // Sets askingFields state to true to indicate AI is asking for fields
  };

  const generateFormBasedOnFields = (fieldsInput: string) => {
    // Split the fields input by newline or comma, and then parse type - label pairs
    const fieldsArray = fieldsInput.split(/[\n,]/).map((field) => field.trim());
    const formFields = fieldsArray.map((field) => {
      const [type, label] = field.split('-').map((part) => part.trim());
      return {
        label,
        type,
        id: label.toLowerCase().replace(/\s+/g, '-'), // Generate a simple ID from label
        required: true,
      };
    });

    // Mock form generation logic based on user's specified fields (replace with actual logic)
    const form: FormData = {
      title: `Generated Form:`,
      fields: formFields,
    };
    setFormData(form); // Sets formData state with generated form
  };

  const addMessageToConversation = (
    sender: 'user' | 'assistant',
    text: string
  ) => {
    const newMessage: Message = {
      id: messages.length + 1, // Generates unique ID for each message
      sender,
      text,
    };
    setMessages([...messages, newMessage]); // Adds new message to existing messages in conversation
  };

  return (
    <div className='App'>
      <h1>AI create it for you!</h1>
      <h3>
        Create your forms easily by simply giving a name to each field and
        stating its type (example: text - name).
        <br />
        Remember to add comas between each field.
      </h3>
      <div className='container'>
        <div className='content'>
          <div className='left-panel'>
            <ConversationDisplay messages={messages} />{' '}
            {/* Renders conversation messages */}
            <QueryBar onSubmitQuery={handleQuerySubmission} />{' '}
            {/* Renders query bar component */}
          </div>
          <div className='right-panel'>
            <FormDisplay formData={formData} />{' '}
            {/* Renders form display component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
