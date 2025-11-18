import { useState } from "react"
import { Dropdown } from "./Dropdown"
import { ProductList } from "./ProductList"

export const Sort = () => {
  const [sortby, setSortby]=useState<string>("A-z")

  return (
    <div>
        <Dropdown setSortby={setSortby}/>
        <ProductList sortby={sortby}/>
    </div>
  )
}
