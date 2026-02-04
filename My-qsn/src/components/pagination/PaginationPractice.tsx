import { useState } from "react"


const items=Array.from({length: 50}, (_, i)=>`Item ${i+1}`)
const Items_per_page=5

export const PaginationPractice = () => {
    const [currentpage, setCurrentPage]=useState(1)
    const totalPages=(items.length)/Items_per_page
    const currentIndex=(currentpage-1)*Items_per_page

    const visibleItems=items.slice(currentIndex, currentIndex+Items_per_page)
  return (
    <div>
        {visibleItems.map(item=>(
            <li key={item}>
                <p>{item}</p>
                
            </li>
        ))}
        <div className="mt-5 space-x-2">
                    <button onClick={()=>setCurrentPage(p=>p-1)} disabled={currentpage===1}>
                        prev
                    </button>
                    {Array.from({length: totalPages}, (_,i)=>(
                        <button key={i} onClick={()=>setCurrentPage(i+1)}>{i+1}</button>
                    ))}
                    <button onClick={()=>setCurrentPage(p=>p+1)} disabled={currentpage===totalPages}>next</button>

                </div>
    </div>
  )
}
