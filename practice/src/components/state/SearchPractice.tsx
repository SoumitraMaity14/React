import { useState } from "react"


export const SearchPractice = () => {
    const [search, setSearch]=useState("")
    const productList=[
        {name: "Apple", price: 150},
        {name: "Mango", price: 100},
        {name:"Banna", price:50},
        {name:"Orange", price: 120}

    ]

    const searchProduct=
        productList.filter((product)=>
            product.name.toLowerCase().includes(search.toLowerCase())
        )

    
  return (
    <div>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        {searchProduct.map((product)=>(
            <div key={product.name} className="p-4 border ">
                <p>{product.name}</p>
                <p>{product.price}</p>

                </div>
        ))}
    </div>
  )
}
