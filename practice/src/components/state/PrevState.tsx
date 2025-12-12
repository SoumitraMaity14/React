import { useState } from "react"


export const PrevState = () => {
    const [count, setCount]=useState(0)
    const handleClick=()=>{
        setCount((prev)=>{
            console.log("first state is", prev)
            return prev+1
        })
        setCount((prev)=>{
            console.log("second state is :", prev)
            return prev+5
        })
        setCount((prev)=>{
            console.log("third state is:", prev)
            return prev+10
        })
    }

  return (
    <div>
       <p>Count value is :{count}</p> 
       <button onClick={handleClick}>Count</button>

    </div>
  )
}
