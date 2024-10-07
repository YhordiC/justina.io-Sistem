
export default function Button({onClick, children,className}) {
  return (
    <button 
    className={`bg-blue-600 px-4 py-2 cursor-pointer hover:bg-white hover:text-black 
     border-blue-600  border-2 rounded-xl mt-5 transition-colors ${className ? className : ''}`}
       onClick={ onClick}>{children}</button> 
  )
}
