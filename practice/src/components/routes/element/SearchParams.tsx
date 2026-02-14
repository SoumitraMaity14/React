import { useSearchParams } from "react-router-dom"

export const SearchParams = () => {
    const [searchParams, setSearchParams]=useSearchParams()
    const filterItems=searchParams.get('filter')==="active"

  return (
    <div>
        <button onClick={()=>setSearchParams({filter: "active"})}>Filter</button>
        <button onClick={()=>setSearchParams({})}>Reset</button>
        {filterItems? (<div>Active User</div>):(<>All User</>) }

    </div>
  )
}
