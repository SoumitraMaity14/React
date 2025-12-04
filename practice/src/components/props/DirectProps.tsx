

export const DirectProps = ({ age, firstname, lastname, email}: { age:number, firstname:string, lastname:string, email:string}) => {
  return (
    <div>
        <h2>Hello {firstname} {lastname}</h2>
        <p>email: {email} </p>
        <p>age: {age} </p>
    </div>
  )
}
