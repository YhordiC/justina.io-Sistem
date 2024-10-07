import { NavLink, Outlet } from "react-router-dom"
import  './estilos/HomeAdmin.component.css'
import { useState } from "react"
import useScreenSize from "../../hooks/useScreenSize"
import Button from "../../components/Button"
// eslint-disable-next-line react/prop-types
export default function HomeAdmin() {
  const [isOpen, setisOpen] = useState(true)
  const {width} = useScreenSize()

  
  return (
    <div className="container-admin">
    <header className={`transition-all  overflow-hidden w-[400px] ${isOpen
     ? '  max-lg:w-[90%] relative  max-w-[400px]'
     : 'w-[80px] h-[80px] absolute pl-2 bg-transparent'} 
    max-lg:absolute bg-black h-full max-lg:z-30  ` }>
      <Button onClick={() => setisOpen(!isOpen) } 
      className={` top-0 right-2  z-10 ${isOpen ? 'absolute' : ' relative'}`}
       >{isOpen ? 'X' : '='}</Button>
      <ul className={`transition-opacity mt-5 flex gap-5 flex-col ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <li>
          <NavLink to={'/admin/perfil'} >Perfil</NavLink>
        </li>
        <li>
          <NavLink to={'/admin/medicos'} >Lista de medicos</NavLink>
        </li>
        <li>
        <NavLink to={'/admin/pacientes'} >Lista de pacientes</NavLink>
        </li>
      </ul>
    </header>
    <main id="detail" className= 'main-admin'>
      <Outlet/>
    </main>
    </div>
  )
}
