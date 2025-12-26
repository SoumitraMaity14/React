import { useState } from "react"


export const Dropdown = () => {
    const [dropdown, setDropdown]=useState("")
    
  return (
    <div>
        <select value={dropdown}
        onChange={(e)=>setDropdown(e.target.value)}
        >
            <option value="">Select a dropdown</option>
            <option value="Austrellia">AUS(Austrelia)</option>
            <option value="India">IND(India)</option>
            <option value="UK">UK(United Kingdom)</option>
        </select>
        {dropdown&&(
            <div>Selected Dropdown from List: {dropdown} </div>
        )}
    </div>
  )
}
