import { useContext } from "react"
import { UserContext } from "./Context"


export const User = () => {
    const user=useContext(UserContext)
  return (
    <div>
        <h2>User Profile </h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}
