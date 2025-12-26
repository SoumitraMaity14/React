import { useState } from "react"

export const ProductList=({sortby}:{sortby: string})=>{
    interface productsType{
        name: string,
        price:number
    }
    const productList:productsType[]=[
        {name: "Apple", price: 15},
        {name: "Mango", price: 20},
        {name: "Banna", price: 8},
        {name: "Pineapple", price: 40},
        {name: "watermellon", price: 50},
        {name: "Cherry", price: 5},
        {name: "Orange", price: 15}
    ]

    const sortProducts:Record<string, (a:productsType, b:productsType)=>number>={
        "A-Z": (a,b)=> a.name.localeCompare(b.name),
        "Z-A": (a,b)=> b.name.localeCompare(a.name),
        "PRICE_HIGH_TO_LOW": (a,b)=> a.price - b.price,
        "PRICE_LOW_TO_HIGH":(a,b)=> b.price - a.price
    }
    const sorted=[...productList].sort(sortProducts[sortby])
    return(
        <>
        {sorted.map((product)=>(
            <div key={product.name}>
                <p>Product: {product.name}</p>
                <p>Rs. {product.price}/pcs </p>
            </div>
        ))}
        </>
    )
}
export const Dropdown=({setSortby}:{setSortby:(value:string)=>void})=>{
   
    return(
        <>
        <select onChange={(e:any)=>setSortby(e.target.value)}>
            <option >Select any value</option>
            <option value="A-Z" > A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="PRICE_HIGH_TO_LOW"> PRICE_HIGH_TO_LOW</option>
            <option value="PRICE_LOW_TO_HIGH"> PRICE_LOW_TO_HIGH</option>
        </select>
        </>
    )
}

export const SortPractice=()=>{
    const [sortby, setSortby]=useState("")
    return(
        <>
         <Dropdown setSortby={setSortby}/>
        <ProductList sortby={sortby}/>
       
        </>
    )
}