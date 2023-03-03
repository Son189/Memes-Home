import React, { useState, useEffect } from 'react';

const MemeGenerator = () => {
  const [image, setImage] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [generatedMemes, setGeneratedMemes] = useState([]);
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setAllMemes(data.data.memes))
      .catch(error => console.error(error));
  }, []);

  const generateMeme = () => {
    const index = Math.floor(Math.random() * allMemes.length);
    const meme = allMemes[index];
    setImage(meme.url);
  };

  const handleTopTextChange = (event) => {
    setTopText(event.target.value);
  };

  const handleBottomTextChange = (event) => {
    setBottomText(event.target.value);
  };

  const handleSaveMeme = () => {
    const newMeme = {
      image,
      topText,
      bottomText,
    };

    fetch('https://mybackendapi.com/memes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMeme),
    })
      .then(response => response.json())
      .then(data => setGeneratedMemes([...generatedMemes, data]))
      .catch(error => console.error(error));

    setImage('');
    setTopText('');
    setBottomText('');
  };

  return (
    <div>
      <button onClick={generateMeme}>Generate Meme</button>
      {image && (
        <div>
          <img src={image} alt="Random Meme" />
          <div>
            <label htmlFor="topText">Top Text:</label>
            <input type="text" id="topText" value={topText} onChange={handleTopTextChange} />
          </div>
          <div>
            <label htmlFor="bottomText">Bottom Text:</label>
            <input type="text" id="bottomText" value={bottomText} onChange={handleBottomTextChange} />
          </div>
          <button onClick={handleSaveMeme}>Save Meme</button>
        </div>
      )}
      <h2>Generated Memes</h2>
      {generatedMemes.map((meme, index) => (
        <div key={index}>
          <img src={meme.image} alt="Generated Meme" />
          <div>{meme.topText}</div>
          <div>{meme.bottomText}</div>
        </div>
      ))}
    </div>
  );
};

export default MemeGenerator;

