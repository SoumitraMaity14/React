import { useState } from "react"


export const SharingState = () => {
    const [items, setItems]=useState({
        ReactCourse:0,
        VueCourse:0
    })
    const price: { ReactPrice: number; VuePrice: number; } ={
        ReactPrice: 499,
        VuePrice: 399
    }
    const handaleReactCart=()=>{
        setItems({
            ...items,
            ReactCourse:items.ReactCourse+1
        })
    }
    const handaleVueCart=()=>{
        setItems({
            ...items,
            VueCourse:items.VueCourse+1
        })
    }
    const clearCart=()=>{
        setItems({
            ReactCourse:0,
            VueCourse:0
        })
    }
  return (
    <div>
        <ShoppingCart name="React Course" price={price.ReactPrice} quantity={items.ReactCourse} addonCart={handaleReactCart}/>
         <ShoppingCart name="Vue Course" price={price.VuePrice} quantity={items.VueCourse} addonCart={handaleVueCart}/>
         <CartSummary items={items} price={price}/>
         <button onClick={clearCart}>Clear cart</button>
    </div>
  )
}
export const ShoppingCart=({name, price, quantity, addonCart}:{name:string, price:number, quantity:number, addonCart:()=>void})=>{
    return(
        <div>
            <h2>name: {name}</h2>
            <p>price: {price} </p>
            <p>Quantity:{quantity} </p>
            <button onClick={addonCart}>Add cart</button>
        </div>
    )
}
type CartSummaryProps = {
  items: {
    ReactCourse: number
    VueCourse: number
  }
  price: {
    ReactPrice: number
    VuePrice: number
  }
}

export const CartSummary=({items, price}:CartSummaryProps)=>{
    const totalItems=items.ReactCourse+items.VueCourse
    const totalPrice=items.ReactCourse*price.ReactPrice+items.VueCourse*price.VuePrice
    return(
        <div>
            <h3>Cart Summary</h3>
            <p>Total Items:{totalItems}</p>
            <p>Total price:{totalPrice}</p>
        </div>
    )
}
