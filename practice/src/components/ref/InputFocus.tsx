import { useRef } from "react"


export const InputFocus = () => {
    const inputRef=useRef<HTMLInputElement | null>(null)
    const handaleInputFocus=()=>{
        inputRef.current?.focus()
    }
  return (
    <div>
        <p className="text-lg">Input Focus</p>
        <input ref={inputRef} type="text" placeholder="Enter your Name..."/>
        <button onClick={handaleInputFocus}>Input Focus</button>
    </div>
  )
}
