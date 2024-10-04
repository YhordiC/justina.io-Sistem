import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import './index.css'
import HomeAdmin from './pages/Admin/HomeAdmin.jsx'
import HomePaciente from './pages/Paciente/HomePaciente.jsx'
import HomeMedico from './pages/Medico/HomeMedico.jsx'
import PerfilAdmin from './pages/Admin/PerfilAdmin.jsx'
import TablaMedico from './pages/Admin/TablaMedico.jsx'


const router = createBrowserRouter([
  {
    path: "/home", 
    element:  <App/>
  },
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <HomeAdmin />,
    children:[
      {
        path: 'perfil',
        element: <PerfilAdmin/>
      },
      {
        path: 'medicos',
        element: <TablaMedico/>
      }
    ]
  },

  {
    path: '/paciente',
    element: <HomePaciente/>
  }
  ,
  {
    path: '/medico',
    element: <HomeMedico/>
  }
 ])


createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
