import { useState } from "react";

interface TodoType {
    id: number,
    text: string,
    completed: boolean
}


export const TodoListPractice = () => {
    const [todos, setTodos] = useState<TodoType[]>([])
    const [input, setInput] = useState("")
 const [filter, setFilter]=useState<"All"| "Active" | "Completed">("All")
    const addTodoInput = () => {
        if (!input.trim()) return
        const newTodo: TodoType = {
            id: Date.now(),
            text: input.trim(),
            completed: false
        }
        setTodos([...todos, newTodo])
        setInput("")
    }
    const toggleTodo = (id: number) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }
    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => 
            todo.id !== id
        ))
    }
    const filterTodo=()=>{
        todos.map(todo=>{
            if(filter === "Active") return todo.completed
            if(filter==="Completed") return !todo.completed
            return true
            }
        )
    }
    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="p-2 border-white border-2"/>
            <button onClick={addTodoInput}>Add</button>
            <select>
                <option value="All">All</option><option value="Completed">Completed</option><option value="Active">Active</option>
            </select>
            <ul>
                {filterTodo.map((todo) =>
                    <li key={todo.id}>
                        <span onClick={() => toggleTodo(todo.id)} className={`cursor-pointer ${todo.completed ? "line-through text-gray" : ""}`}>{todo.text}</span>
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}
