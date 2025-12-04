

//todo list making
import { useState } from "react"

type Todo={
    id:number;
    text:string;
    completed:boolean;
}

export const Todo = () => {

    const [todos, setTodos]=useState<Todo[]>([])
    const [input, setInput]=useState("")
    const [filter,setFilter]=useState<"all" | "active" | "completed">("all")

    const addTodo=()=>{
        if (!input.trim()) return;
        const newTodo:Todo={
            id:Date.now(),
            text:input.trim(),
            completed:false,
        }
        setTodos([...todos, newTodo])
        setInput("")
    }
    const toggleCompleted = (id:number)=>{
        setTodos(
            todos.map((todo)=>
                todo.id===id ?{...todo, completed: !todo.completed}: todo
            )
        )
    }
    const deleteTodo=(id:number)=>{
       setTodos(todos.filter((todo)=> todo.id !==id))
    }
     const filteredTodos =todos.filter((todo)=>{
            if(filter=== "active") return !todo.completed;
            if(filter==="completed") return todo.completed;
            return true;
        })

  return (
  <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>

      {/* Input + Add */}
      <div className="flex gap-2 mb-4">
        <input
          className="border px-2 py-1 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>

      {/* Filter */}
      <select
        className="border px-2 py-1 mb-4"
        value={filter}
        onChange={(e) => setFilter(e.target.value as any)}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

      {/* Todo List */}
      <ul className="space-y-2">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span
              onClick={() => toggleCompleted(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-600 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}


