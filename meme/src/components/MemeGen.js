import React, { useState } from 'react';

function MemeGenerator() {
  const [image, setImage] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('top_text', topText);
    formData.append('bottom_text', bottomText);

    fetch('http://localhost:4567/memes', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // handle successful creation of meme
      })
      .catch((error) => {
        // handle error
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choose an image:
        <input type="file" onChange={(event) => setImage(event.target.files[0])} />
      </label>
      <br />
      <label>
        Top text:
        <input type="text" value={topText} onChange={(event) => setTopText(event.target.value)} />
      </label>
      <br />
      <label>
        Bottom text:
        <input type="text" value={bottomText} onChange={(event) => setBottomText(event.target.value)} />
      </label>
      <br />
      <button type="submit">Create Meme</button>
    </form>
  );
}
export default MemeGenerator