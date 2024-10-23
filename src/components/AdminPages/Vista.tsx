import React from 'react';
import Form from './Form';
import List from './List';
import { useNavigate } from 'react-router-dom';
import './Vista.css';

const Vista = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', overflowY: 'auto' }}>
      <div className="container">
        {/* Botón de Volver en la esquina superior izquierda */}
        <div className="d-flex justify-content-start mt-3">
          <button 
            className="btn btn-primary"
            onClick={() => navigate(-1)} // Regresar a la página anterior
          >
            Volver
          </button>
        </div>
        
        <div className="row g-1 mt-4">
          <div className="col-md-4">
            <Form />
          </div>

          <div className="col-md-8">
            <h2 className="text-center">Lista de clientes</h2>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vista;
