import { useNavigate } from "react-router-dom"


export const Home = () => {
    const navigate=useNavigate()
  return (
    <div>
        <p>Home Page</p>
        <button onClick={()=> navigate('order-details')} className="p-2 border rounded-lg">order-details</button>
    </div>
  )
}
