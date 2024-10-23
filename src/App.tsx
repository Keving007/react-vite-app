import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import appFirebase from './credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Tecnologias from './components/Tecnologias/Tecnologias';
import Inicio from './components/Inicio';

import Vista from './components/AdminPages/Vista';

import './App.css';

const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState<any | null>(null);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    return () => unsuscribe();
  }, []);

  return (
    <Router>
      <Navbar correoUsuario={usuario?.email || null} />
      <Routes>
        {/* Redirigir a la pantalla de inicio al acceder a la raíz */}
        <Route path="/" element={<Navigate to="/inicio" />} />
        
        <Route path="/login" element={usuario ? <Navigate to="/home" /> : <Login />} />
        <Route path="/admin/vista" element={<Vista />} />
        <Route path="/home" element={usuario ? <Home correoUsuario={usuario.email} /> : <Navigate to="/login" />} />
        <Route path="/tecnologias" element={usuario ? <Navigate to="/home" /> : <Tecnologias />} />
        <Route path="/inicio" element={usuario ? <Navigate to="/home" /> : <Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;
