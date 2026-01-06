import { useMemo, useState } from 'react'

export const CountMemo = () => {
    const [count, setCount]=useState(0)
    const [numbers, setNumbers]=useState([2,4,5,3,8])
    const sum=useMemo(()=>{
        console.log("Calculating sum...")
        return numbers.reduce((a,b)=> a+b, 0)
    }, [numbers])

    const sum_without_memo=numbers.reduce((a, b)=>{
        console.log("Calculating sum without memo...")
        return a+b
 }, 0)
  return (
    <div>
        <p>Sum: {sum}</p>
        <p>Sum With Out Memo: {sum_without_memo}</p>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Increase Count</button>
        <button onClick={()=>setNumbers([...numbers, 6])}>Add Sum</button>
    </div>
  )
}
