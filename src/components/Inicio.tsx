import React from 'react';
import './Inicio.css';

// Asegúrate de importar las imágenes de perfil de tus integrantes
import perfil1 from '../assets/user-1.png'; // Cambia la ruta según sea necesario
import perfil2 from '../assets/user-2.png';
import perfil3 from '../assets/user-3.png';
import perfil4 from '../assets/user-4.png';
import perfil5 from '../assets/user-5.png';

const Inicio = () => {
  return (
<div className='local container'>
      <div className="local-text">
        <h1>¡Bienvenido a Nuestra Página!</h1>
        <p>Esta es la página de inicio de nuestra aplicación</p>
        <p>Esta Página fue realizada con las tecnologías React, Vite y Firebase</p>
      </div>

      {/* Sección de Integrantes */}
      <div className="integrantes">
        <h2>Integrantes del Equipo</h2>
        <div className="integrantes-container">
          <div className="integrante-card">
            <img src={perfil1} alt="Integrante 1" className="perfil-img" />
            <h3>Kevin Guaylla</h3>
            <p>Diseñador</p>
          </div>
          <div className="integrante-card">
            <img src={perfil2} alt="Integrante 2" className="perfil-img" />
            <h3>Michelle Salinas </h3>
            <p>Diseñador</p>
          </div>
          <div className="integrante-card">
            <img src={perfil3} alt="Integrante 3" className="perfil-img" />
            <h3>Valeria Becerra</h3>
            <p>Diseñador</p>
          </div>
          <div className="integrante-card">
            <img src={perfil4} alt="Integrante 4" className="perfil-img" />
            <h3>Jefferson Caranqui</h3>
            <p>Diseñador</p>
          </div>
          <div className="integrante-card">
            <img src={perfil5} alt="Integrante 5" className="perfil-img" />
            <h3>Luis Naranjo</h3>
            <p>Diseñador</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
