let obj = {
    label: 'string',
    type: 'string',
    placeholder: 'string',
    Name: 'string'
}
// eslint-disable-next-line react/prop-types
export default function Input({label, type, placeholder, Name} = obj)  {
  return (
    <>
    <label className="text-start">{label}</label>
    <input className="p-3 rounded-md bg-blue-200 text-black placeholder-black/45" type={type} placeholder={placeholder} name={Name}/>

    </>
  )
}
