import { Contextvalue } from "./Context"
import { Main } from "./Main"

export const ContextProvider = () => {
    const user={
        name:"Soumitra",
        role: "admin",
        email: "somitra@org.com"
    }
  return (
    <Contextvalue.Provider value={user}>
        <h2>Main File</h2>
        <Main/>
        
    </Contextvalue.Provider>
  )
}
