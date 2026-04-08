import { useState } from "react";

 type productType={
        id:number,
        name:string,
        price:number,
    }

    const products: productType[]=[
         { id:1, name: "Apple", price: 12 },
        { id:2, name: "Mango", price: 15 },
        { id:3, name: "Banna", price: 8 },
        { id:4, name: "Nuts", price: 30 },
        { id:5, name: "Chana", price: 10 },
        { id:6, name: "Lemon", price: 7 },
        { id:7, name: "Custrad apple", price: 5 },
        { id:8, name: "Grapes", price: 18 },
        { id:9, name: "Orange", price: 14 },
        { id:10, name: "Pineapple", price: 25 },
        { id:11, name: "Papaya", price: 22 },
    ];

export const SearchProduct = () => {
    const [search, setSearch]=useState('')

    const filterSearch=products.filter(product=>
        product.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div className="max-w-4xl space-y-6 mx-auto">
        <input type="text" className="p-2 border rounded" onChange={(e)=>setSearch(e.target.value)}/>
        <div className="flex flex-row flex-wrap gap-4">
            {
                filterSearch.map((product)=>(
                    <div key={product.id} className="p-4 border">
                        <p className="text-2xl">Fruit</p>
                        <p className="text-bold text-green-600 text-xl">Fruit Name:{product.name}</p>
                        <p className="text-semibold text-base">Price: {product.price}/pcs </p>
                         <button className="mt-6 w-full p-2 border rounded shadow-lg bg-green-200">Cart</button>
                        </div>
                ))
            }
        </div>
       

    </div>
  )
}

    