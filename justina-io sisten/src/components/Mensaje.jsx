import { useState } from "react"

// eslint-disable-next-line react/prop-types
export default function Mensaje({children,estado = false, className}) {
  const [EstadoLocal, setLocal] = useState(estado)
  
  return (
    <div className={`${className} p-10 bg-red-500 text-white rounded-lg shadow-md shadow-red-400 absolute top-[45%] 
     max-w-[400px]   `}
     style={{
      display: EstadoLocal ? 'block' : 'none'
     }} >
      <button onClick={() => {setLocal(false)}} className="absolute top-2 right-2 bg-black  p-0 rounded-sm cursor-pointer 
      hover:scale-110 hover:border-none transition-transform">
       <img src="/closeIcon.png" alt="icono de cerrar" className="w-6 h-6" />
      </button>
    
    <div className="flex flex-col">{children}</div>
    </div>
  )
}
