import { useRef, useState } from "react"


export const MenuWithKeyboard = () => {
    const [open, setOpen]=useState(false)

    const timeoutRef=useRef(null)
    const menuRef=useRef(null)

    const handaleOpen=(e)=>{
        clearTimeout(timeoutRef.current);
        setOpen(true)
    }

    const handaleClose=(e)=>{
        timeoutRef.current=setTimeout(()=>{
            setOpen(false)
        })
    }
  return (
    <div>MenuWithKeyboard</div>
  )
}
