import
{ useReducer } from 'react'
interface ProductsType {
    id: number,
    name: string,
    price: number
}
interface CartItem extends ProductsType {
    quantity: number
}

interface CartState {
    items: CartItem[]
    totalAmount: number
    totalItems: number
}

const initialState: CartState = {
    items: [],
    totalAmount: 0,
    totalItems: 0
}
type CartAction =
    | { type: "ADD_ITEMS"; payload: ProductsType }
    | { type: "REMOVE_ITEMS"; payload: { id: number } }
    | { type: "UPDATE_ITEMS"; payload: { id: number; quantity: number } }
    | { type: "CLEAR_CART" }

const reducer = (state: CartState, action: CartAction) => {
    switch (action.type) {
        case "ADD_ITEMS": {
            const existingItemIndex = state.items.findIndex(
                (item: any) => item.id === action.payload.id
            );
            let updateItems;
            if (existingItemIndex >= 0) {
                updateItems = [...state.items]
                updateItems[existingItemIndex] = {
                    ...updateItems[existingItemIndex],
                    quantity: updateItems[existingItemIndex].quantity + 1
                }
            } else {
                updateItems = [
                    ...state.items,
                    {
                        ...action.payload,
                        quantity: 1
                    }
                ]
            }
            return {
                ...state,
                items: updateItems,
                totalAmount: updateItems.reduce(
                    (total, item) => total + item.price * item.quantity, 0
                ),
                totalItems: updateItems.reduce(
                    (total, item) => total + item.quantity, 0
                )
            }
        }
        case "REMOVE_ITEMS":{
            const filteredItems=state.items.filter((item)=> item.id !== action.payload.id)
            return {
                ...state,
                items: filteredItems,
                totalAmount:filteredItems.reduce(
                    (total, item)=> total + item.price * item.quantity,  0
                ),
                totalItems: filteredItems.reduce(
                    (total, item)=> total + item.quantity, 0
                )
            }

        }
        case "UPDATE_ITEMS":{
            if(action.payload.quantity===0){
                return reducer(state, {
                    type: "REMOVE_ITEMS",
                    payload: {id:action.payload.id}
                })
            }
            const updateQuantityItems=state.items.map((item)=>
            item.id===action.payload.id ?{...item, quantity: action.payload.quantity}: item)
            return {
                ...state,
                items: updateQuantityItems,
                totalAmount: updateQuantityItems.reduce(
                    (total, item)=> total +item.price * item.quantity, 0
                ),
                totalItems: updateQuantityItems.reduce((total, item)=> total+item .quantity, 0) 
            }
        }
        case "CLEAR_CART":
            return initialState;
        default:
            return state

    }
}

export const ShoppingCartWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const products: ProductsType[] = [
        { id: 1, name: "React Course", price: 4999 },
        { id: 2, name: "React Course", price: 4999 },
        { id: 3, name: "React Course", price: 4999 }

    ]
    return (
        <div>
            <h2>Product</h2>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <h3>{product.name}---Rs{product.price}</h3>
                        <button onClick={() => dispatch({
                            type: "ADD_ITEMS",
                            payload: product

                        })}>Add cart</button>
                    </div>

                )
            })}
            <div>
                <h2>Shopping Cart</h2>
                {state.items.length === 0 ? (
                    <div>Your cart is empty
                    </div>
                ) : (
                    <div>
                        {state.items.map((item: any) => (
                            <div key={item.id}>
                                <p>
                                    {item.name}-{item.price}*{item.quantity}
                                </p>
                                 <button onClick={()=> dispatch({
                                    type: "UPDATE_ITEMS",
                                    payload: {id:item.id, quantity: item.quantity-1}
                                 })}>-</button>
                                  <button onClick={()=> dispatch({
                                    type: "UPDATE_ITEMS",
                                    payload: {id:item.id, quantity: item.quantity+1}
                                 })}>+</button>
                                <button onClick={()=>dispatch({
                                    type: "REMOVE_ITEMS",
                                    payload: {id: item.id}

                                })}>Remove</button>
                            </div>
                        ))}
                    </div>
                )}
                <h3>Total Items: {state.totalItems}</h3>
                <h3>Total Price: {state.totalAmount} </h3>
                {state.items.length>0 &&(
                    <button onClick={()=>dispatch({type: "CLEAR_CART"})}>CLEAR CART</button>
                )}
            </div>

        </div>
    )
}
