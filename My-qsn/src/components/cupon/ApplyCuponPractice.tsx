import { useState } from "react"


export const ApplyCuponPractice = () => {
    const [items, setItems]=useState({
        ReactItems:0, HtmlItems:0
    })

    const price:{ReactPrice:number, HtmlPrice:number}={
        ReactPrice: 2499, HtmlPrice:1499
    }
    const AddReactPrice=()=>{
        setItems({
            ...items, ReactItems:items.ReactItems+1
        })
    }
    const AddHtmlPrice=()=>{
        setItems({
            ...items, HtmlItems:items.HtmlItems+1
        })
    }

  return (
    <div>
        <ProductSummary name="React Course" items={items.ReactItems} price={price.ReactPrice} addOn={AddReactPrice}/>
        <ProductSummary name="Html Course" items={items.HtmlItems} price={price.HtmlPrice} addOn={AddHtmlPrice}/>
        <CartSummary items={items} price={price}/>

    </div>
  )
}

export const ProductSummary=({name, items, price, addOn}:{name:string, items:number, price:number, addOn:()=>void})=>{
    return(
        <>
        <div className="p-2 border border-white-400">
            <p>Course:{name} </p>
            <p>Price:{price} </p>
            <p>Qty:{items} </p>
            <button onClick={addOn}>Add</button>
        </div>
        </>
    )
}
interface Cartprops{
    items:{
        ReactItems: number,
        HtmlItems:number
    }
    price:{
        ReactPrice:number,
        HtmlPrice:number
    }
}


export const CartSummary=({items, price}:Cartprops)=>{
    const [selectedCupons, setSelectedCupons]=useState("")
    const totalItems=items.ReactItems+items.HtmlItems
    const totalPrice=items.ReactItems*price.ReactPrice+items.HtmlItems*price.HtmlPrice
    const cupons:Record<string, number>={
        "SAVE20":20, "SAVE30": 30, "SAVE40":40
    }
    const discountPercentage=selectedCupons? cupons[selectedCupons]:0
    const discounprice=(totalPrice * discountPercentage)/100
    const finalAmount=totalPrice-discounprice
    return(
        <>
        <h2>Cart Summary</h2>
        <p>Total Product: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <select value={selectedCupons} onChange={(e)=>setSelectedCupons(e.target.value)}>
            <option value="">Select Cupon</option>
            <option value="SAVE20">SAVE20</option>
            <option value="SAVE30">SAVE30</option>
            <option value="SAVE40">SAVE40</option>
        </select>
        {selectedCupons && (
            <div>
                <p>Apply Cupon: {discountPercentage}</p>
                <p>Final Amount After Discount:{finalAmount}</p>
            </div>
        )}
        </>
    )

}
