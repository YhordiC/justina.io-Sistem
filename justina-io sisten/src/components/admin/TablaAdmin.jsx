
import TBodylist from "./TBodylist";

// eslint-disable-next-line react/prop-types
export default function TablaAdmin({lista=[]}) {
  return (
    <div className="p-5 max-md:overflow-x-auto max-md:px-0 max-md:pb-0">
        <table className="  bg-white text-black  w-full max-w-[1000px] mx-auto border-separate ">
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
