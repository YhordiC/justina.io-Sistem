import { useEffect, useState } from "react"
import { decodeToken } from 'react-jwt' 
export default function PerfilAdmin() {

 const [perfil,setPerfil] = useState([])

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    console.log(token)
    const desifrado = decodeToken(token)
  fetch('https://backend-justina-deploy.onrender.com/api/user/'+desifrado.id,{
    'method': 'GET',
    'headers':{ 
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token
    },
    }).then( res => res.json())
      .then( datos => setPerfil(datos.data))
  }, [])
  return (
    <div className="p-10">
        <h6 className="mt-5 text-3xl font-semibold">Bienvenido a tu perfil {perfil.firstName}</h6>

        <div className="flex gap-3">
            <div className=" w-16 h-16 rounded-full bg-blue-600 flex justify-center items-center">
              <p className="text-3xl text-white  font-bold">Y</p>
            </div>
          <div className="text-end mt-3 flex gap-2 flex-col ">
               <p className="text-5xl font-medium">{perfil.firstName}</p>
               <p>{perfil.lastName}</p>
               <p className="text-xs text-current">{perfil.email}</p>
            <p className="font-semibold">Telefono</p><p>{perfil.phone}</p>
            <p className="font-semibold">Rol</p><p>{perfil.role ?? 'Administrador'  }</p>
            <p className="font-semibold">Estado de ceunta</p><p>{perfil.estado ? 'Activo' : 'Desactivado'}</p>
          </div>
        </div>
        
    </div>
  )
}
