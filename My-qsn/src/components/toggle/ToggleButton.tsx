import { useEffect, useState } from "react"


export const ToggleButton = () => {
    const [darkMode, setDarkMode]=useState(false)

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add("dark")
        }
        else{
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100 dark:bg-gray-900 transition-colors">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-[320px] space-y-4">
            <button onClick={()=>setDarkMode(!darkMode)} className="w-full  py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
                {darkMode? "LightMode☀️": "DarkMode🌙"}
            </button>

        </div>

    </div>
  )
}
