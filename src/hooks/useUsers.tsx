import { useEffect, useState } from 'react'
type user = {
    id:string,
    name:string
  }
function useUsers() {
    const [users,setUsers] = useState<user[]>([]);
    const [loading,setLoading]=useState<boolean>(false)
  
    const [error,setError] = useState<string>();
  
    useEffect(()=>{
      const url = 'https://jsonplaceholder.typicode.com/users';
      setLoading(true)
      fetch(url)
        .then((response) =>{
          if(!response.ok) throw new Error(`${response.status}`)
  
          //esta linea, asigna el tipado al resultado del endpoint
          return response.json() as Promise<user[]>;
        })
        .then((data)=>setUsers(data))
        .catch((error: Error) => setError(error.message))
        .finally(()=>setLoading(false))
    },[])
    
return {users,loading,error}
}

export default useUsers