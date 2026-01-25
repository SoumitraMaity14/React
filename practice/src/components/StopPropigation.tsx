import React from 'react'

export const StopPropigation = () => {
  return (
    <div onClick={()=>console.log("Home Clicked")}>
        <button onClick={(e)=>{
            e.stopPropagation()
            console.log("Button Clicked")}}
            >
            Click me
        </button>

    </div>
  )
}
