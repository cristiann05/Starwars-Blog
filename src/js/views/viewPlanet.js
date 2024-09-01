import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Importa las imágenes de planetas
import planet1 from '../../img/planets/planet1.jpg';
import planet2 from '../../img/planets/planet2.jpg';
import planet3 from '../../img/planets/planet3.jpg';
import planet4 from '../../img/planets/planet4.jpg';
import planet5 from '../../img/planets/planet5.jpg';
import planet6 from '../../img/planets/planet6.jpg';
import planet7 from '../../img/planets/planet7.jpg';
import planet8 from '../../img/planets/planet8.jpg';
import planet9 from '../../img/planets/planet9.jpg';
import planet10 from '../../img/planets/planet10.jpg';

// Crea un diccionario de imágenes basado en el ID
const planetImages = {
  1: planet1,
  2: planet2,
  3: planet3,
  4: planet4,
  5: planet5,
  6: planet6,
  7: planet7,
  8: planet8,
  9: planet9,
  10: planet10,
};

const PlanetDetail = () => {
  const { id } = useParams(); // Obtiene el id del URL
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
        const data = await response.json();
        setPlanet(data.result);
      } catch (error) {
        console.error('Error fetching planet details:', error);
      }
    };

    fetchPlanet();
  }, [id]);

  if (!planet) return <div>Loading...</div>;

  // Convierte el id a número si es necesario
  const planetId = parseInt(id, 10);
  
  // Obtén la imagen del planeta según el id
  const planetImage = planetImages[planetId] || 'path/to/default-image.jpg'; // Cambia la ruta a una imagen predeterminada si es necesario

  return (
    <div className="container my-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/planets">Planets</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {planet.properties.name}
          </li>
        </ol>
      </nav>

      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={planetImage}
            className="card-img-top"
            alt={planet.properties.name}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{planet.properties.name}</h5>
            <p className="card-text">
              <strong>Diameter:</strong> {planet.properties.diameter} km <br />
              <strong>Climate:</strong> {planet.properties.climate} <br />
              <strong>Gravity:</strong> {planet.properties.gravity} <br />
              <strong>Terrain:</strong> {planet.properties.terrain} <br />
              <strong>Population:</strong> {planet.properties.population}
            </p>
            <Link to="/planets" className="btn btn-secondary">Back to Planets</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
