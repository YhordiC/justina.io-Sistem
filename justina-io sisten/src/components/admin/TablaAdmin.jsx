
import TBodylist from "./TBodylist";

// eslint-disable-next-line react/prop-types
export default function TablaAdmin({lista=[]}) {
  return (
    <div className="p-5">
        <table className="bg-white text-black  w-full max-w-[1000px] mx-auto table-auto py-5">
            <thead className="bg-blue-300 text-white ">
                <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Estado de cuenta</th>
                <th>Numero Telefónico</th>
                <th></th>
                </tr>
            </thead>
            <tbody className=" border-black border-2">
            {lista.map((lista) => (
              <TBodylist key={lista.id} lista={lista} />
            ))}
            </tbody>
            
        </table>
    </div>
  )
}
