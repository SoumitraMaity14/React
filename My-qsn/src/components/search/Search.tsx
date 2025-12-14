import { useState } from "react"
import { ProductList } from "./ProductList"

export const Search = () => {
    const [search, setSearch]=useState<string>("")
  return (
    <div className="max-w-3xl mx-auto">
        <input type="text" className="px-2 py-3 border rounded-lg shadow-md m-8" value={search} onChange={(e:any)=>setSearch(e.target.value)} placeholder="Search product name..."/>
        <ProductList search={search}/>

    </div>
  )
}
