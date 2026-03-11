import { useState } from "react"

export const PracticeAdd = () => {
    const [todos, setTodos]=useState(
        {name:"argha", age: 27, email:"argha@gmail.com", address:{city:"Gochati", pin:721146}},
)
const addSuman=()=>{
    setTodos({...todos, name:"Babua", email:"babua@gmail.com", address:{
        ...todos.address, pin:721148
    }})
}
  return (
    <div>
        <p className="text-lg">Name: {todos.name} </p>
        <p className="text-base">Age: {todos.age} </p>
        <p className="text-base">Email: {todos.email} </p>
        <p className="text-base">City:{todos.address.city} Pin: {todos.address.pin} </p>
        <button onClick={addSuman} className="p-2 border border-dashed rounded-lg shadow-lg hover:bg-gray-300 cursor-pointer"> Update babua</button>
    </div>
  )
}
