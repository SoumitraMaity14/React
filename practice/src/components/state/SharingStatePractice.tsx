import { useState } from "react"


export const SharingStatePractice = () => {
    const [items, setItems] = useState({
        ReactItems: 0,
        HtmlItems: 0
    })
    const price = {
        ReactPrice: 4999,
        HtmlPrice: 2499
    }
    const handaleReact = () => {
        setItems({
            ...items,
            ReactItems: items.ReactItems + 1
        })
    }
    const handaleHtml = () => {
        setItems({
            ...items,
            HtmlItems: items.HtmlItems + 1
        })
    }
    return (
        <div>
            <ProductSummary name="React Course" price={price.ReactPrice} items={items.ReactItems} addOn={handaleReact} />
            <ProductSummary name="React Course" price={price.ReactPrice} items={items.ReactItems} addOn={handaleHtml} />
            <CartSummary items={items} price={price} />

        </div>
    )
}
export const ProductSummary = ({ name, price, items, addOn }: { name: string, price: number, items: number, addOn: () => void }) => {
    return (
        <>
            <h2>Course: {name}</h2>
            <p>Price:{price} </p>
            <p>count: {items}</p>
            <button onClick={addOn}>Add</button>
        </>
    )
}
interface CartSummaryProps{
    items:{
        ReactItems: number,
        HtmlItems: number
    }
    price:{
        ReactPrice:number,
        HtmlPrice: number
    }
}

export const CartSummary = ({ items, price }: CartSummaryProps) => {
    const totalItems = items.ReactItems +items.HtmlItems
    const totalAmount=items.ReactItems*price.ReactPrice+items.HtmlItems*price.HtmlPrice
    return (
        <>
            <h2>Total Items: {totalItems}</h2>
            <h2>Total Amount: {totalAmount} </h2>
        </>
    )

}
