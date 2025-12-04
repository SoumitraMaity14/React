import { useState } from "react"
type Todo = {
    id: number,
    text: string,
    completed: boolean
}

export const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [input, setInput] = useState("")
    const [filter, setFilter] = useState<"All" | "Active" | "Completed">("All")

    const addInput = () => {
        if (!input.trim()) return;
        const newTodo: Todo = {
            id: Date.now(),
            text: input.trim(),
            completed: false
        }
        setTodos([...todos, newTodo])
        setInput("")

    }
    const toggleCompleted = (id: number) => {
        setTodos(
            todos.map((todo) => (
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ))
        )
    }
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const filteredTodos = todos.filter((todo) => {
        if (filter === "Active") return !todo.completed;
        if (filter === "Completed") return todo.completed;
        return true;
    })

    return (
        <>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addInput}>Add Todo</button>

            <select value={filter} onChange={(e) => setFilter(e.target.value as any)}>
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
            </select>
            <ul className="space-y-2">
                {filteredTodos.map((todo) => (
                    <li key={todo.id} className="p-2">
                        <span
                            onClick={() => toggleCompleted(todo.id)}
                            className={`cursor-pointer ${todo.completed? "line-through text-grey-400":""}`}
                        >
                            {todo.text}

                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>
                            ❌
                        </button>

                    </li>

                ))}
            </ul>
        </>
    )
}
