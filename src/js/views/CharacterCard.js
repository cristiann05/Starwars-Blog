import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const CharacterCard = ({ character }) => {
  const { store, actions } = useContext(Context);
  const isFavorite = store.favorites.includes(character.uid);

  const handleFavoriteClick = () => {
    actions.toggleFavorite(character.uid);
  };

  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? '💔' : '❤️'}
      </button>
    </div>
  );
};

export default CharacterCard;
