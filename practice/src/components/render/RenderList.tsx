
export const RenderList = () => {
    const products = [
        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Mobile", price: 599 },
        { id: 3, name: "Tablet", price: 699 },
        { id: 4, name: "Watch", price: 299 },
        { id: 5, name: "Headphone", price: 199 },
    ]
    const productList=products.map((product)=>{
        return(
            <div key={product.id}>
                <h2>Product: {product.name}</h2>
                <p>Price ${product.price}</p>
            </div>
        )
    })

    return (
        <div>
            {productList}
        </div>
    )
}
