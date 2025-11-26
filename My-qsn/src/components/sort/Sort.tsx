import { useState } from "react"
import { Dropdown } from "./Dropdown"
import { ProductList } from "./ProductList"

export const Sort = () => {
  const [sortby, setSortby]=useState<string>("A-z")
  const [search, setSearch]=useState<string>("")

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto mt-6 mb-4 flex justify-between items-center px-4">
      <input type="text" value={search} 
      onChange={(e)=>setSearch(e.target.value)}
      placeholder="search by a product..."
      className="border px-3 py-2 w-64"
      />

     
        <Dropdown setSortby={setSortby}/>
         </div>
        <ProductList sortby={sortby} search={search}/>
    </div>
  )
}
