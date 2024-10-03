let obj = {
    label: 'string',
    type: 'string',
    placeholder: 'string',
    Name: 'string'
}
export default function Input({label, type, placeholder, Name} = obj)  {
  return (
    <>
    <label className="text-start">{label}</label>
    <input className="p-3 rounded-md " type={type} placeholder={placeholder} name={Name}/>
    </>
  )
}
