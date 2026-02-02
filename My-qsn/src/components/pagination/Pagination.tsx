import React, { useState } from 'react'

const items=Array.from({length:50}, (_, i)=> `Item ${i+1}`)
const ITEMS_PER_PAGE=5



export const Pagination = () => {
    const [currentPage, setCurrentPage]=useState(1)
    const totalPages=Math.ceil(items.length/ITEMS_PER_PAGE)
    const startIndex=(currentPage-1)*ITEMS_PER_PAGE

    const visibleItems=items.slice(
        startIndex,
        startIndex+ITEMS_PER_PAGE
    )
  return (
    <div>
        <h1>List</h1>
        <ul>
            {visibleItems.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
        <div className='mt-5'>
            <button 
            onClick={()=>setCurrentPage(p=>p-1)}
            disabled={currentPage===1}>prev</button>
            {Array.from({length: totalPages}, (_, i)=>(
                <button onClick={()=> setCurrentPage(i+1)}>{i+1}</button>
            ))}
            <button onClick={()=>setCurrentPage(p=>p+1)}
            disabled={currentPage===totalPages}>Next</button>

        </div>
    </div>
  )
}
