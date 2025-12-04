import { useState } from "react"


export const ApplyCupon = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedCupons, setSelectedCupons] = useState<string | null>(null)

    const cupons = ["SAVE10", "SAVE20", "SAVE30"]

    return (
        <div>
            <div>
                {selectedCupons && (
                    <h3>Select Cupons: {selectedCupons}</h3>
                )}
            </div>
            <div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 border "
                >
                    Apply Cupon
                </button>
            </div>
            {isOpen && (
                <div>
                    {cupons.map((c)=>{
                        return(
                            <button
                            onClick={()=>setSelectedCupons(c)}
                            >
                                {c}
                            </button>
                           
                        )
                        
                    },
                    
                    )}
                     <button 
                            onClick={()=>setIsOpen(false)}
                            >
                                select cupons
                            </button>
                </div>
            )

            }

        </div>
    )
}
