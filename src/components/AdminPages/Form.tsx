import credenciales from '../../credenciales'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useState } from 'react'

const db = getFirestore(credenciales)
const storage = getStorage(credenciales)



const Form = () => {

    const cliente = {
      nombre: '',
      direccion: '',
      telefono: '',
      web: '',
      email: '',
    }

    const [client, setClient] = useState(cliente);
    const [url, setUrl] = useState("")
    const [habilitar, setHabilitar] = useState(false) 

    
    const handleChange = (e)=>{
      const {name, value} = e.target;
      setClient({...client, [name]:value});

    }


    const fileHandler = async (e)=>{
      try {
        //Detectar el archivo
        const archivoI = e.target.files[0];
        //Cargar la imagen al Storage
        const refArchivo = ref(storage, `clientes/${archivoI.name}`)
        await uploadBytes(refArchivo, archivoI)
        //Obtener la url de la imagen 
        const url= await getDownloadURL(refArchivo)
        setUrl(url)
        alert('Imagen Guardada con Exito')
        setHabilitar(true)
      } catch (error) {
        alert('Error')
      }

    }

    const saveClient = async (e)=>{
      e.preventDefault();
      try {
          const newClient = {
            nombre: client.nombre,
            direccion: client.direccion,
            web: client.web,
            email: client.email,
            telefono: client.telefono,
            foto: url
          }

          await addDoc(collection(db, "clientes"), newClient)
          alert("cliente guardado con exito")
          setClient(cliente)
          e.target.foto.value = ""
          setHabilitar(false)
      } catch (error) {
        alert(error)
        
      }

    }






  return (
    <div>
        <div className='shadow-sm rounded mt-5'>
            <h4 className='text-center'>Regsitro de clientes</h4>
            <form className='p-4' onSubmit={saveClient}>
              <div className='form-floating'>
              <input type="text" 
                className='form-control mt-2 mb-2'
                id='"floatingInput'
                placeholder='Ingrese nombre'
                name='nombre'
                onChange={handleChange}
                value={client.nombre}
                required
              />
              <label htmlFor="floatingInput">Ingresar Nombre</label>
              </div>
              
              <div className='form-floating'>
                <input type="text" 
                  className='form-control mt-2 mb-2'
                  id='floatingInput'
                  placeholder='Ingrese nombre'
                  name='direccion'
                  onChange={handleChange}
                  value={client.direccion}
                  required
                />
                <label htmlFor="floatingInput">Ingresar Dirección</label>
              </div>
              <div className='form-floating'>
                <input type="text" 
                  className='form-control mt-2 mb-2'
                  id='floatingInput'
                  placeholder='Ingrese nombre'
                  name='telefono'
                  onChange={handleChange}
                  value={client.telefono}
                  required
                />
                <label htmlFor="floaringInput">Ingresar Teléfono</label>
              </div>
              <div>
                <label >Elegir Foto de Perfil</label>
                <input type="file" 
                  id='foto'
                  className='form-control'
                  onChange={fileHandler}
                  required
                />
              </div>
              <div className='form-floating'>
                <input type="text" 
                  className='form-control mt-2 mb-2'
                  id='floatingInput'
                  placeholder='Ingresar web'
                  name='web'
                  onChange={handleChange}
                  value={client.web}
                  required
                />
                <label htmlFor="floatinInput">Web</label>
              </div>
              <div className='form-floating'>
                <input type="email" 
                  className='form-control mt-2 mb-2'
                  id='floatingInput'
                  placeholder='Ingrese nombre'
                  name='email'
                  onChange={handleChange}
                  value={client.email}
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <button className= {habilitar ? "form-control btn btn-primary" : "form-control btn btn-secondary disabled"}>{habilitar ? "Guardar Producto" : "Completar los campos"}</button>
            </form>
        </div>
    </div>
  )
}

export default Form