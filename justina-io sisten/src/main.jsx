import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/home", 
    element:  <App/>
  },
  {
    path: '/',
    element: <Login/>
  }
 ])


createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
