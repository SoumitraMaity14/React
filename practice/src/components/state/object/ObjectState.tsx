import { useState } from "react"

export const ObjectState=()=>{
    const [user, setuser]=useState({
        name: "soumitra",
        age: 26,
        email: "maity@gmail.com",
        address:{
            location:"High school road, panchgechia",
            city: "Ghatal"
        }
    })

    return(
        <>
        <h2>Name: {user.name} </h2>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <p>Location: {user.address.location}</p>
        

        
        </>
    )
}