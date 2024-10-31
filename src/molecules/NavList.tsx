import React from 'react'
import NavItem from '../atoms/NavItem'

type INavItem = {
  name: string
  to: string
  icon: React.ComponentType
  children?: INavItem[]
}

const s = 3

interface IProps {
  navigation: INavItem[]
  openItems: { [key: string]: boolean }
  toggleItem: (name: string) => void
}

const NavList: React.FC<IProps> = ({ navigation, openItems, toggleItem }) => (
  <ul role="list" className="flex flex-1 flex-col gap-y-7">
    {navigation.map((item) => (
      <li key={item.name}>
        <div onClick={() => toggleItem(item.name)} className="cursor-pointer">
          <NavItem name={item.name} to={item.to} icon={item.icon} />
        </div>

        {item.children && item.children.length > 0 && openItems[item.name] && (
          <ul role="list" className="pl-5 mt-2">
            {item.children.map((child) => (
              <li key={child.name}>
                <NavItem name={child.name} to={child.to} icon={child.icon} />
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
)

export default NavList
