import { decodeToken } from 'react-jwt'
import Input from '../components/Input'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import Cargando from '../components/icons/Cargando'
import Mensaje from '../components/Mensaje'


export default function Login() { 
    const navigate = useNavigate()
    const [loadin, setLoadin] = useState(false)
    const [error, setError] = useState(false)

function EnviarPage(Rol){  
    if(Rol == "ADMIN"){
      navigate('/admin/medicos')
      return
   }
   if( Rol == 'DOCTOR'){
    navigate('/medico')
    return
   }
   navigate('/paciente')
   return
  }

  
    function APiLogin(email, password){
     
           try{
               fetch('https://backend-justina-deploy.onrender.com/api/login',
                   {'method': 'POST',
                   'headers': {
                       'Content-Type': 'application/json'
                   },
                   'body': JSON.stringify({
                       email: email.value,
                       password: password.value
                   })
               }
               )
               .then(res => {

                 setLoadin(false)
                 if(res.status == 200){
                   return res.json()
                 }  else {
                  setError(true)
                   console.error ( 'error en ', res.status)
                 }
                   
               })
               .then(data => {
                 const token =  decodeToken(data.jwtToken)
                sessionStorage.setItem('token', data.jwtToken)
                 console.log(token)
                EnviarPage(token.role)
               })
               
           }
           catch(error){
            setLoadin(false)
               console.error(error, 'en la petición')
           }
           
       }
      const  handleSubmit = (e)  => {
        e.preventDefault()
        setLoadin(true)
        let {email, password} = e.target.elements
        APiLogin(email, password)
       
    }
  return (
    <>
    <div className='absolute  w-full h-full '>
    <img src='/JustinaIO.svg' alt='logo de justina' className='absolute  w-full h-full drop-shadow-[0px_0px_35px_#23d7eed4] object-cover '/>
    </div>
    
    <div className={`w-full  max-w-md m-auto bg-blue-500 p-10 rounded-lg  shadow-black-500/50 shadow-lg relative
      ${loadin ? 'blur-sm' : 'blur-none'}`
    } 
     >
        <h5 className='text-3xl font-bold mb-8'>Login de Justina</h5>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <Input label="Correo" type="text" placeholder="Escribe tu correo" Name="email" className='flex flex-col gap-2'/>
            <Input label="Contraseña" type="password" placeholder="Escribe tu contraseña" Name="password" className='flex flex-col gap-2'/>
            <button className='bg-black p-4 rounded-md hover:bg-slate-900 ' type="submit">Entrar</button>
        </form>
       
    </div>
     {loadin ?
      <div className='absolute  top-0 right-0 w-full h-full flex justify-center items-center gap-2 '>
        Por favor
        <Cargando w={40} h={40} color={'white'} Estilos={'animate-spin'}/>espere 
        </div> : ''}
      { error ?<Mensaje estado={error}>
        Error al logearse, es posible que el correo o la contraseña sean incorrectos
        </Mensaje> : ''}
      </>
  )
}
