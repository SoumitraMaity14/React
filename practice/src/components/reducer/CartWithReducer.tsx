import React, { useReducer } from 'react'

interface ProductsType {
    id: number,
    name: string,
    price: number
}
interface CartItems extends ProductsType {
    quantity: number
}
interface CartState {
    items: CartItems[],
    totalItems: number,
    totalPrice: number
}

const intialState: CartState = {
    items: [],
    totalItems: 0,
    totalPrice: 0

}

type CartAction = | { type: "Add_Items", payload: ProductsType }
    | { type: "Remove_Items", payload: { id: number} }
    | { type: "Update_Items", payload: { id: number, quantity: number } }
    | { type: "Clear_Cart" }

const reducer = (state: CartState, action: CartAction) => {
    switch (action.type) {
        case "Add_Items":
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id)
            let updateItems
            if (existingItemIndex >= 0) {
                updateItems = [...state.items]
                updateItems[existingItemIndex] = {
                    ...updateItems[existingItemIndex],
                    quantity: updateItems[existingItemIndex].quantity + 1
                }
            }
            else {
                updateItems = [
                    ...state.items,
                    {
                        ...action.payload,
                        quantity: 1
                    }
                ]
            }
            return{
                ...state,
                items: updateItems,
                totalItems: updateItems.reduce((total, item)=> total + item.quantity, 0),
                totalPrice: updateItems.reduce((total, item)=> total + (item.price)*(item.quantity), 0)
            }
        case "Remove_Items":
            const filteredItems = state.items.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                items: filteredItems,
                totalPrice: filteredItems.reduce((total, item) => total + item.price * item.quantity, 0),
                totalItems: filteredItems.reduce((total, item) => total + item.quantity, 0)
            }
        case "Update_Items": {
            if (action.payload.quantity === 0) {
                return reducer(state, { type: 'Remove_Items', payload: { id: action.payload.id } })
            }
            const updateQuantityItems = state.items.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item)
            return {
                ...state,
                items: updateQuantityItems,
                totalPrice: updateQuantityItems.reduce((total, item) => total + item.price * item.quantity, 0),
                totalItems: updateQuantityItems.reduce((total, item) => total + item.quantity, 0)
            }
        }
        case "Clear_Cart":
            return intialState
        default:
            return state

    }

}

export const CartWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, intialState)

    const ProductList: ProductsType[] = [

        { id: 1, name: "React Course", price: 4999 },
        { id: 2, name: "Html Course", price: 2499 }
    ]
    return (
        <div>
            <h2>Product List</h2>
            {ProductList.map((product) => (
                <div key={product.id}>
                    <div className='px-4 py-3 grid grid-col-span-4'>
                        <p>Course: {product.name}</p>
                        <p>Price:{product.price}/course </p>
                        <button onClick={() => dispatch({
                            type: "Add_Items", payload: product
                        })}>Add</button>
                    </div>
                </div>
            )
            )}
            <div>
                <h2>Cart Summary:</h2>
                {state.items.length === 0 ? (
                    <div> Your Cart is empty </div>
                ) : (
                    <div>
                        {state.items.map((item) => (
                            <div key={item.id}>
                                
                                <div className='flex space-x-3'>
                                    <p>{item.name}-{item.quantity}*{item.price}</p>
                                    
                                    <button onClick={() => dispatch({
                                        type: "Update_Items", payload: { id: item.id, quantity: item.quantity-1 }
                                    })}>-</button>
                                    <button onClick={() => dispatch({
                                        type: "Update_Items", payload: { id: item.id, quantity: item.quantity+1 }
                                    })}>+</button>
                                    <button onClick={() => dispatch({
                                        type: "Remove_Items", payload: { id: item.id }
                                    })}>Remove</button>
                                    
                                </div>
                                <button onClick={() => dispatch({ type: "Clear_Cart" })}>Remove</button>
                            </div>
                        ))}
                    </div>
                )}
                <div>
                    <p>Total Items: {state.totalItems } </p>
                    <p>Total Price: {state.totalPrice} </p>
                </div>

            </div>
        </div>
    )
}
