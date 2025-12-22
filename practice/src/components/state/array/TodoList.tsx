import React, { useState } from 'react'
interface TodoType{
    id:number,
    text: string,
    price:number,
    done:boolean
}

export const TodoList = () => {
    const [items, setItems]=useState<TodoType[]>([
        {id:1, text:"React Course", price:4999,done: false},
        {id:2, text: "HTML Course", price: 2499, done:false},
        {id:3, text: "Python Course", price: 5499, done: false }
    ])
    const handaleNewTodo=()=>{
        const newTodo={
            id:Date.now(),
            text: "Learning PLM",
            price: 6999,
            done:false
        }
        setItems([ ...items, newTodo])
    }
    const deleteTodo=(id: number)=>{
       setItems(items.filter(item=> item.id !== id))
    }
    const toggleTodo=(id:number)=>{
        setItems(items.map(item=>{
            if(item.id===id){
                return {...item, done: !item.done}
            }
            return item
    }))
    }
  return (
    <>
    {items.map((item=>{
        return (
            <ul key={item.id} className='flex pb-3 justify-center align-center'>
                <div className={`${item.done? "line-through flex": "flex"}`}>
               <p>Course: {item.text}</p>
                <p>Price: {item.price}</p>
                </div>
                <button onClick={()=>toggleTodo(item.id)}>{item.done? "UNDO" : "TODO"}</button>
                <button onClick={()=>deleteTodo(item.id)}>Delete Todo</button>
                <button onClick={handaleNewTodo}>Add</button>

            </ul>
        )
    }))}

    </>
  )
}
