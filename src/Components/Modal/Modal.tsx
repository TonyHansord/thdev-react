import { useState, FC, useRef, useEffect } from 'react'
import './Modal.css'

interface ModalProps {
  isOpen: boolean
  hasCloseBtn?: boolean
  onClose?: () => void
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, hasCloseBtn, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const modalRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    const modalElement = modalRef.current
    if (modalElement) {
      isModalOpen ? modalElement.showModal() : modalElement.close()
    }
  }, [isModalOpen])

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
    setIsModalOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }

  return (
    <dialog ref={modalRef} className='modal' onKeyDown={handleKeyDown}>
      {children}

      {hasCloseBtn && (
        <button className='modal-close-btn' onClick={handleClose}>
          Close
        </button>
      )}
    </dialog>
  )
}

export default Modal
