import Input from "../Input";
// eslint-disable-next-line react/prop-types
function Select({selects = [], className, label, Name }){
    return(
        <div className= {className}>
            <label>{label}</label>
            <select name={Name} className="py-3 px-2 bg-blue-500 ">
                {selects.map(( select => (
                    <option key={select.value} value={select.value}>{select.label}</option>
                )))}
            </select>
        </div>
    )
}
export default function RegistroMedico() {
    const especialidades = [
        { label: 'Alergología e Inmunología', value: 'ALERGIA_E_INMUNOLOGIA' },
        { label: 'Alergología e Inmunología Pediátrica', value: 'ALERGIA_E_INMUNOLOGIA_PEDIATRICA' },
        { label: 'Anatomía Patológica', value: 'ANATOMIA_PATOLOGICA' },
        { label: 'Anestesiología', value: 'ANESTESIOLOGIA' },
        { label: 'Anestesiología General y Hemodinamia', value: 'ANESTESIOLOGIA_GENERAL_Y_HEMODINAMIA' },
        { label: 'Cardiología', value: 'CARDIOLOGIA' },
        { label: 'Cardiología Infantil', value: 'CARDIOLOGIA_INFANTIL' },
        { label: 'Cirugía Cardiovascular', value: 'CIRUGIA_CARDIOVASCULAR' },
        { label: 'Cirugía Cardiovascular Pediátrica', value: 'CIRUGIA_CARDIOVASCULAR_PEDIATRICA' },
        { label: 'Cirugía de Cabeza y Cuello', value: 'CIRUGIA_CABEZA_Y_CUELLO' },
        { label: 'Cirugía Torácica', value: 'CIRUGIA_TORACICA' },
        { label: 'Cirugía Pediátrica', value: 'CIRUGIA_PEDIATRICA' },
        { label: 'Cirugía Plástica y Reparadora', value: 'CIRUGIA_PLASTICA_Y_REPARADORA' },
        { label: 'Cirugía Vascular Periférica', value: 'CIRUGIA_VASCULAR_PERIFERICA' },
        { label: 'Clínica Médica', value: 'CLINICA_MEDICA' },
        { label: 'Coloproctología', value: 'COLOPROCTOLOGIA' },
        { label: 'Dermatología', value: 'DERMATOLOGIA' },
        { label: 'Dermatología Pediátrica', value: 'DERMATOLOGIA_PEDIATRICA' },
        { label: 'Diagnóstico por Imágenes', value: 'DIAGNOSTICO_POR_IMAGENES' },
        { label: 'Electrofisiología Cardíaca', value: 'ELECTRO_FISIOLOGIA_CARDIACA' },
        { label: 'Emergentología', value: 'EMERGENTOLOGIA' },
        { label: 'Endocrinología', value: 'ENDOCRINOLOGIA' },
        { label: 'Endocrinología Infantil', value: 'ENDOCRINOLOGIA_INFANTIL' },
        { label: 'Farmacología Clínica', value: 'FARMACOLOGIA_CLINICA' },
        { label: 'Fisiatría', value: 'FISIATRIA' },
        { label: 'Gastroenterología', value: 'GASTROENTEROLOGIA' },
        { label: 'Gastroenterología Infantil', value: 'GASTROENTEROLOGIA_INFANTIL' },
        { label: 'Genética Médica', value: 'GENETICA_MEDICA' },
        { label: 'Geriatría', value: 'GERIATRIA' },
        { label: 'Ginecología', value: 'GINECOLOGOGIA' },
        { label: 'Hematología', value: 'HEMATOLOGIA' },
        { label: 'Hematooncología Pediátrica', value: 'HEMATOONCOLOGIA_PEDIATRICA' },
        { label: 'Hemoterapia e Inmunohematología', value: 'HEMOTERAPIA_E_INMUNOHEMATOLOGIA' },
        { label: 'Hepatología', value: 'HEPATOLOGIA' },
        { label: 'Hepatología Pediátrica', value: 'HEPATOLOGIA_PEDIATRICA' },
        { label: 'Infectología', value: 'INFECTOLOGIA' },
        { label: 'Infectología Infantil', value: 'INFECTOLOGIA_INFANTIL' },
        { label: 'Medicina del Deporte', value: 'MEDICINA_DEL_DEPORTE' },
        { label: 'Medicina del Trabajo', value: 'MEDICINA_DEL_TRABAJO' },
        { label: 'Medicina General', value: 'MEDICINA_GENERAL' },
        { label: 'Medicina Legal', value: 'MEDICINA_LEGAL' },
        { label: 'Medicina Nuclear', value: 'MEDICINA_NUCLEAR' },
        { label: 'Medicina Paliativa', value: 'MEDICINA_PALIATIVA' },
        { label: 'Nefrología', value: 'NEFROLOGIA' },
        { label: 'Nefrología Infantil', value: 'NEFROLOGIA_INFANTIL' },
        { label: 'Neonatología', value: 'NEONATOLOGIA' },
        { label: 'Neumonología', value: 'NEUMONOLOGIA' },
        { label: 'Neumonología Infantil', value: 'NEUMONOLOGIA_INFANTIL' },
        { label: 'Neurocirugía', value: 'NEUROCIRUGIA' },
        { label: 'Neurología', value: 'NEUROLOGIA' },
        { label: 'Neurología Infantil', value: 'NEUROLOGIA_INFANTIL' },
        { label: 'Nutrición', value: 'NUTRICION' },
        { label: 'Nutrición Infantil', value: 'NUTRICION_INFANTIL' },
        { label: 'Obstetricia', value: 'OBSTETRICIA' },
        { label: 'Odontología', value: 'ODONTOLOGIA' },
        { label: 'Oftalmología', value: 'OFTALMOLOGIA' },
        { label: 'Oncología', value: 'ONCOLOGIA' },
        { label: 'Ortopedia y Traumatología', value: 'ORTOPEDIA_Y_TRAUMATOLOGIA' },
        { label: 'Ortopedia y Traumatología Infantil', value: 'ORTOPEDIA_Y_TRAUMATOLOGIA_INFANTIL' },
        { label: 'Otorrinolaringología', value: 'OTORRINOLARINGOLOGIA' },
        { label: 'Pediatría', value: 'PEDIATRIA' },
        { label: 'Psicología', value: 'PSICOLOGIA' },
        { label: 'Psiquiatría', value: 'PSIQUIATRIA' },
        { label: 'Psiquiatría Infantojuvenil', value: 'PSIQUIATRIA_INFANTOJUVENIL' },
        { label: 'Radioterapia', value: 'RADIOTERAPIA' },
        { label: 'Reumatología', value: 'REUMATOLOGIA' },
        { label: 'Reumatología Infantil', value: 'REUMATOLOGIA_INFANTIL' },
        { label: 'Terapia Intensiva', value: 'TERAPIA_INTENSIVA' },
        { label: 'Terapia Intensiva Infantil', value: 'TERAPIA_INTENSIVA_INFANTIL' },
        { label: 'Tocoginecología', value: 'TOCOGINECOLOGIA' },
        { label: 'Toxicología', value: 'TOXICOLOGIA' },
        { label: 'Urología', value: 'UROLOGIA' }
      ]

    const token = sessionStorage.getItem('token')
    console.log(token)
     function  handleSubmit(e) {
        e.preventDefault()
        let {nombre, apellido, email, password, phone, specialites, registerMedicalnumber, description,} = e.target.elements
       console.log( typeof( Number(registerMedicalnumber.value)))
        console.log(nombre.value, apellido.value, email.value, password.value, phone.value, specialites.value, registerMedicalnumber.value, description.value)
    
       try
       {
        fetch('https://backend-justina-deploy.onrender.com/api/medical/add', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                firstName: nombre.value,
                lastName: apellido.value,
                email: email.value,
                password: password.value,
                phone: phone.value,
                medicalRegistrationNumber: Number(registerMedicalnumber.value),
                specialities: specialites.value,
                description: description.value,
                active: true
                
            })
        })
       } catch (err) {
         console.error(err)
       }
    }
  return (
    <div className=" w-full max-w-[700px] p-5 absolute top-4 z-20 bg-black">
        <h6 className="text-2xl font-semibold mb-5">Registro medico</h6>
        <form className="grid grid-cols-2 gap-3" onSubmit={handleSubmit}>
            <Input Name="nombre" label="Nombre del medico" type="text" placeholder="Yhordi" className="flex flex-col gap-2" />
            <Input Name="apellido" label="Apellido del medico" type="text" placeholder="Choque Espinoza"className="flex flex-col gap-2" />
            <Input Name="email" label="Correo del medico" type="email" placeholder="yordi@gmail.com" className="flex flex-col gap-2"/>
            <Input Name="password" label="Contraseña del medico" type="password" placeholder="68@larabel*/"className="flex flex-col gap-2" />
            <Input Name="phone" label="Numero celular del medico" type="text" placeholder="65231846894"  className="flex flex-col gap-2"/>
            <Select Name={'specialites'}  label={'Especialidad del medico'} selects={especialidades} className="flex flex-col gap-2 col-span-2" />
            <Input Name="registerMedicalnumber" label="Número de registro medico" type="number" placeholder="8426685655"  className="flex flex-col gap-2 col-span-2"/>
            <Input Name="description" label="Descripción del medico" type="text" className="col-span-2 flex flex-col gap-2" placeholder="Experto cardiologo, amable con sus pacientes" />
            <button  className = 'col-span-2 bg-yellow-500 py-3 rounded-md font-semibold cursor-pointer hover:bg-yellow-400 transition-colors'
             type="submit">Registrar</button>
        </form>
    </div>
  )
}
