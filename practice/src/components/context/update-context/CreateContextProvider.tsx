import React, { useState, type ReactNode } from 'react'
import { UserContext } from './UserContext'
interface UserType{
name:string, 
role:string,
theme: "dark" | "light"
}
export const CreateContextProvider = ({children}:{children: ReactNode}) => {
    const [user, setUser]=useState<UserType>({
        name: "Soumitra",
        role:"Admin",
        theme: "dark"
    })
  return (
    <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
  )
}
