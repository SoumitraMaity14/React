import { useState } from "react"
import { useAuth } from "./Auth"
import { useLocation, useNavigate } from "react-router-dom"

export const Login=()=>{
    const [user, setUser]=useState<string>("")
    const auth=useAuth()
    const navigate=useNavigate()
    const location=useLocation()
    const redirectPath=location.state?.path || '/'
    const handaleLogin=()=>{
        auth.login(user)
        navigate(redirectPath, {replace: true})
    }
   
    return(
        <>
        <label>
            UserName:
            <input type="text" onChange={e=>setUser(e.target.value)}/>
        </label>
        <button onClick={handaleLogin}>Login</button>
        </>
    )
}