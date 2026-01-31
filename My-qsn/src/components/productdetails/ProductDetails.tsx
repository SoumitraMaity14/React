import { useState } from "react"
export interface address{
    village:string,
    post: string,
    pin: number
}
export interface DetailsType{
    name: string,
    role: string,
    Address: address
}
export const ProductDetails = () => {
    const [selectedTask, setSelecetedTask] = useState(null)
    const details: DetailsType[] = [
        {
            name: "Soumitra", role: "member", Address: 
                {
                    village: "Panchgechia",
                    post: "Daspur",
                    pin: 721148
                }
            
        },
        {
            name: "Akash", role: "member", Address: 
                {
                    village: "Goura",
                    post: "Daspur",
                    pin: 721146
                }
            
        },
        {
            name: "Dilip", role: "secratery", Address: 
                {
                    village: "Talibhata",
                    post: "Daspur",
                    pin: 721148
                }
            
        }
    ]
    return (
        <div>
            {details.map((person) => (
                <div key={person.name} onClick={() =>setSelecetedTask(person)} className="flex flex-row justify-center items-center  space-y-3">
                    <div className="border p-4">
                        {person.name}
                    </div>
                </div>
            ))}
            {selectedTask && (
               
                    <Details person={selectedTask}/>
               
            )}

        </div>
    )
}

export const Details=({person})=>{
    return(
        <>
        <p>Name: {person.name}</p>
        <p>Role: {person.role}</p>
        <p>Village: {person.Address.village}, Post:{person.Address.post}, Pin: {person.Address.pin} </p>
        </>
    )

}
