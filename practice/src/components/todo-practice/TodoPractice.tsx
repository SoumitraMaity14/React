import { useState } from "react"

interface todoType {
    id: number,
    text: string,
    completed: boolean
}
export const TodoPractice = () => {
    const [todos, setTodos] = useState<todoType[]>([])
    const [input, setInput] = useState(" ")
    const [filter, setFilter] = useState<"All" | "Active" | "Completed">("All")

    const addTodo = () => {
        const newTodo = {
            id: Date.now(),
            text: input.trim(),
            completed: false
        }
        setTodos([...todos, newTodo])
        setInput(" ")
    }
    const toggleTodo = (id: any) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }
    const deleteTodo = (id: any) => {
        setTodos(todos.filter(todo =>
            todo.id !== id
        ))
    }
    const filteredTodos = todos.filter((todo) => {

        if (filter === "Active") return !todo.completed
        if (filter === "Completed") return todo.completed
        return true
    }
    )
    return (
        <div className="max-w-4xl mx-auto mt-10 space-y-8">
            <div className="space-x-6">
                <input className="p-2 rounded border" type="text" onChange={(e) => setInput(e.target.value)} />
                <button
                    className="p-2 rounded border"
                    onClick={addTodo}
                >Add Todo</button>
            </div>
            <select className="p-2 border rounded" onChange={(e) => setFilter(e.target.value as "All" | "Active" | "Completed")}>
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
            </select>
            {
                filteredTodos.map((todo) => (
                    <div key={todo.id} className="space-x-5">
                        <span 
                        className={`cursor-pointer ${todo.completed?"line-through text-red":""}`}
                        onClick={()=>toggleTodo(todo.id)}>{todo.text}</span>
                        <button onClick={()=>deleteTodo(todo.id)}>❌</button>
                    </div>
                ))
            }

        </div>
    )
}
