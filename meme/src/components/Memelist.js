import React, { useState, useEffect } from 'react';

function MemeList() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4567/memes')
      .then((response) => response.json())
      .then((data) => setMemes(data))
      .catch((error) => {
        // handle error
      });
  }, []);

  return (
    <div>
      {memes.map((meme) => (
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
export default MemeList
