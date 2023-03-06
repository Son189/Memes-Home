import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [filteredMemes, setFilteredMemes] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    fetch(`http://localhost:4567/memes/search?q=${query}`)
      .then((response) => response.json())
      .then((data) => setFilteredMemes(data))
      .catch((error) => {
        // handle error
      });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label>
          Search:
          <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>
      {filteredMemes.map((meme) => (
        <div key={meme.id}>
          <img src={meme.image_url} alt={meme.top_text + ' ' + meme.bottom_text} />
          <p>{meme.top_text}</p>
          <p>{meme.bottom_text}</p>
          {/* add DeleteButton component and pass meme.id as prop */}
        </div>
      ))}
    </div>
  );
}
export default Search
