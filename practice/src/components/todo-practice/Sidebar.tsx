import { NavLink} from 'react-router-dom'

export const Sidebar = () => {
    const base="w-40 px-2 py-3 text-base"
    const active ="border-l-3 border-blue-500 bg-gray-300"
    const inactive="hover:bg-gray-200"

  return (
    <div className='flex flex-col'>
        <NavLink to="/"  className={({isActive})=>`${base} ${isActive? active: inactive}`}>Home</NavLink>
        <NavLink to="/profile" className={({isActive})=>`${base} ${isActive? active: inactive}`}>Profile</NavLink>
        <NavLink to="/Project" className={({isActive})=>`${base} ${isActive? active: inactive}`}>Project</NavLink>
        
    </div>
  )
}
