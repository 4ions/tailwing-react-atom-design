import { classNames } from '@/utils/generics'
import React from 'react'

const ProfileButton: React.FC = () => (
  <a
    href="#"
    className={classNames(
      'flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800'
    )}
  >
    <img
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
      className="h-8 w-8 rounded-full bg-gray-800"
    />
    <span aria-hidden="true">Tom Cook</span>
  </a>
)

export default ProfileButton
