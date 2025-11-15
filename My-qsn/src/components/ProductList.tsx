
export const ProductList = ({sortBy}:{sortBy:string}) => {
   type productsType={
    name:string,
    price:number
   }
   
    const products:productsType[] = [
        { name: "Apple", price: 12 },
        { name: "Mango", price: 15 },
        { name: "Banna", price: 8 },
        { name: "Nuts", price: 30 },
        { name: "Chana", price: 10 },
        { name: "Lemon", price: 7 },
        { name: "Cutrad apple", price: 5 },
        { name: "Grapes", price: 18 },
        { name: "Orange", price: 14 },
        { name: "Pineapple", price: 25 },
        { name: "Papaya", price: 22 },
    ];
    const sortFunction:Record<string, (a:productsType, b:productsType)=>number>={
        "A-Z":(a,b)=>a.name.localeCompare(b.name),
        "Z-A":(a, b)=> b.name.localeCompare(a.name),
        "PRICE_LOW_HIGH":(a, b)=>a.price-b.price,
        "PRICE_HIGH_LOW":(a, b)=>b.price-a.price
    }
    const sortByProducts= [...products].sort(sortFunction[sortBy]||(()=>0))
    


    // const sortByProducts=[...products].sort((a,b)=>{
    //     if(sortBy === "A-Z") {
    //         return a.name.localeCompare(b.name)
    //     }
    //     if(sortBy === "Z-A"){
    //         return b.name.localeCompare(a.name)
    //     }
    //     return 0;
    // })


  return (
    <div>
      
        <div className="flex justify-center align-center">
            <div className=" flex items-center justify-center flex-row gap-4 flex-wrap">
               
               {sortByProducts.map((product)=>{
                return(
                    <div key={product.name} className="w-24  px-2  py-4 shadow-md  flex flex-col justify-center items-center">
                        <h4>{product.name}</h4>
                        <p>Rs: {product.price} /pcs</p>
                    </div>
                )
               })}
                
               
            </div>
        </div>
    </div>
  )
}
