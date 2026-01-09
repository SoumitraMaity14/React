import { useState } from "react"

interface ProductType{
    name: string,
    price: number
}

export const SortedProduct = () => {
    const [select, setSelect]=useState("")
    const [dropDown, setDropDown]=useState(false)
    const product:ProductType[]=[
        {name:"Mango", price: 100},
        {name: "Apple", price:150},
        {name:"Orange", price: 90},
        {name: "pineapple", price: 50}
    ]

    const sortedProduct:Record<string, (a:ProductType, b:ProductType)=>number>={
        
        "A-Z": (a, b)=>  a.name.localeCompare(b.name),
        "Z-A": (a, b)=>  b.name.localeCompare(a.name),
        "PRICE_HIGH_TO_LOW":(a, b)=> a.price-b.price,
        "PRICE_LOW_TO_HIGH": (a,b)=>b.price=a.price
    }
    const sort =[...product].sort(sortedProduct[select])
  return (
    <div>
        <select onChange={(e)=>setSelect(e.target.value)}>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="PRICE_HIGH_TO_LOW">PRICE_HIGH_TO_LOW</option>
            <option value="PRICE_LOW_TO_HIGH">PRICE_LOW_TO_HIGH</option>
        </select>
        {sort.map((product)=>(
            <div key={product.name} className="border p-3">
                <p>Name: {product.name}</p>
                <p>Price: {product.price}/kg</p>
                </div>
        ))}
    </div>
  )
}
