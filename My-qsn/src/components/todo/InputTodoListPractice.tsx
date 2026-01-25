import { useState } from "react"

interface TodoType{
    id:number,
    text:string,
    completed:boolean
}

export const InputTodoListPractice = () => {
    const [todos, setTodos]=useState<TodoType[]>([])
    const [input, setInput]=useState("")
    const [filter, setFilter]=useState< "All" |"Active" |"Completed">("All")

    const addTodo=()=>{
        const newTodo={
            id:Date.now(),
            text:input.trim(),
            completed:false
        }
        setTodos([...todos, newTodo])
        setInput("")
    }
    const toggleTodo=(id:number)=>{
        setTodos(todos.map((todo)=>(
            todo.id===id?{...todo, completed: !todo.completed}:todo
        )))
    }
    const deleteTodo=(id:number)=>{
        setTodos(todos.filter(todo=>todo.id !== id))
    }

    const filterTodos=
        todos.filter(todo=>{
            if(filter==="Active") return !todo.completed
            if(filter==="Completed") return todo.completed
            return true
        }
        )
    


  return (
    <div className="flex flex-col justify-center items-center space-y-5 pt-6">
        <div className="flex-row space-x-4">
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}  className="p-2 border border-black"/>
        <button onClick={addTodo}>Add Todo</button>
        </div>
        <select value={filter} onChange={(e)=>setFilter(e.target.value as "All" | "Active" | "Completed")} className="p-4 border border-yellow">
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
        </select>
        <ul className="space-y-6">
            {
                filterTodos.map((todo)=>(
                    <div key={todo.id}>
                        <span onClick={()=>toggleTodo(todo.id)} className={`cursor-pointer ${todo.completed ? "line-through text-red" :""}`}>{todo.text}</span>
                        <button onClick={()=>deleteTodo(todo.id)}>❌</button>
                    </div>

                ))
            }
        </ul>
    </div>
  )
}
