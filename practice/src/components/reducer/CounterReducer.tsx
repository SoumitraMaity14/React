import { useReducer } from "react"

const initialState = 0
const counterReducer = (state: number, action:string) => {
    switch (action) {
        case "Increment":
            return state + 1
        case "Decrement":
            return state - 1
        case "Reset":
            return initialState
        default:
            return state
    }
}

export const CounterReducer = () => {
    const [count, dispatch]=useReducer(counterReducer, initialState)
    return (
        <div>
            
            <h2>counter:{count}</h2>
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
        <button onClick={()=>dispatch("Reset")}>Reset</button>
        </div>
    )
}
