import { Route,  Routes } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { Home } from "./tabs/Home"
import { Profile } from "./tabs/Profile"
import { Project } from "./tabs/Project"


export const DashBoard = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/project" element={<Project/>}/>
        </Routes>

    </div>
  )
}
