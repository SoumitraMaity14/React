import { useState } from "react"

export const Dashboard = () => {
    const [isPremium, setIsPremium]=useState(100)

    if(!isPremium){
        return <div>Upgraded to premium</div>
    }
  return (
    <div>
        <p>credit is: {isPremium}</p>
        <button onClick={()=>setIsPremium(0)}>spend all credits</button>
        
    </div>
  )
}
