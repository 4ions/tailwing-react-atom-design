import React, { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  CreditCardIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  XMarkIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline'
import Logo from '../atoms/Logo'
import NavList from '../molecules/NavList'
import ProfileButton from '@/atoms/ProfileButton'

const navigation = [
  {
    name: 'Home',
    to: '/',
    icon: HomeIcon,
  },
  {
    name: 'Websites',
    to: '/website',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Configuración',
    to: '#',
    icon: DocumentDuplicateIcon,
    children: [
      {
        name: 'Métodos de Pago',
        to: '/payment-method',
        icon: CreditCardIcon,
      },
      {
        name: 'Audiencia',
        to: '/audience',
        icon: FolderIcon,
      },
      {
        name: 'Moneda',
        to: '/currency',
        icon: CalendarIcon,
      },
      {
        name: 'Tono',
        to: '/tone',
        icon: DocumentDuplicateIcon,
      },
      {
        name: 'Idioma',
        to: '/language',
        icon: ChartPieIcon,
      },
      {
        name: 'Actividad Comercial',
        to: '/commercial-activity',
        icon: ChartPieIcon,
      },
    ],
  },
]

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (name: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  return (
    <>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-900/80 transition-opacity" />
        <div className="fixed inset-0 flex">
          <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1 transform">
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                <button
                  onClick={() => setSidebarOpen(false)}
                  aria-label={'Close sidebar'}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            </TransitionChild>
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
              <div className="flex h-16 shrink-0 items-center">
                <Logo />
              </div>
              <nav className="flex flex-1 flex-col">
                <NavList
                  navigation={navigation}
                  openItems={openItems}
                  toggleItem={toggleItem}
                />
                <div className="-mx-6 mt-auto">
                  <ProfileButton />
                </div>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
          <div className="flex h-16 shrink-0 items-center">
            <Logo />
          </div>
          <nav className="flex flex-1 flex-col">
            <NavList
              navigation={navigation}
              openItems={openItems}
              toggleItem={toggleItem}
            />
            <div className="-mx-6 mt-auto">
              <ProfileButton />
            </div>
          </nav>
        </div>
      </div>
      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          aria-label={'Close sidebar'}
          className="text-gray-400"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        \
        <div className="flex-1 text-sm font-semibold leading-6 text-white">
          Dashboard
        </div>
      </div>
    </>
  )
}

export default Sidebar
