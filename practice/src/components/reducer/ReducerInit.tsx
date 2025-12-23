import { useReducer } from "react"
const initialCount=0
const countReducer=(state:number, action: string)=>{
    switch(action){
        case "Increment":
            return state+1
        case "Decrement":
            return state-1
        case "Reset":
            return initialCount
        default:
            return state
    }
}
const init=(initialValue:number)=>{
    console.log("init function call only once")

    const savedCount=localStorage.getItem("count")
    if(savedCount !== null){
        console.log("found save count:", savedCount)
        return parseInt(savedCount)
    }
    console.log("no saved count, using intial state", initialValue)
    return initialValue

}


export const ReducerInit = () => {
    const [count, dispatch] =useReducer(countReducer, initialCount, init)
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>dispatch("Increment")}>Increment</button>
         <button onClick={()=>dispatch("Decrement")}>Decrement</button>
         <button onClick={()=>dispatch("Reset")}>Reset</button>


    </div>
  )
}
