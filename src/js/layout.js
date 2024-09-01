import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop';
import Home from './views/home';
import Characters from './views/characters';
import Vehicles from './views/vehicles';
import Planets from './views/planets';
import CharacterDetail from './views/viewCharacter';
import PlanetDetail from './views/viewPlanet';
import VehicleDetail from './views/viewVehicle';
import injectContext from './store/appContext';
import Navbar from './component/navbar';
import FloatingCart from './views/FloatingCart'; 

const Layout = () => {
  const basename = process.env.BASENAME || '';

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicle/:id" element={<VehicleDetail />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planet/:id" element={<PlanetDetail />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <FloatingCart />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
