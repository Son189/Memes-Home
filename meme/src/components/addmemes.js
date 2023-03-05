import React, { useState, useEffect } from 'react';
import Textfit from 'react-textfit';

function MemeGenerator() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  function handleImageClick(image) {
    setSelectedImage(image);
  }

  function handleTopTextChange(event) {
    setTopText(event.target.value);
  }

  function handleBottomTextChange(event) {
    setBottomText(event.target.value);
  }

  function handleCreateMeme() {
    // Create the meme using the selected image and the text entered by the user.
  }

  return (
    <div>
      <h1>Meme Generator</h1>
      <div>
        {images.map(image => (
          <img
            key={image.id}
            src={image.url}
            alt={image.title}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div>
          <img src={selectedImage.url} alt={selectedImage.title} />
          <div>
            <label htmlFor="top-text">Top Text:</label>
            <input type="text" id="top-text" value={topText} onChange={handleTopTextChange} />
          </div>
          <div>
            <label htmlFor="bottom-text">Bottom Text:</label>
            <input type="text" id="bottom-text" value={bottomText} onChange={handleBottomTextChange} />
          </div>
          <button onClick={handleCreateMeme}>Create Meme</button>
        </div>
      )}
    </div>
  );
}
export default MemeGenerator