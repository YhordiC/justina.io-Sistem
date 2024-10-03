import { decodeToken } from 'react-jwt'
import Input from '../components/Input'
import { useNavigate } from 'react-router'


export default function Login() { 
    const navigate = useNavigate()

function EnviarPage(Rol){  
    if(Rol == "ADMIN"){
      navigate('/admin')
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
                 if(res.status == 200){
                   return res.json()
                 }  else {
                   console.error ( 'error en ', res.status)
                 }
                   
               })
               .then(data => {
                 const token =  decodeToken(data.jwtToken)
                 sessionStorage.setItem('token', token)
                 console.log(token.role)
                 EnviarPage(token.role)
               })
               
           }
           catch(error){
               console.error(error, 'en la petición')
           }
           
       }
      const  handleSubmit = (e)  => {
        e.preventDefault()
        let {email, password} = e.target.elements
        APiLogin(email, password)
       
    }
  return (
    <div className='w-full max-w-md m-auto bg-blue-500 p-10 rounded-lg  shadow-slate-50/10 shadow-lg'>
        <h5 className='text-3xl font-bold mb-8'>Login de Justina</h5>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <Input label="Correo" type="text" placeholder="Escribe tu correo" Name="email"/>
            <Input label="Contraseña" type="password" placeholder="Escribe tu contraseña" Name="password"/>
            <button type="submit">Entrar</button>
        </form>
    </div>
  )
}
