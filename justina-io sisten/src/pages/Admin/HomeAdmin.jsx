import { NavLink, Outlet } from "react-router-dom"
import  './estilos/HomeAdmin.component.css'
// eslint-disable-next-line react/prop-types
export default function HomeAdmin() {
  return (
    <div className="container-admin">
    <header className='header-admin'>
      <ul>
        <li>
          <NavLink to={'/admin/perfil'} >Perfil</NavLink>
        </li>
      </ul>
    </header>
    <main id="detail" className= 'main-admin'>
      <Outlet/>
    </main>
    </div>
  )
}
