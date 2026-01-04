
import { Header } from './Header'
import { UserContext } from './UserContext'

export const Main = () => {
    const user={
        name:"Tendulkar",
        role:"Admin",
        email:"tendulkar@gmail.com"
    }
  return (
    <div>
        <UserContext value={user}>
        <Header/>
        </UserContext>
    </div>
  )
}
