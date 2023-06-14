// frontend/src/components/CentreSearch.js
import React, { useState } from 'react';

const CentreSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search operation
    alert(`Searching for "${searchTerm}"`);
    setSearchTerm('');
  };

  return (
    <div>
      <h2>Centre Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default CentreSearch;
