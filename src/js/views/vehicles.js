import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

// Importa las imágenes locales
import image1 from '../../img/vehicles/vehicle1.jpg';
import image2 from '../../img/vehicles/vehicle2.jpg';
import image3 from '../../img/vehicles/vehicle3.jpg';
import image4 from '../../img/vehicles/vehicle4.jpg';
import image5 from '../../img/vehicles/vehicle5.jpg';
import image6 from '../../img/vehicles/vehicle6.jpg';
import image7 from '../../img/vehicles/vehicle7.jpg';
import image8 from '../../img/vehicles/vehicle8.jpg';
import image9 from '../../img/vehicles/vehicle9.jpg';
import image10 from '../../img/vehicles/vehicle10.jpg';

// Mapea las imágenes a un array
const images = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10
];

const Vehicles = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getVehicles();
  }, [actions]);

  const vehiclesToShow = (store.vehicles || []).slice(0, 10);

  return (
    <div className="container">
      <h1 className="my-5">Vehicles</h1>
      <div className="row">
        {vehiclesToShow.map((vehicle, index) => {
          const detailsUrl = `/vehicle/${vehicle.uid}`;
          const isFavorite = store.favorites.vehicles.includes(vehicle.uid);

          return (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card">
                <img
                  src={images[index % images.length]}
                  className="card-img-top"
                  alt={vehicle.name || 'Vehicle'}
                />
                <div className="card-body">
                  <h5 className="card-title">{vehicle.name || 'Unknown Vehicle'}</h5>
                  <p className="card-text">Some details about {vehicle.name || 'this vehicle'}.</p>
                  <button
                    className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                    onClick={() => actions.toggleFavorite('vehicles', vehicle.uid)}
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

export default Vehicles;
