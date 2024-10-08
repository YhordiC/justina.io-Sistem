import { useState } from "react";
import DesactivarP from "./DesactivarP";
import VerPerfil from "./VerPerfil";
// eslint-disable-next-line react/prop-types
export default function TBodylist({lista = [],}) {
  let type = lista.specialities ? 'medico' : 'paciente';
    const [openMesaje, setOpenMesaje] = useState(false)
    const [openPerfil, setOpenPerfil] = useState(false)
  return (<>
               <tr className="relative" >
                 <td>{lista.firstName}</td>
                 <td>{lista.lastName}</td>
                 <td>{lista.email}</td>
                 <td>{lista.active ? 'Activo' : 'Desactivado'}</td>
                 <td>{lista.phone}</td>
                 <td>
                    <button onClick={() => setOpenMesaje(true)} className="w-full h-full cursor-pointer">:</button>
                 </td>
                 <td className={'right-0  top-0 absolute bg-white flex flex-col  pt-8 z-[5]'} 
                 style={{
                    display: openMesaje ? 'flex' : 'none'
                 }}
                 >
                 <button onClick={() => {setOpenMesaje(false)}} className="absolute top-2 right-2 bg-black  p-0 rounded-sm cursor-pointer 
                 hover:scale-110 hover:border-none transition-transform">
                 <img src="/closeIcon.png" alt="icono de cerrar" className="w-6 h-6" />
                 </button>
                  <DesactivarP idPaciente={lista.id} />
                   <button  onClick={() => setOpenPerfil(!openPerfil)}
                    className="background-blue-500 bg-green-600 px-4 text-white">Ver perfil</button>
                   <div className={` rounded-md inset-0 transition-all fixed left-0 top-0 bg-blue-950
                      w-full h-min max-w-[500px] m-auto flex justify-center items-center 
                      ${openPerfil ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                   <VerPerfil type={type} profile={lista} />
                    </div>
                 </td>

                </tr>
               </>
               
  )
}
