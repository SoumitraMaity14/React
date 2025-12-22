import React, { useState } from 'react'
interface TodoType{
    id:number,
    text: string,
    price:number
}

export const TodoList = () => {
    const [items, setItems]=useState<TodoType[]>([
        {id:1, text:"React Course", price:4999},
        {id:2, text: "HTML Course", price: 2499},
        {id:3, text: "Python Course", price: 5499 }
    ])
    const handaleNewTodo=()=>{
        const newTodo={
            id:Date.now(),
            text: "Learning PLM",
            price: 6999
        }
        setItems([ ...items, newTodo])
    }
    const deleteTodo=(id: number)=>{
       {items.map(item=> item.id !== id)}
    }
  return (
    <>

    </>
  )
}
