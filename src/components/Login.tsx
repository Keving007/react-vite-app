import React, { useState } from 'react';
import Imagen from '../assets/login_imagen_fondo.png';
import ImageProfile from '../assets/user_login.png';
import './Login.css';
import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate para redirigir

const auth = getAuth(appFirebase);

const Login = () => {
  const [registrando, setRegistrando] = useState(false);
  const navigate = useNavigate();  // Configura la navegación

  const functAutenticacion = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const correo = e.currentTarget.email.value;
    const contraseña = e.currentTarget.password.value;

    try {
      if (registrando) {
        // Verificar si el usuario ya existe
        const signInMethods = await fetchSignInMethodsForEmail(auth, correo);
        if (signInMethods.length > 0) {
          alert('Este usuario ya existe. Por favor, inicia sesión.');
          return;
        }
        // Si no existe, procede a registrarlo
        await createUserWithEmailAndPassword(auth, correo, contraseña);
        alert('Registro exitoso');
      } else {
        await signInWithEmailAndPassword(auth, correo, contraseña);
        alert('Inicio de sesión exitoso');
      }
      navigate('/Tecnologias');  // Redirige al usuario al Home tras login/registro exitoso
    } catch (error) {
      alert(
        registrando
          ? 'La contraseña debe tener 6 caracteres o el Usuario Existe.'
          : 'El correo o la contraseña son incorrectos.'
      );
    }
  };

  return (
    <div className="ini">
      <div className="row">
        {/* Columna más pequeña del formulario */}
        <div className="col-md-5">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={ImageProfile} alt="" className="estilo-profile" />
              <form onSubmit={functAutenticacion}>
                <input type="text" placeholder="Ingresar Email" className="cajatexto" id="email" />
                <input type="password" placeholder="Ingresar Contraseña" className="cajatexto" id="password" />
                <button className="btnform">{registrando ? 'Registrarse' : 'Iniciar Sesión'}</button>
              </form>
              <h4 className="texto">
                {registrando ? 'Si ya tienes Cuenta' : '¿No tienes cuenta?'}{' '}
                <button className="btnswitch" onClick={() => setRegistrando(!registrando)}>
                  {registrando ? 'Iniciar sesión' : 'Registrarse'}
                </button>
              </h4>
            </div>
          </div>
        </div>
        {/* Columna más grande */}
        <div className="col-md-7">
          <img src={Imagen} alt="" className="tamaño-imagen" />
        </div>
      </div>
    </div>
  );
};

export default Login;
