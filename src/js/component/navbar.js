import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/navbar.css';
import imagen from '../../img/starswars.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={imagen} alt="Star Wars Logo" className="logo-img" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/characters' ? 'active' : ''}`} to="/characters">Characters</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/planets' ? 'active' : ''}`} to="/planets">Planets</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/vehicles' ? 'active' : ''}`} to="/vehicles">Vehicles</Link>
            </li>
          </ul>

          <div id="loader">
            <div className="ls-particles ls-part-1"></div>
            <div className="ls-particles ls-part-2"></div>
            <div className="ls-particles ls-part-3"></div>
            <div className="ls-particles ls-part-4"></div>
            <div className="ls-particles ls-part-5"></div>
            <div className="lightsaber ls-left ls-green"></div>
            <div className="lightsaber ls-right ls-red"></div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
