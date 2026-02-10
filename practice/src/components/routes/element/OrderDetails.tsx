import { useNavigate } from "react-router-dom"

export const OrderDetails = () => {
    const navigate=useNavigate()
  return (
    <div>
       <p> OrderDetails</p>
       <button onClick={()=>navigate(-1)} className="p-1 border ml-1">back</button>
        
    </div>
  )
}
