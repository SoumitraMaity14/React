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
    <div className='max-w-6xl mx-auto'>
        <input className='px-2 py-3 border' type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addTodo}>Add todo</button>

        {
            todos.map((todo)=>(
                <div key={todo.id} className='flex gap-3 mt-3'>
                    <span className={`${todo.completed? "line-through": ""}`}> {todo.text}</span> 
                    <button className='px-2 py-3 border' onClick={()=>toggleCompleted(todo.id)}>{todo.completed? "undo":"completed"}</button>
                    <button className='px-2 py-3 border' onClick={()=>deleteTodo(todo.id)}>Delete Todo</button>
                </div>
            ))
        }

    </div>
  )
}
