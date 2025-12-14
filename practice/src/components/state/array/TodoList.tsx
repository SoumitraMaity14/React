import { useState } from "react"
interface TodoType{
    id: number,
    text: string,
    done:boolean
}
export const TodoList=()=>{
    const [items, setItems]=useState<TodoType[]>([
        {id:1, text:"learning react", done:false},
        {id:2, text: "Overthinking", done: false}
    ])
    const  addItems=()=>{
         const newItems={
        id: Date.now(),
        text: "planning for trip",
        done: false
    }
    setItems([...items, newItems])

    }
    const removeTodo=(id:number)=>{
        setItems(items.filter((item)=>item.id!==id))
    }
    const toggleList=(id:number)=>{
       setItems(items.map(item=>{
        if(item.id===id){
            return {...item, done: !item.done}
        }
        return item
       }))

    }
   

    return (
        <>
        <ul>
            {items.map((item)=>(
                <li key={item.id}> 
                <span className={`${item.done? "line-through":""}`}>{item.text}</span>
                <button onClick={()=>toggleList(item.id)}>{item.done? "Undo" :"Todo"}</button>
                <button onClick={()=>removeTodo(item.id)}>remove</button>
                </li>
                
            ))}
            <button onClick={addItems}>Add Items</button>
        </ul>
        
        </>
    )
}