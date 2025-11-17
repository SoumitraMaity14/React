import { useState } from "react"


export const Dropdown = ({setSortBy}:{setSortBy:(value:string)=>void}) => {
    const [isOpen, setIsOpen] = useState(false)

    const [selected, setSelected] = useState<string>()

    const options = ["A-Z", "Z-A", "PRICE_LOW_HIGH", "PRICE_HIGH_LOW"];
    const handleClick=(option:string)=>{
        setSelected(option);
        setSortBy(option);
        setIsOpen(false);
    }
    return (
        <div className="flex justify-center items-center bg-gry-100 h-20">
            <div className="relative inline-block text-left w-48">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full border flex justify-between px-3 py-2 items-center"
                >
                    {selected || "Sort By"}
                    <svg
                        className={`w-4 h-4 transform transition-transform ${(isOpen ? 'rotate-180' : 'rotate-0')}`}
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
                {isOpen &&
                    <ul className="absolute mt-1 w-full border bg-white z-10">
                        {options.map((option) => (
                            <li
                                key="option"
                                className="cursor-pointer px-3 py-2"
                                onClick={()=>handleClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    )
}
