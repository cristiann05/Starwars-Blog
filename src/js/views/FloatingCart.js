import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import '../../styles/FloatingCart.css';

const FloatingCart = () => {
  const { store, actions } = useContext(Context);
  const { characters, planets, vehicles, favorites } = store;

  // Filtra los elementos favoritos para cada tipo
  const favoriteCharacters = characters.filter(c => favorites.characters.includes(c.uid));
  const favoritePlanets = planets.filter(p => favorites.planets.includes(p.uid));
  const favoriteVehicles = vehicles.filter(v => favorites.vehicles.includes(v.uid));

  // Maneja la eliminación de favoritos por tipo
  const handleRemoveFavorite = (type, uid) => {
    actions.removeFavorite(type, uid);
  };

  return (
    <div className="floating-cart">
      <div className="cart-icon">❤️</div>
      {(favoriteCharacters.length > 0 || favoritePlanets.length > 0 || favoriteVehicles.length > 0) && (
        <div className="cart-content">
          <h4>Favorites</h4>
          <ul>
            <li>
              <h6>Characters</h6>
              <ul>
                {favoriteCharacters.map((item) => (
                  <li key={item.uid}>
                    {item.name || 'Unknown Character'}
                    <button onClick={() => handleRemoveFavorite('characters', item.uid)} className="remove-button">🗑️</button>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <h6>Planets</h6>
              <ul>
                {favoritePlanets.map((item) => (
                  <li key={item.uid}>
                    {item.name || 'Unknown Planet'}
                    <button onClick={() => handleRemoveFavorite('planets', item.uid)} className="remove-button">🗑️</button>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <h6>Vehicles</h6>
              <ul>
                {favoriteVehicles.map((item) => (
                  <li key={item.uid}>
                    {item.name || 'Unknown Vehicle'}
                    <button onClick={() => handleRemoveFavorite('vehicles', item.uid)} className="remove-button">🗑️</button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FloatingCart;
