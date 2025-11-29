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
