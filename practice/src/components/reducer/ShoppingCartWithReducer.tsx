import React, { useReducer } from 'react'
interface ProductsType{
    id:number,
    name: string,
    price:number
}
const initialState={
    items:[], 
    totalAmount: 0,
    totalItems:0
}

const reducer=(state, action)=>{
    switch(action.type){
        case "ADD_ITEMS":{
            const existingItemIndex=state.items.findIndex(
                (item:any)=>item.id===action.payload.id
            );
            let updateItems;
        }

    }
}

export const ShoppingCartWithReducer = () => {
    const [state, action ]=useReducer(reducer, initialstate)
    const products: ProductsType[]=[
        {id:1, name:"React Course", price: 4999},
        {id:2, name:"React Course", price: 4999},
        {id:3, name:"React Course", price: 4999}

    ]
  return (
    <div>

    </div>
  )
}
