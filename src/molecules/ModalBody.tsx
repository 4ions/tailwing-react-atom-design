import React from 'react'

interface ModalBodyProps {
  children: React.ReactNode
}

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => (
  <div className="p-4 md:p-5 space-y-4">{children}</div>
)

export default ModalBody
