import {useState} from "react"
import { Dropdown } from "./Dropdown"
import { ProductList } from "./ProductList"


export const Sort = () => {
    const [sortBy, setSortBy] =useState<string>("A-Z")
  return (
    <>
    <Dropdown setSortBy={setSortBy}/>
    <ProductList sortBy={sortBy}/>
    
    </>
  )
}
