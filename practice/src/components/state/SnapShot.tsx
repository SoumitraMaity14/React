import { useState } from 'react'

export const SnapShot = () => {
    const [count, setCount]=useState(0)
    const handleClick=()=>{
        console.log("Before count value is",count)
        setCount(count+1)
        console.log("After count 1", count)
         setCount(count+5)
        console.log("After count 5", count)
         setCount(count+10)
        console.log("After count 10", count)

    }
  return (
    <div>
        {count}
        <button onClick={handleClick}>count-{count}</button>

    </div>
  )
}
