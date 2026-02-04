import React, { useState } from 'react'

export const AccordianPractice = () => {
    const [openId, setopenId]=useState(null)

     const data=[
        {id:1, title: "what is React?", content: "React is UI library"},
        {id:2, title: "What is State", content: "State manages data."},
        {id:3, title: "What is props", content: "props is passes data"}
    ]

    const toogleList=(id: any)=>{
        setopenId(prev=>prev===id?null :id)
    }

     
  return (
    <div>
        {data.map(item=>(
            <li key={item.id}>
                <button onClick={()=>toogleList(item.id)}>{item.title}</button>
                {openId===item.id &&(
                    <div>
                        {item.content}
                    </div>
                )}
            </li>
        ))}
    </div>
  )
}
