import { useSearchParams } from "react-router-dom"


export const SearchParams = () => {
   const [searchParams, setSearchParams]= useSearchParams()
   const activeSearchParams=searchParams.get('filter')==="active"
  return (
    <div className="max-w-4xl mx-auto">
        <div className="flex gap-10 items-center jutify-center mt-4">
            <button className="p-2 border border-dashed rounded-lg" onClick={()=>setSearchParams({filter: "active"})}>Active Button</button>
            <button className="p-2 border border-dashed rounded-lg" onClick={()=>setSearchParams({})}>Reset</button>
        </div>
        {
            activeSearchParams? (<>Active search Params</>):(<>All params</>)
        }
    </div>
  )
}
