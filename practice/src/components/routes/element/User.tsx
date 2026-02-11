import { Outlet, useSearchParams } from "react-router-dom"
export const User = () => {
    const [searchParams, setSearchParams]=useSearchParams()
    const filterUsers=searchParams.get('filter')==='active'
  return (
    <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <Outlet/>
        <div className="p-4 space-x-2">
            <button className="p-2 border" onClick={()=>setSearchParams({filter:'active'})}>Active</button>
            <button  className="p-2 border" onClick={()=>setSearchParams({})}>filter</button>
        </div>
        {filterUsers? (<div>Active User</div>):(<>All User</>)}
    </div>
  )
}
