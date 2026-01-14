import { useState } from "react"


export const UseStateWithObject = () => {
    const [items, setItems]=useState({
        name: "soumen",
        role: "Accountant",
        email: "soumen@gmail.com",
        addres:{
            village: "panchgechia",
            pin:721148
        }
    })
    const handaleUpdate=()=>{
        setItems({
            ...items,
            name: "Soumitra",
            role: "Developer",
            email: "soumitra@gmail.com",
            addres:{
                ...items.addres,
                village: "Dum Dum",
                pin: 700091

            }

        })
    }

  return (
    <div>
        <h3>Name: {items.name}</h3>
        <h4>User role:{items.role} </h4>
        <p>User Email:{items.email} </p>
        <h3>Address:</h3>
        <p>Village:{items.addres.village} </p>
        <p>Pin Code:{items.addres.pin} </p>
        <button onClick={handaleUpdate}>Update items</button>
        
    </div>
  )
}
