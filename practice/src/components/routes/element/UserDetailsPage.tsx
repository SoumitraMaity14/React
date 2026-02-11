import { useParams } from "react-router-dom"

export const UserDetailsPage = () => {
    const {userId}=useParams()
   
  return (
    <div>
        <h2>This Is User Details Page:{userId}</h2>
    </div>
  )
}
