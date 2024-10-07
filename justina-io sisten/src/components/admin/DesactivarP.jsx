import { useLocation } from "react-router";

// eslint-disable-next-line react/prop-types
export default function DesactivarP({idPaciente}) {
     let urlEliminar = 'https://backend-justina-deploy.onrender.com/api/medical/delete/';    
        const token = sessionStorage.getItem('token');   
        const {pathname} = useLocation()

        if(pathname === '/admin/pacientes'){
            urlEliminar = 'https://backend-justina-deploy.onrender.com/api/patient/'
        } 
    console.log(pathname) 
    function handleDesactivar(){
        fetch(`${urlEliminar}${idPaciente}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            if(res.ok){
                console.log('Se desactivo al paciente exitosamente');
            }
        })
    }
    return (        
     <button onClick={handleDesactivar} className="background-blue-500 bg-green-600 px-4 text-white mt-2 border-b-2"
      >Deshabilitar
     </button>
  )
}
