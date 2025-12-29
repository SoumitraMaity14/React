import { useState } from "react";

interface TodoType {
    id: number,
    text: string,
    completed: boolean
}


export const TodoListPractice = () => {
    const [todos, setTodos] = useState<TodoType[]>([])
    const [input, setInput] = useState("")

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
    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="p-2 border-white border-2"/>
            <button onClick={addTodoInput}>Add</button>
            <ul>
                {todos.map((todo) =>
                    <li key={todo.id}>
                        <span onClick={() => toggleTodo(todo.id)} className={`cursor-pointer ${todo.completed ? "line-through text-gray" : ""}`}>{todo.text}</span>
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}
