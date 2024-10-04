import { useEffect, useState } from "react";
import TablaAdmin from "../../components/admin/TablaAdmin";

export default function TablaMedico() {
  const [listaMedico, setlistaMedico] = useState()
  useEffect(() => {
    fetch('https://backend-justina-deploy.onrender.com/api/medical',{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      }
    }).then( res => res.json())
      .then( datos => setlistaMedico(datos.dataIterable))
  })
  return (
    <div>
        <h5 className="text-3xl mt-4 font-semibold">Lista de medicos</h5>
        <TablaAdmin lista={listaMedico} />
    </div>
  )
}
