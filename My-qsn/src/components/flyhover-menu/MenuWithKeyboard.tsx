import { useEffect, useRef, useState } from "react"


export const MenuWithKeyboard = () => {
    const [open, setOpen]=useState(false)

    const timeoutRef=useRef<number |null>(null)
    const menuRef=useRef(null)

    const handleOpen=(e: any)=>{
        clearTimeout(timeoutRef.current);
        setOpen(true)
    }

    const handleClose=(e: any)=>{
        timeoutRef.current=setTimeout(()=>{
            setOpen(false)
        })
    }

    useEffect(()=>{
        const handaleKey=(e)=>{
            if(e.key==="Escape") setOpen(false)
            if(e.key==="ArrowDown"){
                setOpen(true)
                menuRef.current.querySelector("a")?.focus();
            }
        }

        document.addEventListener("keydown", handaleKey)

        return ()=> document.removeEventListener("keydown", handaleKey)

    })
   return (
    <div className="min-h-screen flex items-start justify-center pt-20 bg-gray-100">
      <div
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        className="relative"
      >
        {/* Trigger */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Menu
        </button>

        {/* Dropdown */}
        {open && (
          <div
            ref={menuRef}
            className="absolute mt-2 w-40 bg-white shadow-lg rounded border"
          >
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 focus:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 focus:bg-gray-100"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 focus:bg-gray-100"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
