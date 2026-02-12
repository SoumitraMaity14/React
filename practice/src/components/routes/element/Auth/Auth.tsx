import { createContext, useContext, useState, type ReactNode } from "react"

type AuthContextType = {
  user: any; // you can replace `any` with a proper User type later
  login: () => void;
  logout: () => void;
};
const AuthContext=createContext<AuthContextType|null>(null)
export const AuthProvider=({children}:{ children: ReactNode })=>{
  const [user, setUser]=useState(null)
  const login=()=>{
    setUser(user)
  }
  const logout=()=>{
    setUser(null)
  }

  return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
}
export const  useAuth=()=>{
  return useContext(AuthContext)
}