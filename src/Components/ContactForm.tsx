import React, { useState } from 'react'

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
    <div className='container mx-auto px-4 border-2 rounded'>
      <div className='contact-heading-container'>
        <h2 className='section-heading'>Want to get in touch?</h2>
      </div>
      <div className='contact-form-container'>
        <form className='contact-form' id='contactForm' onSubmit={sendEmail}>
          <div className='main-form-container'>
            <div className='left-container'>
              <div className='form-group'>
                <label className='form-label' htmlFor='name'>
                  Name
                </label>
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
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='email'>
                  Email
                </label>
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
              </div>
            </div>
            <div className='right-container'>
              <div className='form-group'>
                <label className='form-label' htmlFor='message'>
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='message'
                  name='message'
                  value={state.message}
                  onChange={onInputChange}
                  placeholder='Enter your message'
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className='bottom-container'>
            <button className='contact-submit-btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
