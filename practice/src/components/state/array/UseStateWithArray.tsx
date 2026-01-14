import { useState } from "react"

export const UseStateWithArray = () => {
    const [list, setList] = useState([
        { id: 1, fruits: "Mango", price: 100 },
        { id: 2, fruits: "Apple", price: 150 },
        { id: 3, fruits: "Orange", price: 80 },
        { id: 4, fruits: "Bananna", price: 50 }
    ])
    const addFruits=()=>{
        const newFruits={
            id: Date.now(),
            fruits: "PineApple",
            price: 60
        }
        setList([...list, newFruits])
    }
    const deleteFruits=(id: any)=>{
        setList(list.filter(f=>f.id !== id))

    }
    const updateFruit=(id:any, newPrice:number)=>{
        setList(list.map((l)=> l.id===id?{...l, price:newPrice}:l ))
        
    }

    return (
        <div>
            {list.map((fruit) => {
                return (
                    <div key={fruit.id} className="p-3 border border-gray-300">
                        <p>Fruits: {fruit.fruits}</p>
                        <p>Price:{fruit.price}/kg </p>
                        <button onClick={()=>deleteFruits(fruit.id)}>Delete</button>
                        <button onClick={()=>updateFruit(fruit.id, fruit.price+10)}>Update price</button>
                    </div>
                )
            })}
            <button onClick={addFruits}>Add Fruit List</button>


        </div>
    )
}
