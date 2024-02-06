import React from 'react'
import Modal from './Modal'

export interface ThankYouModalProps {
  isOpen: boolean
  onClose?: () => void
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} hasCloseBtn={true} onClose={onClose}>
      <h1 className='modal-header'>Thank you for your message!</h1>
      <p className='modal-body'>I will get back to you as soon as possible.</p>
    </Modal>
  )
}

export default ThankYouModal
