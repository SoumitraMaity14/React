
import './App.css'
import { DirectProps } from './components/props/DirectProps'
import { RestProps } from './components/props/RestProps'
import { SpreadProps } from './components/props/SpreadProps'

function App() {
  

  return (
    <>
    <SpreadProps name="Soumitra" lastname="Maity" age={22} email="maity@gmail.com" />
     <DirectProps firstname="Soumitra" lastname="Maity" age={22} email="maity@gmail.com" />
     <RestProps firstname="Soumitra" lastname="Maity" age={22} email="maity@gmail.com"/>
    </>
  )
}

export default App
