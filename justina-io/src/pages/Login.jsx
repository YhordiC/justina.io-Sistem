
import Input from '../components/Input'
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
            return data
        })
    }
    catch(error){
        console.error(error, 'en la petición')
    }
    
}

export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault()
        let {email, password} = e.target.elements
        console.log(APiLogin(email, password))

    }
  return (
    <div className='w-full max-w-md m-auto'>
        <h5 className='text-3xl font-bold mb-8'>Login de Justina</h5>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <Input label="Correo" type="text" placeholder="Escribe tu correo" Name="email"/>
            <Input label="Contraseña" type="password" placeholder="Escribe tu contraseña" Name="password"/>
            <button type="submit">Entrar</button>
        </form>
    </div>
  )
}
