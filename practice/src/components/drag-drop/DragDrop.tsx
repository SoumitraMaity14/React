import React, { useState } from 'react'

export const DragDrop = () => {
    const [leftItems, setLeftItems]=useState([
        "apple", "bananna", "mango"
    ])
    const [rightItems, setRightItems]=useState<string[]>([])
    const handaleDragItems=(
        e: React.DragEvent<HTMLDivElement>,
        item:string,
        from: "left"|"right"
    )=>{
        e.dataTransfer.setData("application/json", JSON.stringify({item, from}))

    }
    const handaleDropItems=(
        e:React.DragEvent<HTMLDivElement>,
        to:"left"|"right"
    )=>{
        const data=JSON.parse(e.dataTransfer.getData("application/json")) as ({item:string, from: "left"|"right"})
        if(data.from===to) return
        if(to==="left"){
            setRightItems(prev=>prev.filter(i=>i!==data.item))
            setLeftItems(prev=>[...prev, data.item])
        }
        else{
            setLeftItems(prev=>prev.filter(i=>i!==data.item))
            setRightItems(prev=>[...prev, data.item])
        }
    }
  return (
    <div className='flex justify-center items-center gap-10'>
        <div 
        className="p-4 w-40 min-h-[300px] border border-dashed"
        onDragOver={(e)=>e.preventDefault()}
        onDrop={(e)=>handaleDropItems(e, "left")}
        >
            {leftItems.map(item=>(
                <div className='w-full p-4 bg-blue-100'
                draggable
                onDragStart={(e)=>handaleDragItems(e, item, 'left')}
                >
                    {item}
                    </div>
            ))}
        </div>
        <div 
        className="p-4 w-40 min-h-[300px] border border-dashed"
        onDragOver={(e)=>e.preventDefault()}
        onDrop={(e)=>handaleDropItems(e, "right")}
        >
            {rightItems.map(item=>(
                <div className='w-full p-4 bg-blue-100'
                draggable
                onDragStart={(e)=>handaleDragItems(e, item, 'right')}
                >
                    {item}
                    </div>
            ))}
        </div>
    </div>
  )
}
