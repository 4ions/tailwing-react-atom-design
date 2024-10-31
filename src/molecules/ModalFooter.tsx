import React from 'react'

interface ModalFooterProps {
  children: React.ReactNode
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => (
  <div className="w-full grid gap-4 p-4 md:p-5 border-t border-gray-200 rounded-b">
    {children}
  </div>
)

export default ModalFooter
