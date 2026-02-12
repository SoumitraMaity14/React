import { Link, NavLink } from "react-router-dom"
import { useAuth } from "./Auth/Auth"


export const NavBar = () => {

    const auth=useAuth()
    const navLinkStyles=({isActive}:{isActive: any})=>{
        return {
            fontWeight: isActive? 'bold': 'normal',
            textDecoreation: isActive? 'none': 'underline'
        }
    }
  return (
    <nav className="py-4 space-x-4 bg-gray-200">
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <NavLink style={navLinkStyles} to='/'>Home</NavLink>
        <NavLink style={navLinkStyles} to='about'>About</NavLink>
        <NavLink style={navLinkStyles} to='product'>product</NavLink>
        <NavLink style={navLinkStyles} to='profile'>Profile</NavLink>
    {!auth.user &&(
        <NavLink style={navLinkStyles} to='login'>login</NavLink>
    )}
    </nav>
  )
}
