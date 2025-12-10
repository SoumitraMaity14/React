import { useState } from "react"
export const Logged = () => {
    const [isLoggedIn, setIsLoggedIn]=useState(true)
    const toggleLoginHandle=()=>{
        setIsLoggedIn(!isLoggedIn)
    }
  return (
    <div>
        <button onClick={toggleLoginHandle}>{isLoggedIn? 'Login' :'Logout'}</button>
    </div>
  )
}
