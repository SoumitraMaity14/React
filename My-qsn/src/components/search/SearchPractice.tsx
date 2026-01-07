import { useState } from "react"

interface productType {
    name: string,
    price: number
}
export const SearchPractice = () => {
    const [search, setSearch] = useState('');


    const productList: productType[] = [
        { name: "Apple", price: 140 },
        { name: "Mango", price: 99 },
        { name: "Orange", price: 80 }
    ]

    const searchProduct = productList.filter((product) => (
        product.name.toLowerCase().includes(search.toLowerCase())
    ))
    return (
        <div>
            <h2>Search Product List:</h2>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            {searchProduct.map((product) => (
                <div key={product.name}>
                    <p>Name: {product.name}</p>
                    <p>Price:{product.price} /kg</p>
                </div>
            ))}
        </div>
    )
}
