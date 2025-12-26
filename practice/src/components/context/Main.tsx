import { Header } from "./Header"
import { UserContext } from "./Context"

export const Main = () => {
    const user={
        name: "Soumitra",
        role: "Admin",
        email: "soumitra@org.com"
    }
  return (
    <UserContext value={user}>
        <h2> Main File</h2>
        <Header/>
    </UserContext>
  )
}
