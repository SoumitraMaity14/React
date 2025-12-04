

export const SpreadProps = ({...props}) => {
  return (
    <div>
        <h2>Hello👋 {props.name} {props.lastname}</h2>
        <p>email: {props.email}</p>
        <p>age: {props.age}</p>
    </div>
  )
}
