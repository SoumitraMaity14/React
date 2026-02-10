import { Link, Outlet } from "react-router-dom"


export const Product = () => {
  return (
    <div> 
        <p>Product Page</p>
        <nav className="space-x-2 p-3">
            <Link to='feture-page'>feature</Link>
            <Link to='new-page'>new</Link>
        </nav>
        <Outlet/>
    
    </div>
  )
}
