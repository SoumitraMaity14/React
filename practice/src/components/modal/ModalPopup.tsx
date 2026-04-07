import { useEffect, useState } from "react"

export const ModalPopup = () => {
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        if (!modalOpen) return
        const handaleClickEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setModalOpen(false)
            }

        }
        document.addEventListener("keydown", handaleClickEsc)

        return()=>{
            document.removeEventListener("keydown", handaleClickEsc)
        }
    })
    return (
        <div className="relative">
            <button onClick={()=>setModalOpen(true)}>Modal popup</button>
            {modalOpen && (
                <div className="absolute top-10">
                    <p>Modal Text</p>
                    <p>Modal Contnent</p>
                </div>
            )}
        </div>
    )
}
