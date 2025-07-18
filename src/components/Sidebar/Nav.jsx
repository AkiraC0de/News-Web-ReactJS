import { NAV_ITEMS } from "../../configs/Nav.config"
import { useState } from "react"

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav>
      <ul className="flex flex-col gap-4">
        {NAV_ITEMS.map((item, i) => (
          <li 
            key={item.id} 
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={() => setActiveIndex(i)}
          >
            {<item.icon 
              className={`${activeIndex == i ? 'bg-primary-red stroke-white' : 'bg-[#f5f8f7] stroke-gray-text group-hover:stroke-black-text' } 
              rounded-md p-1.5 w-10 h-10 transition-all duration-500 `}
            />}
            <h2 
              className={`${activeIndex == i ? 'text-black-text' : 'text-gray-text'}
              font-medium group-hover:text-black-text`
            }>
              {item.label}
            </h2>
          </li>
          
        ))}
      </ul>
    </nav>
  )
}
export default Nav