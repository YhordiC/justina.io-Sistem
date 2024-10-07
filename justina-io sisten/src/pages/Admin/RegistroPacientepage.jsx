import { useState } from 'react'
import Button from '../../components/Button'
import RegistroPaciente from '../../components/admin/RegistroPaciente'

export default function RegistroPacientepage() {
        const [isRegister, setisRegister] = useState(false)
        const eventoRegistro = () => { setisRegister(!isRegister) }
          return (
          <>
            <Button onClick = {eventoRegistro}>Registro pacientes</Button>
            
            <div className={`${isRegister ? 'bg-black scale-100 opacity-100' :  ' scale-50 opacity-0'}
             w-full relative h-auto flex items-center justify-center  transition-all rounded-md z-10`}>
              <RegistroPaciente/>
              </div> 
          </>
        )
}
