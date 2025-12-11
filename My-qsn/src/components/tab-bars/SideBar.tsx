import { NavLink } from "react-router-dom"


export const SideBar = () => {
    const base='block w-60 px-2 py-3'
    const active='text-center bg-gray-100 border-l-4 text-blue-200'
    const inactive='text-center hover:bg-gray-50'
  return (
    <div>
        <NavLink to='/' className={({isActive})=> `${base} ${isActive? active : inactive}`}>
        Home
        </NavLink>
        <NavLink to='/board' className={({isActive})=> `${base} ${isActive ? active :inactive }`}>
        Board
        </NavLink>
        <NavLink to='/user' className={({isActive})=>`${base} ${isActive? active: inactive}`}>
        User
        </NavLink>
    </div>
  )
}
