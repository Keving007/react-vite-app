import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './Home.css';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
    return (
        <div className="home-container">
            <h2 className="home-title">Bienvenido Admin: {correoUsuario}</h2>
            <button className="btn btn-alert btn-logout" onClick={() => signOut(auth)}>Logout</button>
            
            <div className="button-container">
                <Link to="/admin/vista"> {/* Cambia esto a la ruta que quieras usar */}
                    <button className="btn btn-success">Crud de Clientes</button>
                </Link>

            </div>
        </div>
    );
};

export default Home;
