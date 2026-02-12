import { useState } from "react"
import { useAuth } from "./Auth"
import { useNavigate } from "react-router-dom"

export const Login=()=>{
    const [user, setUser]=useState(null)
    const auth=useAuth()
    const navigate=useNavigate()
    const handaleLogin=()=>{
        auth.login(user)
        navigate('/')
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