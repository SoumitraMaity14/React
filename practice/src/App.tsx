
import './App.css'
import { DirectProps } from './components/props/DirectProps'
import { RestProps } from './components/props/RestProps'
import { SpreadProps } from './components/props/SpreadProps'
import { PracticeCounterReducer } from './components/reducer/PracticeCounterReducer'
import { ShoppingCartWithReducer } from './components/reducer/ShoppingCartWithReducer'
import { FirstLetter } from './components/render/FirstLetter'
import { RenderList } from './components/render/RenderList'
import { RenderString } from './components/render/RenderString'
import { TodoList } from './components/state/array/TodoList'
import { BatchingState } from './components/state/BatchingState'
import { Dashboard } from './components/state/Dashboard'
import { Demo } from './components/state/Demo'
import { Logged } from './components/state/Logged'
import { ObjectState } from './components/state/object/ObjectState'
import { PrevState } from './components/state/PrevState'
import { SharingState, ShoppingCart } from './components/state/SharingState'
import { SnapShot } from './components/state/SnapShot'

function App() {
  

  return (
    <>
    <PracticeCounterReducer/>
    <ShoppingCartWithReducer/>
    <FirstLetter/>
    <SharingState/>
     <br/> <br/> <br/> <br/> <br/> <br/>
    <TodoList/>
      <br/> <br/> <br/> <br/> <br/> <br/>
    <ObjectState/>
    <br/> <br/> <br/> <br/> <br/> <br/>
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
