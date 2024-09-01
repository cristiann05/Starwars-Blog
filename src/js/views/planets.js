import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext'; 
import { Link } from 'react-router-dom'; 

// Importa las imágenes locales
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

// Mapea las imágenes a un array
const images = [
  planet1, planet2, planet3, planet4, planet5,
  planet6, planet7, planet8, planet9, planet10
];

const Planets = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanets(); // Llama a la acción para obtener planetas
  }, [actions]);

  // Limita el número de planetas mostrados si hay más de 10
  const planetsToShow = store.planets.slice(0, 10);

  return (
    <div className="container">
      <h1 className="my-5">Planets</h1>
      <div className="row">
        {planetsToShow.map((planet, index) => {
          const detailsUrl = `/planet/${planet.uid}`;
          const isFavorite = store.favorites.planets.includes(planet.uid);

          return (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card">
                <img
                  src={images[index % images.length]}
                  className="card-img-top"
                  alt={planet.name || 'Planet'}
                />
                <div className="card-body">
                  <h5 className="card-title">{planet.name || 'Unknown Planet'}</h5>
                  <p className="card-text">Some details about {planet.name || 'this planet'}.</p>
                  <button
                    className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                    onClick={() => actions.toggleFavorite('planets', planet.uid)}
                  >
                    ❤️
                  </button>
                  <Link to={detailsUrl} className="btn btn-primary ms-2">View Details 🌟</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Planets;
