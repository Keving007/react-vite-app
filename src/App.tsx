import { useState } from 'react'

//Importando los modulos de Firebase 
import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth (appFirebase)

//importar nuestros componentes
import Login from '../src/components/Login'
import Home from '../src/components/Home'


import './App.css'

function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })

  return (
    <div>
      {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>}
    </div>
    
  )
}

export default App
