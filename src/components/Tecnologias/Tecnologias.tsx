import React from 'react';
import './Tecnologias.css';

const Tecnologias = () => {
  return (
    <div className="tecnologias-container">
      <h2 className="text-center mb-4">Tecnologías que Utilizamos</h2>
      <div className="row">
        {/* React.js */}
        <div className="col-md-4">
          <div className="card shadow-sm tecnologia-card">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
              className="card-img-top tecnologia-img" 
              alt="React Logo" 
            />
            <div className="card-body">
              <h5 className="card-title">React.js</h5>
              <p className="card-text">Una biblioteca para construir interfaces de usuario interactivas.</p>
            </div>
          </div>
        </div>
        
        {/* Firebase */}
        <div className="col-md-4">
          <div className="card shadow-sm tecnologia-card">
            <img 
              src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-standard.png" 
              className="card-img-top tecnologia-img" 
              alt="Firebase Logo" 
            />
            <div className="card-body">
              <h5 className="card-title">Firebase</h5>
              <p className="card-text">Plataforma de desarrollo para crear aplicaciones móviles y web.</p>
            </div>
          </div>
        </div>

        {/* Vite */}
        <div className="col-md-4">
          <div className="card shadow-sm tecnologia-card">
            <img 
              src="https://vitejs.dev/logo.svg" 
              className="card-img-top tecnologia-img" 
              alt="Vite Logo" 
            />
            <div className="card-body">
              <h5 className="card-title">Vite</h5>
              <p className="card-text">Un entorno de desarrollo rápido y moderno para aplicaciones web.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
