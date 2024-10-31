import React, { useState, useEffect, useRef } from 'react'
import ModalHeader from '@/molecules/ModalHeader'
import Button from '@/atoms/Button'

interface ModalProps {
  title: string
  children: React.ReactNode
  onClose?: () => void
}

const Modal: React.FC<ModalProps> = ({ title, children, onClose }) => {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const openModal = () => setIsOpen(true)
  const closeModal = async () => {
    if (onClose) {
      await onClose()
    }
    setIsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative">
      <Button onClick={openModal} name="Abrir modal" />
      {isOpen && (
        <div
          className="fixed w-full inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50"
          aria-hidden={!isOpen}
          tabIndex={-1}
        >
          <div
            ref={modalRef}
            className="relative bg-white rounded-lg shadow min-w-96"
            role="dialog"
            aria-modal="true"
          >
            <ModalHeader title={title} onClose={closeModal} />
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
