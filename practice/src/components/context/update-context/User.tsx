import { useContext } from "react"
import { UserContext } from "./UserContext"


export const User = () => {
    const {user, setUser}=useContext(UserContext)
    const tooggleButton=()=>{
        setUser({
            ...user, 
            theme: user.theme==="dark"? "light": "dark"
        })
    }
  return (
    <div>
        <h2> User Details:</h2>
        <p>Name: {user.name}</p>
        <p>Role: {user.role} </p>
        <p>Theme:{user.theme }</p>
        <button onClick={tooggleButton}> Change Theme</button>
        

    </div>
  )
}
