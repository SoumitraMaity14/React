import
{ useReducer } from 'react'
interface ProductsType {
    id: number,
    name: string,
    price: number
}
const initialState = {
    items: [],
    totalAmount: 0,
    totalItems: 0
}

const reducer = (state, action) => {
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
                    <div>Your car is empty
                    </div>
                ) : (
                    <div>
                        {state.items.map((item: any) => (
                            <div key={item.id}>
                                <p>
                                    {item.name}-{item.price}*{item.quantity}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
                <h3>Total Items: {state.totalItems}</h3>
                <h3>Total Price: {state.totalAmount} </h3>
            </div>

        </div>
    )
}
