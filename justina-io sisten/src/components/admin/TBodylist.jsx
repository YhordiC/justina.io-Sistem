import { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function TBodylist({lista = [],}) {
    const [openMesaje, setOpenMesaje] = useState(false)
  return (<>
               <tr className="relative" >
                 <td>{lista.firstName}</td>
                 <td>{lista.lastName}</td>
                 <td>{lista.email}</td>
                 <td>{lista.estado ? 'Activo' : 'Desactivado'}</td>
                 <td>{lista.phone}</td>
                 <td>
                    <button onClick={() => setOpenMesaje(true)} className="w-full h-full cursor-pointer">:</button>
                 </td>
                 <td className={'right-0  top-0 absolute bg-white flex flex-col  pt-8'} 
                 style={{
                    display: openMesaje ? 'flex' : 'none'
                 }}
                 >
                 <button onClick={() => {setOpenMesaje(false)}} className="absolute top-2 right-2 bg-black  p-0 rounded-sm cursor-pointer 
                 hover:scale-110 hover:border-none transition-transform">
                 <img src="/closeIcon.png" alt="icono de cerrar" className="w-6 h-6" />
                 </button>
                   <button className="background-blue-500 bg-green-600 px-4 text-white mt-2 border-b-2">Deshabilitar</button>
                   <button className="background-blue-500 bg-green-600 px-4 text-white">Ver perfil</button>
                 </td>

                </tr>
               </>
               
  )
}
