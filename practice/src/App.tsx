
import './App.css'
import { DirectProps } from './components/props/DirectProps'
import { RestProps } from './components/props/RestProps'
import { SpreadProps } from './components/props/SpreadProps'
import { RenderList } from './components/render/RenderList'
import { RenderString } from './components/render/RenderString'
import { BatchingState } from './components/state/BatchingState'
import { Dashboard } from './components/state/Dashboard'
import { Demo } from './components/state/Demo'
import { Logged } from './components/state/Logged'
import { PrevState } from './components/state/PrevState'
import { SnapShot } from './components/state/SnapShot'

function App() {
  

  return (
    <>
    <BatchingState/>
    <PrevState/>
    <br>
    </br>
    <SnapShot/>
    <Dashboard/>
    <Logged/>
    <Demo/>
    <RenderString/>
    <RenderList/>
    <SpreadProps name="Soumitra" lastname="Maity" age={22} email="maity@gmail.com" />
     <DirectProps firstname="Soumitra" lastname="Maity" age={22} email="maity@gmail.com" />
     <RestProps firstname="Soumitra" lastname="Maity" age={22} email="maity@gmail.com"/>
    </>
  )
}

export default App
