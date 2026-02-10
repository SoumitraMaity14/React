
import './App.css'

import { Header } from './components/context/update-context/Header'

import { Dropdown } from './components/Dropdown'
import { DirectProps } from './components/props/DirectProps'
import { RestProps } from './components/props/RestProps'
import { SpreadProps } from './components/props/SpreadProps'
import { PracticeCounterReducer } from './components/reducer/PracticeCounterReducer'
import { ReducerInit } from './components/reducer/ReducerInit'
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
import { SharingStatePractice } from './components/state/SharingStatePractice'
import { SnapShot } from './components/state/SnapShot'
import { DashBoard } from './components/todo-practice/DashBoard'
// import { User } from './components/context/User'
import { CountMemo } from './components/memo/CountMemo'
import { TodoListPractice } from './components/state/array/TodoListPractice'
import { SearchPractice } from './components/state/SearchPractice'
import { SortedProduct } from './SortedProduct'
import { UseStateWithObject } from './components/state/object/UseStateWithObject'
// import { UseStateWithArray } from './components/state/array/useStateWithArray'
import { CounterReducerPractice } from './components/reducer/CounterReducerPractice'
import { StopPropigation } from './components/StopPropigation'
import { CartWithReducer } from './components/reducer/CartWithReducer'
import { UseStateUseReducer } from './components/reducer/UseStateUseReducer'
import { ContextProvider } from './components/context/practice-context/ContextProvider'
import {User} from './components/context/practice-context/User'
import { AllRoutes } from './components/routes/AllRoutes'

function App() {
  

  return (
    <>
    <AllRoutes/>
    {/* <ContextProvider> <User/></ContextProvider> */}
   
    {/* <UseStateUseReducer/> */}
    {/* <CartWithReducer/> */}
    {/* <StopPropigation/> */}
    {/* <CounterReducerPractice/> */}
    {/* <UseStateWithArray/> */}
    {/* <SortedProduct/>
    <SearchPractice/>
    <TodoListPractice/> */}
    {/* <CountMemo/> */}
    {/* <User/> */}
    {/* <DashBoard/> */}
    {/* <Header/> */}
    {/* <Dropdown/>
    <Main/>
    <SharingStatePractice/>
    <ReducerInit/>
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
     <RestProps firstname="Soumitra" lastname="Maity" age={22} email="maity@gmail.com"/> */}
    </>
  )
}

export default App
