import { useContext } from "react"
import { Contextvalue } from "./Context"

export const User = () => {
    const user=useContext(Contextvalue)
  return (
    <div>
        <p>Name:{user.name} </p>
        <p>Email:{user.email} </p>
        <p>Role:{user.role} </p>
    </div>
  )
}
