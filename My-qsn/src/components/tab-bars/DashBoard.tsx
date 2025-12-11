import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./tabs/Home"
import {Board} from './tabs/Board'
import { User } from "./tabs/User"
import { SideBar } from "./SideBar"

export const DashBoard = () => {
  return (
    <div className="flex">
    <SideBar/>
     
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/board' element={<Board/>}/>
        <Route path='/user' element={<User/>}/>
    </Routes>
    
    </div>
   
  )
}
