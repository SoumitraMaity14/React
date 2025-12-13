import { useState } from "react"

export const BatchingState = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [isUpdated, setIsUpdated] = useState(false)
    console.log("comone render: Update component")

    const updateAll = () => {
        setCount((prev) => { return prev + 1 })
        setCount((prev)=>{return prev+5})
        setCount((prev)=> { return prev+10 })
        setName("Updated")
        setIsUpdated(true)
    }
    return (
        <div>
            <h2>count: {count}</h2>
            <p>Check name is {name}</p>
            <p>{isUpdated ? "yes" : "no"} </p>
            <button onClick={updateAll}>Batch Updated</button>

        </div>
    )
}
