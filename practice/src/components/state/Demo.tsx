import  { useState } from 'react'

export const Demo = () => {
    const [count, setCount]=useState(0)
    const handleCounterClick=()=>{
        setCount(count+1)

    }
  return (
    <div>
        <button onClick={handleCounterClick}>
            Count: {count}
        </button>
    </div>
  )
}
