import { useState } from "react"

export const CuponDiscount = () => {
    const [items, setItems] = useState({
        ReactItems: 0,
        HtmlItems: 0
    })
    const price: { ReactPrice: number, HtmlPrice: number } = {
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
        <div className="max-w-xl mx-auto flex justify-center items-center flex-col">
            <ProductSummary name="React Course" price={price.ReactPrice} items={items.ReactItems} addOn={handaleReact} />
            <ProductSummary name="Html Course" price={price.HtmlPrice} items={items.HtmlItems} addOn={handaleHtml} />
            <CartSummary items={items} price={price} />
        </div>
    )
}

export const ProductSummary = ({ name, price, items, addOn }: { name: string, price: number, items: number, addOn: () => void }) => {
    return (
        <div>
            <p>name:{name}</p>
            <p>price:{price}</p>
            <p>Count:{items}</p>
            <button onClick={addOn}>Add</button>
        </div>
    )
}

interface cartSummaryProps {
    items: {
        ReactItems: number,
        HtmlItems: number
    },
    price: {
        ReactPrice: number,
        HtmlPrice: number
    },

}

export const CartSummary = ({ items, price, }: cartSummaryProps) => {
    const [selectedCupons, setSelectedCupons] = useState("")
    const totalItems = items.HtmlItems + items.ReactItems
    const totalPrice = items.ReactItems * price.ReactPrice + items.HtmlItems * price.HtmlPrice
    const cupons: Record<string, number> = { "SAVE20": 20, "SAVE30": 30, "SAVE40": 40 }

    const discountPercentage = selectedCupons ? cupons[selectedCupons] : 0
    const discountAmount = (totalPrice * discountPercentage) / 100
    const finalPrice = totalPrice - discountAmount
    return (
        <div>
            <p>Total items:{totalItems}</p>
            <p>Total price: {totalPrice}</p>
            <select
                value={selectedCupons}
                onChange={(e: any) => setSelectedCupons(e.target.value)}
            >
                <option value="">Select Cupons:</option>
                <option value="SAVE20">SAVE20 (20% off)</option>
                <option value="SAVE30">SAVE30 (30% off)</option>
                <option value="SAVE40">SAVE40 (40% off)</option>

            </select>
            {selectedCupons && (
                <>
                    <p>Total DisCount: {discountPercentage}</p>
                    <p>Final Price After Discount: {finalPrice}</p>
                </>
            )}
        </div>
    )
}