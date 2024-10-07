import { useState } from "react";
import RegistroMedico from "../../components/admin/RegistroMedico";
import Button from "../../components/Button";

export default function RegistroMedicopage() {
  const [isRegister, setisRegister] = useState(false)
  const eventoRegistro = () => { setisRegister(!isRegister) }
    return (
    <>
      <Button onClick = {eventoRegistro}>Registro medico</Button>
      
      <div className={`${isRegister ? 'bg-black scale-100 opacity-100' :  ' scale-0 opacity-0'}
       w-full relative h-auto flex items-center justify-center  transition-all rounded-md z-10`}>
        <RegistroMedico/>
        </div> 
    </>
  )
}
