// eslint-disable-next-line react/prop-types
export default function VerPerfil({profile ={}, type}) {
    if (type === 'medico') {
        return (
          <div className=" p-3">
            <h2 className="text-2xl font-bold">{profile.firstName} {profile.lastName}</h2>
            <p><strong>Correo:</strong> {profile.email}</p>
            <p><strong>Numero telefónico:</strong> {profile.phone}</p>
            <p><strong>Numero de registro:</strong> {profile.medicalRegistrationNumber}</p>
            <p><strong>Especialidad:</strong> {profile.specialities}</p>
            <p><strong>Descripción:</strong> {profile.description}</p>
            <p><strong>Estado:</strong> {profile.active ? 'Activo' : 'Desactivado'}</p>
          </div>
        );
      } else if (type === 'patiente') {
        return (
          <div className="profile patient-profile">
            <h2>{profile.firstName} {profile.lastName}</h2>
            <p><strong>Correo:</strong> {profile.email}</p>
            <p><strong>Numero de Identificación:</strong> {profile.identificationNumber}</p>
            <p><strong>Numero telefónico:</strong> {profile.phone}</p>
            <p><strong>Fecha de nacimiento:</strong> {profile.birthDate}</p>
            <p><strong>Tipo de sangre:</strong> {profile.bloodType}</p>
            <p><strong>Factor de sangre:</strong> {profile.bloodFactor}</p>
            <p><strong>Sexualidad:</strong> {profile.sex}</p>
            <p><strong>Estado:</strong> {profile.active ? 'Activo' : 'Desactivado'}</p>
            </div>
        );
      }
    };
