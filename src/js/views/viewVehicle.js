import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Importa las imágenes de vehículos
import vehicle1 from '../../img/vehicles/vehicle1.jpg';
import vehicle2 from '../../img/vehicles/vehicle2.jpg';
import vehicle3 from '../../img/vehicles/vehicle3.jpg';
import vehicle4 from '../../img/vehicles/vehicle4.jpg';
import vehicle5 from '../../img/vehicles/vehicle5.jpg';
import vehicle6 from '../../img/vehicles/vehicle6.jpg';
import vehicle7 from '../../img/vehicles/vehicle7.jpg';
import vehicle8 from '../../img/vehicles/vehicle8.jpg';
import vehicle9 from '../../img/vehicles/vehicle9.jpg';
import vehicle10 from '../../img/vehicles/vehicle10.jpg';
import defaultImage from '../../img/vehicles/vehicle1.jpg';

// Crea un diccionario de imágenes basado en el ID
const vehicleImages = {
  4: vehicle1,
  7: vehicle2,
  6: vehicle3,
  8: vehicle4,
  14: vehicle5,
  18: vehicle6,
  16: vehicle7,
  19: vehicle8,
  20: vehicle9,
  24: vehicle10,
};

const VehicleDetail = () => {
  const { id } = useParams(); // Obtiene el id del URL
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
        const data = await response.json();
        setVehicle(data.result);
      } catch (error) {
        console.error('Error fetching vehicle details:', error);
      }
    };

    fetchVehicle();
  }, [id]);

  if (!vehicle) return <div>Loading...</div>;

  // Convierte el id a número si es necesario
  const vehicleId = parseInt(id, 10);
  
  // Obtén la imagen del vehículo según el id
  const vehicleImage = vehicleImages[vehicleId] || defaultImage;

  return (
    <div className="container my-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {vehicle.properties.name}
          </li>
        </ol>
      </nav>

      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={vehicleImage}
            className="card-img-top"
            alt={vehicle.properties.name}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{vehicle.properties.name}</h5>
            <p className="card-text">
              <strong>Model:</strong> {vehicle.properties.model} <br />
              <strong>Manufacturer:</strong> {vehicle.properties.manufacturer} <br />
              <strong>Cost in Credits:</strong> {vehicle.properties.cost_in_credits} <br />
              <strong>Length:</strong> {vehicle.properties.length} <br />
              <strong>Max Atmosphering Speed:</strong> {vehicle.properties.max_atmosphering_speed} <br />
              <strong>Crew:</strong> {vehicle.properties.crew} <br />
              <strong>Passengers:</strong> {vehicle.properties.passengers} <br />
              <strong>Cargo Capacity:</strong> {vehicle.properties.cargo_capacity} <br />
              <strong>Consumables:</strong> {vehicle.properties.consumables} <br />
              <strong>Vehicle Class:</strong> {vehicle.properties.vehicle_class}
            </p>
            <Link to="/vehicles" className="btn btn-secondary">Back to Vehicles</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
