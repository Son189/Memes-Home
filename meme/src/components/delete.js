import React from 'react';

function DeleteButton({ memeId }) {
  const handleDelete = () => {
    fetch(`http://localhost:4567/memes/${memeId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // handle successful deletion of meme
        } else {
          // handle unsuccessful deletion of meme
        }
      })
      .catch((error) => {
        // handle error
      });
  };

  return <button onClick={handleDelete}>Delete</button>;
}
export default DeleteButton
