import { useEffect, useState } from 'react'
import './App.css'
import useUsers from './hooks/useUsers'
import useAsyncAwait from './hooks/useAsyncAwait';
import useFetchData from './hooks/useFetchData';
import useHttpData from './hooks/useHttpData';


type user = {
  id?:string,
  name:string
}

function App() {

 // const {loading,error,users} = useUsers();
  const url = 'https://jsonplaceholder.typicode.com/users';

  // utiliza el Fetch dinámico para obtener cualquier tipo de información, se pasa la url como prop y el resultado es tipado como <user>
  // data:pasa como tipado de users
  //const {loading,error,data:users} = useFetchData<user>(url);
  const {loading,error,data:users, deleteData:deleteUser,updateData:updateUser} = useHttpData<user>(url)


  if(loading) return <p>Cargando</p>
  if(error && !loading) return <p>Ha ocurrido un error {error}</p>

  //const [user, setUsers] = useState<string[]>()

  //1.se ejecuta el efecto justo despues de renderizar y al pasarle el segundo argumento solo lo hace por unica vez
  /*  useEffect(()=>{
      console.log('llamando al servidor...')
      const data = ['isai','santana']
      setUsers(data)
  },[]);*/

  /**
   * 2.EL EFECTO ESTA A LA ESCUCHA DE CUANDO UNA VARIABLE CAMBIA,
   * CUANDO LA VARIABLE QUE SE PASA POR EL SEGUNDO ARGUMENTO CAMBIA, EL EFECTO SE EJECUTA
   */
  /*const [token, setToken] = useState<string>()
  useEffect(()=>{
      console.log('buscnado algo con el token...',token,)
  },[token]);*/  
  return (
    <>
        {/*<div><button onClick={()=>setToken(Math.floor.toString())}>Iniciar sesión</button></div>*/}
        <div>Raldoo Soft</div>
        <ul>
          {/*<button onClick={()=>({name:'SANTANA 1'})}>Enviar</button>*/}
          {/*<button onClick={()=>deleteUser(1)}>ELIMINAR</button>*/}
          <button onClick={()=> updateUser( { id:1,name:'MEGATRON XSR14-3'} ) }>ACTUALIZAR</button>

          {users?.map((user)=>(
              <li key={user.id}>{user.id} {user.name}</li>
          ))}
        </ul>

    </>
  )
}

export default App
