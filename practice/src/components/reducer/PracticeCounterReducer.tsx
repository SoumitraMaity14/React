
// import { useReducer } from "react"
// const initialState=0

// const counterReducer=(state:number, action:string)=>{
//     switch(action){
//         case "INCREMENT":
//             return state + 1
//         case "DECREMENT":
//             return state - 1
//         case "RESET":
//             return initialState
//         default:
//             return state
//     }
// }
// export const PracticeCounterReducer = () => {
//     const [count, dispatch]=useReducer(counterReducer, initialState)
//   return (
//     <div>
//         <h2>Count: {count}</h2>
//         <button onClick={()=>dispatch( "INCREMENT")}>Increment</button>  
//         <button onClick={()=>dispatch( "DECREMENT")}>Decrement</button>
//         <button onClick={()=>dispatch( "RESET")}>Reset</button>
//     </div>
//   )
// }


import { useReducer } from "react"
const initialState=0

const counterReducer=(state, action)=>{
    switch(action.type){
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        case "RESET":
            return initialState
        default:
            return state
    }
}
export const PracticeCounterReducer = () => {
    const [count, dispatch]=useReducer(counterReducer, initialState)
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>dispatch({type: "INCREMENT"})}>Increment</button>  
        <button onClick={()=>dispatch({type: "DECREMENT"})}>Decrement</button>
        <button onClick={()=>dispatch({type: "RESET"})}>Reset</button>
    </div>
  )
}
