import React, { useState, useEffect } from 'react';

function Home() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch('/memes')
      .then(response => response.json())
      .then(data => setMemes(data))
      .catch(error => console.log(error));
  }, []);

  const handleCreateMeme = () => {
    fetch('/memes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ top_text: topText, bottom_text: bottomText, image_url: imageUrl })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to create meme');
        }
      })
      .then(data => {
        setMemes([...memes, data]);
        setTopText('');
        setBottomText('');
        setImageUrl('');
      })
      .catch(error => console.log(error));
  };

  const handleDeleteMeme = id => {
    fetch(`/memes/${id}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setMemes(memes.filter(meme => meme.id !== id));
        } else {
          throw new Error('Failed to delete meme');
        }
      })
      .catch(error => console.log(error));
  };

  const handleSearchMemes = query => {
    fetch(`/memes/search?q=${query}`)
      .then(response => response.json())
      .then(data => setMemes(data))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Meme Generator</h1>
      <div>
        <label htmlFor="top-text">Top Text:</label>
        <input type="text" id="top-text" value={topText} onChange={event => setTopText(event.target.value)} />
      </div>
      <div>
        <label htmlFor="bottom-text">Bottom Text:</label>
        <input type="text" id="bottom-text" value={bottomText} onChange={event => setBottomText(event.target.value)} />
      </div>
      <div>
        <label htmlFor="image-url">Image URL:</label>
        <input type="text" id="image-url" value={imageUrl} onChange={event => setImageUrl(event.target.value)} />
      </div>
      <button onClick={handleCreateMeme}>Create Meme</button>
      <div>
        <label htmlFor="search-text">Search:</label>
        <input type="text" id="search-text" onChange={event => handleSearchMemes(event.target.value)} />
      </div>
      <ul>
        {memes.map(meme => (
          <li key={meme.id}>
            <img src={meme.image_url} alt="meme" />
            <div>{meme.top_text}</div>
            <div>{meme.bottom_text}</div>
            <button onClick={() => handleDeleteMeme(meme.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
