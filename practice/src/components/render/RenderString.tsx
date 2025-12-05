

export const RenderString = () => {
    const names=["Bruce", "Sam", "Raju", "Chottu", "Raju"];

    const renderString=names.map((name, index)=><div key={index}>{name}</div>)

  return (
    <div>
        {renderString}
    </div>
  )
}
