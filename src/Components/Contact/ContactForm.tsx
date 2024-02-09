import React, { useState } from 'react'
import { SectionHeading } from '../Section/SectionHeading'

export interface ContactFormProps {
  openModal: () => void
}

const ContactForm: React.FC<ContactFormProps> = ({ openModal }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const sendEmail = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    openModal()
    await fetch('https://thdev-mail.onrender.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        message: state.message
      })
    }).then(res => {
      console.log(res)
      setState({
        name: '',
        email: '',
        message: ''
      })
    })
  }

  const onInputChange = (event: any) => {
    const { name, value } = event.currentTarget
    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <>
      <SectionHeading heading='Want to get in touch?' />
      <form className='contact-form' id='contactForm' onSubmit={sendEmail}>
        <input
          type='text'
          name='name'
          className='form-control'
          value={state.name}
          id='name'
          placeholder='Enter your name'
          onChange={onInputChange}
          required
        />
        <input
          type='email'
          name='email'
          value={state.email}
          className='form-control'
          onChange={onInputChange}
          id='email'
          placeholder='Enter your email'
          required
        />
        <textarea
          className='form-control'
          id='message'
          name='message'
          value={state.message}
          onChange={onInputChange}
          placeholder='Enter your message'
          required
        ></textarea>
        <button className='contact-submit-btn' type='submit'>
          Submit
        </button>
      </form>
    </>
  )
}

export default ContactForm
