type Props={
    firstname: string,
    lastname: string,
    email:string,
    age:number
}

export const RestProps = ({age, ...RestProps}:Props) => {
  return (
    <div>
        <h3>Helllo {RestProps.firstname} {RestProps.lastname}</h3>
        <p>Age: {age}</p>
        <b>Email: {RestProps.email}</b>

    </div>
  )
}
