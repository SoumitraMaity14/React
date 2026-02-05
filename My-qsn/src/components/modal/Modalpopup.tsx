import { useEffect, useState } from "react"


export const Modalpopup = () => {
const [modalOpen, setModalOpen]=useState(false)
useEffect(()=>{
    if(!modalOpen) return

    const handleClickEsc=(e:any)=>{
        if(e.key==="Escape"){
            setModalOpen(false)
        }
    }
    document.addEventListener("keydown",handleClickEsc)
    document.body.style.overflow="hidden"
    return ()=>{
        document.removeEventListener("keydown", handleClickEsc)
        document.body.style.overflow="auto"
    }
}, [modalOpen])

  return (
    <div>
        <p className="text-xl">Modal Popup</p>
        <button onClick={()=>setModalOpen(true)} className="px-3 py-4 border shaddow-md rounded-sm">Modal popup</button>
        {modalOpen && (
            <div onClick={()=>setModalOpen(false)} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div onClick={(e)=>e.stopPropagation()} className="bg-white w-[320px] rounded-lg p-6 relative">
                    <button onClick={()=>setModalOpen(false)} className="absolute top-2 right-2 p-2 hover-gray-500">❌</button>
                    <h2 className="text-lg font-bold mb-2">Modal Title</h2>
                    <p className="text-gray-600">Tailwind Modal in a single file</p>
                    </div>
            </div>
        )}
    </div>
  )
}
