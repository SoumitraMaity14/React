import { useState } from "react"

export const ObjectState=()=>{
    const [user, setUser]=useState({
        name: "soumitra",
        age: 26,
        email: "maity@gmail.com",
        address:{
            location:"High school road, panchgechia",
            city: "Ghatal"
        }
    })
    const handaleName=()=>{
        setUser({
            ...user,
            name: "Suman"
        })
    }
    const handaleAge=()=>{
        setUser({
            ...user,
            age: 25
        })
    }
    const handaleUpdateAll=()=>{
        setUser({
            ...user,
            name: "Suman",
            age: 30
        })
    }
    const handaleCity=()=>{
        setUser({
            ...user,
            address:{
                ...user.address,
                city: "kolkata"
            }
        })
    }

    return(
        <>
        <h2>Name: {user.name} </h2>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <p>Location: {user.address.location}</p>
        <p>City: {user.address.city} </p>
        <button onClick={handaleName}>update name</button>
        <button onClick={handaleAge}> update age</button>
        <button onClick={handaleUpdateAll}>Update Age and name</button>
        <button onClick={handaleCity}>Update City Kolkata</button>

        </>
    )
}