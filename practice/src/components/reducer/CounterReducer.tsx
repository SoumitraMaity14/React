import { useReducer } from "react"
const counterInitialstate=0
const counterReducer=(state, action)=>{
    
}

export const CounterReducer = () => {
    const [count, dispatch]=useReducer(counterReducer, counterInitialstate)
  return (
    <div>

    </div>
  )
}
