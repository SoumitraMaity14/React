
export const ProductList = ({search}:{search:string}) => {
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
    const filteredProduct=products.filter(product=>
        product.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div className="max-w-7xl mx-auto flex gap-2 flex-wrap">
        {filteredProduct.map((product)=>(
            <div key={product.id} className="p-4 border rounded-md shadow-lg w-full ">
                <h2>Fruit Name: {product.name}</h2> 
                <p>Price: {product.price}/Pcs</p>
                
                </div>
        ))}


    </div>
  )
}
