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
| {type:"Remove_Items", payload: {id: number} } 
| {type:"Update_Items", payload:{id:number, quantity:number}}
| {type:"Clear_Cart"}

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
        case "Remove_Items":
            const filteredItems=state.items.filter(item=>item.id!==action.payload.id)
            return {
                ...state,
                items: filteredItems,
                totalAmount: filteredItems.reduce((total, item)=>total+item.price*item.quantity,0),
                totalItems: filteredItems.reduce((total, item)=>total+ item.quantity, 0 )
            }
        case "Update_Items":{
            if(action.payload.quantity===0){
                
            }
            
        }
            
    }

}

export const CartWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <div>CartWithReducer</div>
    )
}
