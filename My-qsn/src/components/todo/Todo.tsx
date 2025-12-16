import  { useState } from 'react'
interface Todo{
    id:number,
    text:string,
    completed:boolean
}

export const Todo = () => {
    const [todos, setTodos]=useState<Todo[]>([]);
    const [input, setInput]=useState<string>("")

    const addTodo=()=>{
        if(!input?.trim()) return;
        const newTodo:Todo={
            id:Date.now(),
            text: input.trim(),
            completed:false

        }
        setTodos([...todos, newTodo ])
        setInput("")
    }
    const deleteTodo=(id:number)=>{
       setTodos( todos.filter((todo)=>todo.id!==id))
    }
    const toggleCompleted=(id:number)=>{
        setTodos(todos.map((todo)=>(
            todo.id===id ? {...todo, completed: !todo.completed}: todo
        )))
    }
  return (
    <div className='flex flex-col max-w-6xl mx-auto justify-center items-center'>
        <div className='flex  gap-4 mt-5'>
             <input className='px-2 py-2 border rounded-lg shadow-lg' type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button className='px-2 py-2 border rounded-lg shadow-lg bg-gray-200' onClick={addTodo}>Add todo</button>

        </div>
       

        {
            todos.map((todo)=>(
                <div key={todo.id} className='flex gap-3 mt-3'>
                    <span className={`${todo.completed? "line-through text-center": ""} `}> {todo.text}</span> 
                    <button className='px-2 py-2 border bg-green-50 rounded-lg shadod-lg' onClick={()=>toggleCompleted(todo.id)}>{todo.completed? "undo":"completed"}</button>
                    <button className='px-2 py-2 border bg-red-100 rounded-lg shadod-lg' onClick={()=>deleteTodo(todo.id)}>Delete Todo</button>
                </div>
            ))
        }

    </div>
  )
}
