import { useReducer } from "react"
const intialState=0
const counterReducer=(state:number, action: string)=>{
    switch(action){
        case "Increment":
            return state+1
        case "Decrement":
            return state-1
        case "Reset":
            return intialState
        default:
            return state
    }
}

export const CounterReducerPractice = () => {
 const [count, dispatch]=useReducer(counterReducer, intialState)
  return (
    <div>
        <h2>Counter: {count}</h2>
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
        <button onClick={()=>dispatch("Reset")}>Reset</button>
    </div>
  )
}
