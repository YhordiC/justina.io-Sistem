// eslint-disable-next-line react/prop-types
export default function VerPerfil({profile ={}, type}) {
    if (type === 'medico') {
        return (
          <div className=" p-3 grid grid-cols-2 gap-3 text-white">
            <h2 className="text-2xl font-bold col-span-2 mb-5">{profile.firstName} {profile.lastName}</h2>
            <p className="flex flex-col items-start"><strong>Correo:</strong> {profile.email}</p>
            <p className="flex flex-col items-start"><strong>Numero telefónico:</strong> {profile.phone}</p>
            <p className="flex flex-col items-start"><strong>Numero de registro:</strong> {profile.medicalRegistrationNumber}</p>
            <p className="flex flex-col items-start"><strong>Especialidad:</strong> {profile.specialities}</p>
            <p className="flex flex-col col-span-2 items-start"><strong>Descripción:</strong> {profile.description}</p>
            <p className="flex flex-col col-span-2"><strong>Estado:</strong> {profile.active ? 'Activo' : 'Desactivado'}</p>
          </div>
        );
      } else if (type === 'paciente') {
        return (
          <div className=" p-3 grid grid-cols-2 gap-4 text-white">
            <h2 className="text-2xl font-bold col-span-2 mb-5">{profile.firstName} {profile.lastName}</h2>
            <p className="flex flex-col items-start"><strong>Numero de Identificación:</strong> {profile.identificationNumber}</p>
            <p className="flex flex-col items-start"><strong>Numero telefónico:</strong> {profile.phone}</p>
            <p className="flex flex-col items-start"><strong>Correo:</strong> {profile.email}</p>
            <p className="flex flex-col items-start"><strong>Fecha de nacimiento:</strong> {profile.birthDate}</p>
            <p className="flex flex-col items-start"><strong>Tipo de sangre:</strong> {profile.bloodType}</p>
            <p className="flex flex-col items-start"><strong>Factor de sangre:</strong> 
              {profile.bloodFactor === '-' ? 'Negativo' : 'Positivo' }</p>
            <p className="flex flex-col items-start"><strong>Sexualidad:</strong> 
            {profile.sex === 'M' ? 'Masculino' : 'Femenino'}</p>
            <p className="flex flex-col items-start "><strong>Estado:</strong> {profile.active ? 'Activo' : 'Desactivado'}</p>
            </div>
        );
      }
    };
