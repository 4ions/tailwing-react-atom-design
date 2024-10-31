import Sidebar from '@/organism/Sidebar'
import React from 'react'

import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => (
  <div>
    <Sidebar />
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </main>
  </div>
)

export default MainLayout
