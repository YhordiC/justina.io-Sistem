import { useEffect, useState } from "react"
import RegistroMedicopage from "./RegistroMedicopage"
import TablaAdmin from "../../components/admin/TablaAdmin"
import RegistroPacientepage from "./RegistroPacientepage"

export default function TablePaciente() {
    const [listaPaciente, setlistaPaciente] = useState()
    console.log('hola')
    useEffect(() => {
      fetch('https://backend-justina-deploy.onrender.com/api/patient',{
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + sessionStorage.getItem('token')
        }
      }).then( res => res.json())
        .then( datos => setlistaPaciente(datos.dataIterable))
    },[])
    return (
      <div>
        <RegistroPacientepage/>
          <h5 className="text-3xl mt-4 font-semibold">Lista de pacientes</h5>
          <TablaAdmin lista={listaPaciente} />
      </div>
    )
}
