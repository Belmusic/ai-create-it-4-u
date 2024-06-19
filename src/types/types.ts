export interface Message {
  id: number; // Unique identifier for each message
  sender: 'user' | 'assistant'; // Specifies whether the sender is 'user' or 'assistant'
  text: string; // Text content of the message
}

export interface Field {
  label: string; // Label or name of the form field
  type: string; // Type of the form field (e.g., 'text', 'textarea', etc.)
  id: string; // Unique identifier for the form field
  required: boolean; // Specifies if the field is required or not
}

export interface FormData {
  title: string; // Title or name of the form
  fields: Field[]; // Array of Field objects representing form fields
}

export interface AIResponse {
  question: string; // The question asked to the AI
  response: string; // The AI's response to the question
}
