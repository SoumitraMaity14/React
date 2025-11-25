import { useState, useEffect, useRef } from "react"
export const Dropdown = ({setSortby}:{setSortby:(value:string)=>void}) => {
    const [isopen, setIsOpen] = useState(false)

    const [selected, setSelected] = useState<string | null>(null)

    const dropdownRef=useRef<HTMLDivElement | null>(null)


    useEffect(()=>{
        const handleClickOutside=(e:MouseEvent)=>{
            if(dropdownRef.current && !dropdownRef.current.contains(e.target as Node)){
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return()=> document.removeEventListener("mousedown", handleClickOutside)

    }, [])

    const options = ["A-Z", "Z-A", "PRICE_LOW_HIGH", "PRICE_HIGH_LOW"];

    const handleClick = (option: string) => {
        setSelected(option);
        setIsOpen(false)
        setSortby(option);
    }



    return (
        <div ref={dropdownRef}>
            <div className="flex justify-center items-center h-20">
                <div className="relative inline-block text-left w-48">
                    <button
                        onClick={() => setIsOpen(!isopen)}
                        className="w-full justify-between border px-3 py-2 flex items-center"
                    >
                        {selected || "Sort By"}
                        <svg className={`w-4 h-4 transform transition-transform ${(isopen ? 'rotate-180' : 'rotate-0')}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    <div>
                        {isopen && <ul className="absolute mt-1 w-full border bg-white z-10">
                            {options.map((option) => {
                                return (
                                    <li key={option}
                                        onClick={() => handleClick(option)}
                                        className="cursor-pointer px-3 py-2"
                                    >
                                        {option}
                                    </li>
                                )
                            })}
                        </ul>}
                    </div>
                </div>
            </div>

        </div>
    )
}
