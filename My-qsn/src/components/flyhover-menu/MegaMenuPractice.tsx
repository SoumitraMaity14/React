
import { menuItems } from './MenuList'
export const MegaMenuPractice = () => {
  return (
    <div className='bg-white top-0 sticky'>
        <div className="max-w-7xl mx-auto p-2 flex  justify-center gap-8">
            
            {menuItems.map((menu, index)=>(
                <div className='group relative flex flex-col'>
                <div key={index}>
                    <p className='text-sm font-semibold mt-2 text-gray-700 group-hover:text-blue-600 text-center'>{menu.name}</p>
                    {menu.children && (
                        <ul className='absolute left-1/2 -translate-x-1/2 top-full mt-3 
                        bg-white shadow-lg border rounded-lg p-4 w-48 hidden 
                        group-hover:block z-20'>
                            {menu.children.map((ch, i)=>(
                                <li key={i}>
                                    {ch}
                                </li>
                                
                            ))}
                            </ul >
                    )}
                </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}
