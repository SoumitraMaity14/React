import { createContext, useContext, useState, type ReactNode } from "react";

interface authContexttype{
    user: any,
    login:(user:string)=>void,
    logout:()=>void
}

const AuthContext=createContext<authContexttype | null>(null)

export const AuthProvider=({children}:{children:ReactNode})=>{
    const [user, setUser]=useState(null)
    const login=(user:any)=>{
        setUser(user)
    }
    const logout=()=>{
        setUser(null)
    }

return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
}

export const useAuth=()=>{
    const context=useContext(AuthContext)
    if(!context){
        console.log("some thing went wrong in context")
    }

    return context
}