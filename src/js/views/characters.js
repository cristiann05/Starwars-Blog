import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

// Importa las imágenes locales
import image1 from '../../img/characters/character1.jpg';
import image2 from '../../img/characters/character2.jpg';
import image3 from '../../img/characters/character3.jpg';
import image4 from '../../img/characters/character4.jpg';
import image5 from '../../img/characters/character5.jpg';
import image6 from '../../img/characters/character6.jpg';
import image7 from '../../img/characters/character7.jpg';
import image8 from '../../img/characters/character8.jpg';
import image9 from '../../img/characters/character9.jpg';
import image10 from '../../img/characters/character10.jpg';

// Mapea las imágenes a un array
const images = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10
];

const Characters = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacters(); // Llama a la acción para obtener los personajes
  }, [actions]);

  // Limita el número de personajes mostrados si hay más de 10
  const charactersToShow = store.characters.slice(0, 10);

  return (
    <div className="container">
      <h1 className="my-5">Characters</h1>
      <div className="row">
        {charactersToShow.map((character, index) => {
          // Construye la URL de detalles usando el id del personaje
          const detailsUrl = `/character/${character.uid}`;

          return (
            <div key={index} className="col-lg-3 col-md-3 col-sm-4 mb-4">
              <div className="card">
                <img
                  src={images[index % images.length]}
                  className="card-img-top"
                  alt={character.name || 'Character'}
                />
                <div className="card-body">
                  <h5 className="card-title">{character.name || 'Unknown Character'}</h5>
                  <p className="card-text">Some details about {character.name || 'this character'}.</p>
                  <button
                    className={`btn ${store.favorites.characters.includes(character.uid) ? 'btn-danger' : 'btn-outline-danger'}`}
                    onClick={() => actions.toggleFavorite('characters', character.uid)}
                  >
                    ❤️
                  </button>
                  <Link to={detailsUrl} className="btn btn-primary ms-2">View Hero Stats 🌟</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
