import './Styles/main.css'
import React, { useState } from 'react'
import ContactForm from './Components/Contact/ContactForm'
import Section from './Components/Section/Section'
import NavBar from './Components/NavBar/NavBar'
import { Projects } from './Components/Project/Projects'
import { About } from './Components/About/About'
import ThankYouModal from './Components/Modal/ThankYouModal'
import SocialBar from './Components/Social/SocialBar'

function App () {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Section id='nav-section' backgroundColor=''>
        <NavBar />
      </Section>
      <Section id='about-section' backgroundColor='dark-section'>
        <About />
      </Section>
      <Section id='projects-section' backgroundColor='light-section'>
        <Projects />
      </Section>
      <Section id='contact-section' backgroundColor='dark-section'>
        <ContactForm openModal={handleModalOpen} />
        <SocialBar />
        <ThankYouModal isOpen={isModalOpen} onClose={handleModalClose} />
      </Section>
    </>
  )
}

export default App
