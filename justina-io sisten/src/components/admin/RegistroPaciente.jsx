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
export default function RegistroPaciente() {
    const tipoSAngre = [
      {
        label: 'A',
        value: 'A',
       },
       {
        label: 'B',
        value: 'B',
       },
       {
        label: 'AB',
        value: 'AB',
       },
       {
        label: 'O',
        value: 'O',
       },
]
    
    const factorSangre = [
        {
            label: 'Positivo',
            value: '+'
        },
        {
            label: 'Negativo',
            value: '-'
        }
    ]

    const sexualidad = [
        {
            label: 'Masculino',
            value: 'M'
        },
        {
            label: 'Femenino',
            value: 'F'
        }
    ]
    const token = sessionStorage.getItem('token')
    console.log(token)
     function  handleSubmit(e) {
        e.preventDefault()
        let {nombre,
             apellido,
             numberid,
             email,
             password,
             phone,
             address,
             date,
             bloodType,
             bloodFactor,
             sex} = e.target.elements
        console.log(nombre.value,apellido.value,numberid.value,email.value,password.value,phone.value,address.value,date.value,bloodType.value,bloodFactor.value,sex.value)
    
       try
       {
        fetch('https://backend-justina-deploy.onrender.com/api/patient/add', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                 firstName: nombre.value,
                 lastName: apellido.value,
                 identificationNumber: numberid.value,
                 email: email.value,
                 password: password.value,
                 phone: phone.value,
                 address: address.value,
                 birthDate: date.value,
                 bloodType: bloodType.value,
                 bloodFactor: bloodFactor.value,
                 sex: sex.value
                
            })
        })
       } catch (err) {
         console.error(err)
       }
    }
  return (
    <div className=" w-full max-w-[700px] p-5 absolute top-4 z-20 bg-black">
        <h6 className="text-2xl font-semibold mb-5">Registro paciente</h6>
        <form className="grid grid-cols-4 gap-3" onSubmit={handleSubmit}>
            <Input Name="nombre" label="Nombre del paciente" type="text" placeholder="Yhordi" className="flex flex-col gap-2 col-span-2" />
            <Input Name="apellido" label="Apellido del paciente" type="text" placeholder="Choque Espinoza"className="flex flex-col gap-2 col-span-2" />
            <Input Name="numberid" label="Número de identificación" type="text" placeholder="12333234" className="flex flex-col gap-2 col-span-2"/>
            <Input Name="email" label="Correo del paciente" type="email" placeholder="yordi@gmail.com"className="flex flex-col gap-2 col-span-2" />
            <Input Name="password" label="Contraseña del paciente" type="password" placeholder="475@5Yhord"className="flex flex-col gap-2 col-span-2" />
            <Input Name="phone" label="Numero celular del paciente" type="text" placeholder="65231846894"  className="flex flex-col gap-2 col-span-2"/>
            <Input Name="address" label="Lugar de residencia" type="text" placeholder="Santa cruz/la ramada"className="flex flex-col gap-2 col-span-2" />
            <Input Name="date" label="Fecha de nacimiento" type="date" placeholder="2000-01-01"className="flex flex-col gap-2 col-span-2" />
            <Select Name={'bloodType'}  label={'Tipo de sangre'} selects={tipoSAngre} className="flex flex-col gap-2 col-span-1" />
            <Select Name={'bloodFactor'}  label={'Factor de sangre'} selects={factorSangre} className="flex flex-col gap-2  col-span-2" />
            <Select Name={'sex'}  label={'Sexualidad'} selects={sexualidad} className="flex flex-col gap-2 col-span-1" />
             <button  className = 'col-span-4 bg-yellow-500 py-3 rounded-md font-semibold cursor-pointer hover:bg-yellow-400 transition-colors '
             type="submit">Registrar</button>
        </form>
    </div>
  )
}