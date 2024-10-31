import { classNames } from '@/utils/generics'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface IProps {
  name: string
  to: string
  icon: React.ElementType
}

const NavItem: React.FC<IProps> = ({ name, to, icon: Icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      classNames(
        isActive
          ? 'bg-gray-800 text-white'
          : 'text-gray-400 hover:bg-gray-800 hover:text-white',
        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
      )
    }
  >
    <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
    {name}
  </NavLink>
)

export default NavItem
