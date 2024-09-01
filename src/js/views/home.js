import React, { useEffect, useContext } from 'react';
import FloatingCart from '../views/FloatingCart.js';
import { Context } from '../store/appContext.js';
import backgroundImg from '../../img/background.jpg';
import '../../styles/home.css';

const Home = () => {
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();
    actions.getPlanets();
  }, [actions]);

  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="hero-text">
        <h1>Welcome to the Star Wars Universe</h1>
        <p>Explore the galaxy like never before</p>
      </div>
      <FloatingCart />
    </div>
  );
};

export default Home;
