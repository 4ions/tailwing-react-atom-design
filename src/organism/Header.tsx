import React from 'react'

const Header: React.FC = () => (
  <header className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
    <div className="flex-1 text-sm font-semibold leading-6 text-white">
      Dashboard
    </div>
  </header>
)

export default Header
