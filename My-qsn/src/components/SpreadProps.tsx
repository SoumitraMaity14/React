export const SpreadProps=({...props})=>{
  return (
    <>
      <div>
        <h2>Hello {props.firstname} {props.lastname}</h2>
        <p>email: {props.email}</p>
        <p>age: {props.age}</p>
      </div>
    
    </>
  )
}

export const DirectProps=({firstname, lastname, email, age})=>{
  return (
    <div>
        <h2>Hello {firstname} {lastname}</h2>
        <p>email: {email}</p>
        <p>age: {age}</p>
      </div>
  )
  
}
export const RestProps=({firstname,...rest})=>{
  return (
    <div>
        <h2>Hello {firstname} {rest.lastname}</h2>
        <p>email: {rest.email}</p>
        <p>age: {rest.age}</p>
      </div>
    )
}


import {useState} from 'react'

export const CuponApply=()=>{
  const [isOpen, setIsOpen]=useState(false);
  const [selectedCoupons, setSelectedCupons]=useState<string|null>(null) 
  const cupons=["FREE10","FREE20","FREE30"]
  return (
    <div>
      <div>
        <h2>selected cupons</h2>
        { selectedCupons && (
      <div>
        cuppons applied: {selectedCupons}
      </div>
        )}
      <button onClick={()=>setIsOpen(true)}>Apply Coupon</button>
        {isOpen && (

      <div>
        cupons.map((c)=>{
          <div key={c}
           onChange={()=> setSelectedCupons(c)}
            >
          {c}
          </div>
          <button onClick={()=>setIsOpen(false)}>
           Select cupon</button>
      
        })
      </div>
        )}
        
      </div>
    
    </div>
  )
}
