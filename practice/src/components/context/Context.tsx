import { createContext } from 'react'

export const UserContext =createContext({
    name: "Guest",
    role: "Testing",
    email: "guest@org.com"
})
