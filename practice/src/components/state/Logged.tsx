import { useState } from "react"
export const Logged = () => {
    const [isLoggedIn, setIsLoggedIn]=useState(true)
    const [message, setMessage]=useState("")
    
    
    const handaleLogin=()=>{
        setIsLoggedIn(!isLoggedIn)
    }

    const handaleInputChange=(e:any)=>{
        setMessage(e.target.value)
    }
  return (
    <div>
        <button onClick={handaleLogin}>{isLoggedIn? 'Login' :'Logout'}</button>
        <input 
        type="text" 
        placeholder="enter text here.." 
        value={message}
        onChange={handaleInputChange}
        />
        <p>{message}</p>
    </div>
  )
}
