import { useState } from "react"

export const TodoListPractice = () => {
    const [items, setItems] = useState([
        { id: 1, text: "React COurse", price: 4999, done: false },
        { id: 2, text: "Java COurse", price: 6999, done: false },
        { id: 3, text: "Python COurse", price: 5999, done: false }
    ])

    const addNewItems = () => {
        const newItems = {
            id: Date.now(),
            text: "Html Course",
            price: 2999,
            done: false
        }
        setItems([...items, newItems])
    }
    const deleteNewItems = (id: number) => {
        setItems(items.filter(item => item.id !== id))
    }
    const toggleTodo = (id: number) => {
        setItems(items.map((item) => {
            if (item.id === id) {
                return { ...item, done: !item.done }
            }
            return item
        }))
    }
    return (
        <div>
            {items.map((item) =>
                <div key={item.id} className="flex gap-3">
                    <div className={`${item.done ? "line-through flex" : "flex"}`}>
                        <p>{item.text}</p>
                        <p>{item.price}</p>
                    </div>
                    
                    <button onClick={()=>toggleTodo(item.id)} className="px-2 text-white">{item.done ? "UNDO" : "TODO"}</button>
                    <button onClick={()=>deleteNewItems(item.id)}  className="px-2 text-white">Delete</button>
                </div>
            )}
            <button onClick={addNewItems}>Add Course</button>

        </div>
    )
}
