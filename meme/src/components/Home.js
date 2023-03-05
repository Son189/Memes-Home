
import "./Home.css"

import React, { useState, useEffect } from 'react';
import Textfit from 'react-textfit';


function Home() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [savedMemes, setSavedMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setImages(data.data.memes))
      .catch(error => console.log(error));
  }, []);

  function handleCreateMeme() {
    setSelectedImage(images[selectedIndex]);
  }

  function handlePreviousImage() {
    setSelectedIndex(selectedIndex - 1);
  }

  function handleNextImage() {
    setSelectedIndex(selectedIndex + 1);
  }

  function handleTopTextChange(event) {
    setTopText(event.target.value);
  }

  function handleBottomTextChange(event) {
    setBottomText(event.target.value);
  }

  function handleSaveMeme() {
    const url = `https://api.imgflip.com/caption_image?template_id=${selectedImage.id}&username=<YOUR_USERNAME>&password=<YOUR_PASSWORD>&text0=${topText}&text1=${bottomText}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const memeUrl = data.data.url;
        setSavedMemes([...savedMemes, { image: selectedImage, topText, bottomText, url: memeUrl }]);
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <button className="create-button" onClick={handleCreateMeme}>Create Meme</button>
      {selectedImage && (
        <div className="selected-image">
          <img src={selectedImage.url} alt={selectedImage.name} />
          <div className="text-inputs">
            <label htmlFor="top-text">Top Text:</label>
            <Textfit mode="single" min={16} max={60}>
              <input type="text" id="top-text" value={topText} onChange={handleTopTextChange} />
            </Textfit>
            <label htmlFor="bottom-text">Bottom Text:</label>
            <Textfit mode="single" min={16} max={60}>
              <input type="text" id="bottom-text" value={bottomText} onChange={handleBottomTextChange} />
            </Textfit>
          </div>
          <div className="arrow-buttons">
            <button onClick={handlePreviousImage} disabled={selectedIndex === 0}>{"<"}</button>
            <button onClick={handleNextImage} disabled={selectedIndex === images.length - 1}>{">"}</button>
          </div>
          <button className="save-button" onClick={handleSaveMeme}>Save Meme</button>
        </div>
      )}
      <div className="saved-memes">
        {savedMemes.map((savedMeme, index) => (
          <div key={index} className="saved-meme">
            <img src={savedMeme.url} alt={`${savedMeme.image.name} meme`} />
            <div className="text">
              <p>{savedMeme.topText}</p>
              <p>{savedMeme.bottomText}</p>
            </div>
          </div>
          ))}
          </div>
          </div>
  )}
       
export default Home