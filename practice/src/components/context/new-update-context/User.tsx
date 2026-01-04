import { use } from "react"
import { UserContext } from "./UserContext"


export const User = () => {
    const user=use(UserContext)
  return (
    <div>
        <p>Name:{user.name} </p>
        <p>Role:{user.role} </p>
        <p>Email:{user.email}</p>
    </div>
  )
}
