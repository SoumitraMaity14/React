import React, { useState } from 'react'

export const SearchPracticeTwo = () => {
    const [search, setSearch]=useState("")

    const productList=[
        {name: "Apple", price: 199},
        {name: "Mango", price: 100},
        {name: "Orange", price: 150}
    ]

    const searchProduct=productList.filter((product)=>(
        product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ))
  return (
    <div>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        {searchProduct.map((product)=>(
            <div key={product.name}>
                <p>Name: {product.name}</p>
                <p>Price:{product.price} </p>
                </div>
        ))}
    </div>
  )
}
