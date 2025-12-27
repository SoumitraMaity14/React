
import { SideBar } from './SideBar'
import { CreateContextProvider } from './CreateContextProvider'

export const Header = () => {
  return (
    <CreateContextProvider><SideBar/></CreateContextProvider>
  )
}
