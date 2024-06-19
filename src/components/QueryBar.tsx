import React, { useState } from 'react';

interface QueryBarProps {
  onSubmitQuery: (query: string) => void; // Prop specifying onSubmitQuery function that takes a string query
}

const QueryBar: React.FC<QueryBarProps> = ({ onSubmitQuery }) => {
  const [query, setQuery] = useState(''); // State to store the current query input

  const handleSubmit = () => {
    if (query.trim() !== '') {
      // Check if the query is not empty or just whitespace
      onSubmitQuery(query); // Call the onSubmitQuery function with the current query
      setQuery(''); // Clear the query input after submission
    }
  };

  return (
    <div className='query-bar'>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state with input value changes
        placeholder='Enter your fields here'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QueryBar;
