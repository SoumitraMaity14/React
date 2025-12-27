import { createContext } from "react";

export const UserContext=createContext({
    user: {name: "Guest", role: "Testing", theme:"dark"},
   setUser: (_user: any) => {}
})