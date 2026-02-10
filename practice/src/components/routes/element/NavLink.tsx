import { Link, NavLink } from "react-router-dom"


export const NavBar = () => {
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

    </nav>
  )
}
