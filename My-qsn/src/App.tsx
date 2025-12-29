import './App.css'
import { ApplyCupon } from "./components/cupon/ApplyCupon"
import { MegaMenu } from "./components/flyhover-menu/MegaMenu"
import { Search } from "./components/search/Search"
import { Sort } from "./components/sort/Sort"
import { Todo } from "./components/todo/Todo"
import { DashBoard } from "./components/tab-bars/DashBoard"
import { TodoList } from "./components/todo/TodoList"
import { CuponDiscount } from './components/cupon/CuponDiscount'
import { SortPractice } from './components/sort/SortPractice'
import { SearchPractice } from './components/search/SearchPractice'
import { TodoListPractice } from './components/todo/TodoListPractice'



function App() {

  return (
    <>
    <TodoListPractice/>
    {/* <SearchPractice/> */}
    {/* <SortPractice/> */}
   {/* <CuponDiscount/> */}
    {/* <Todo/> */}
    {/* <Search/> */}
    {/* <DashBoard/> */}
   {/* <Sort/>
   <MegaMenu/>
   <ApplyCupon/>
    <TodoList/> */}
    </>
  )
}


export default App
