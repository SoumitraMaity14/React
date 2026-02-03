import { useState } from "react"


export const Accordian = () => {
    const [openId,setopenId]=useState(null)

    const data=[
        {id:1, title: "what is React?", content: "React is UI library"},
        {id:2, title: "What is State", content: "State manages data."},
        {id:3, title: "What is props", content: "props is passes data"}
    ]
    const toggle=(id: any)=>{
        setopenId(prev=> prev===id? null :id)
    }
  return (
    <div>
        {data.map(item=>(
            <div key={item.id}>
                <button onClick={()=>toggle(item.id)}  className="w-full p-2 border text-base">{item.title}</button>
                {openId === item.id &&(
                    <p className="p-2 border ">{item.content}</p>
                )}
                </div>
        ))}
    </div>
  )
}
