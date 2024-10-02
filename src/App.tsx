import { useEffect, useState } from 'react'
import './App.css'

type user = {
  id:string,
  name:string
}
function App() {
  const [users,setUsers] = useState<user[]>([]);
  const [loading,setLoading]=useState<boolean>(false)

  const [error,setError] = useState<string>();

  useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    setLoading(true)
    fetch(url)
      .then((response) =>{
        if(!response.ok)throw new Error(`${response.status}`)
        //esta linea, asigna el tipado al resultado del endpoint
        return response.json() as Promise<user[]>;
      })
      .then((data)=>setUsers(data))
      .catch((error:Error) => setError(error.message))
      .finally(()=>setLoading(false))

  },[])

  if(loading) return <p>Cargando</p>
  if(error && !loading) return <p>Ha ocurrido un error</p>

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
        {users?.map((user)=>(
            <li key={user.id}>{user.id} {user.name}</li>
        ))}
        </ul>

    </>
  )
}

export default App
