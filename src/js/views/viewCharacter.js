import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Importa las imágenes de personajes
import character1 from '../../img/characters/character1.jpg';
import character2 from '../../img/characters/character2.jpg';
import character3 from '../../img/characters/character3.jpg';
import character4 from '../../img/characters/character4.jpg';
import character5 from '../../img/characters/character5.jpg';
import character6 from '../../img/characters/character6.jpg';
import character7 from '../../img/characters/character7.jpg';
import character8 from '../../img/characters/character8.jpg';
import character9 from '../../img/characters/character9.jpg';
import character10 from '../../img/characters/character10.jpg';

// Crea un diccionario de imágenes basado en el ID
const characterImages = {
  1: character1,
  2: character2,
  3: character3,
  4: character4,
  5: character5,
  6: character6,
  7: character7,
  8: character8,
  9: character9,
  10: character10,
};

const CharacterDetail = () => {
  const { id } = useParams(); // Obtiene el id del URL
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
        const data = await response.json();
        setCharacter(data.result);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) return <div>Loading...</div>;

  // Convierte el id a número si es necesario
  const characterId = parseInt(id, 10);
  
  // Obtén la imagen del personaje según el id
  const characterImage = characterImages[characterId] || 'path/to/default-image.jpg'; // Cambia la ruta a una imagen predeterminada si es necesario

  return (
    <div className="container my-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/characters">Characters</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {character.properties.name}
          </li>
        </ol>
      </nav>
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={characterImage}
            className="card-img-top"
            alt={character.properties.name}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{character.properties.name}</h5>
            <p className="card-text">
              <strong>Height:</strong> {character.properties.height} <br />
              <strong>Mass:</strong> {character.properties.mass} <br />
              <strong>Hair Color:</strong> {character.properties.hair_color} <br />
              <strong>Skin Color:</strong> {character.properties.skin_color} <br />
              <strong>Eye Color:</strong> {character.properties.eye_color} <br />
              <strong>Birth Year:</strong> {character.properties.birth_year} <br />
              <strong>Gender:</strong> {character.properties.gender}
            </p>
            <Link to="/characters" className="btn btn-secondary">Back to Characters</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
