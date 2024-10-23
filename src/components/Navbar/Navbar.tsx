import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ correoUsuario, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {!correoUsuario ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/inicio">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tecnologias">Tecnologías</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Iniciar Sesión</Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
              
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
