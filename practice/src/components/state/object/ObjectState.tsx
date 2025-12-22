import { useState } from "react"

export const ObjectState = () => {
    const [user, setUser] = useState({
        name: "Sandip",
        email: "sandip@gmail.com",
        age: 24,
        Address: {
            location: "Bedia para road",
            city: "kolkata"
        }

    })
    const updateNewUser = () => {

        setUser({
            ...user,
            name: "soumitra",
            age: 24,
            email: "soumitra@gmail.com"
        })

    }
    const updateName=()=>{
        setUser({
            ...user,
            name:"Sachin Boss"

        })
    }

    const updateAddress=()=>{
        setUser({
            ...user,
            Address:{
                ...user.Address,
                city: "Ghatal"
            }

        })
    }

    return (
        <>
            <h2>User Details:</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}   </p>
            <p>Age: {user.age}</p>
            <p>Location:{user.Address.location} </p>
            <p>City: {user.Address.city} </p>
            <button onClick={updateNewUser}>update User Details</button>
            <button onClick={updateName}>Update Name</button>
            <button onClick={updateAddress}>Update city</button>

        </>
    )
}
