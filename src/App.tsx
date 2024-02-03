import './App.css'
import './styles.css'
import { useState } from 'react'
import ContactForm from './Components/ContactForm'
import Section from './Components/Section'
import NavBar from './Components/NavBar/NavBar'
import { Projects } from './Components/Projects'
import { About } from './Components/About'
import ThankYouModal from './Components/ThankYouModal'

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
        <ThankYouModal isOpen={isModalOpen} onClose={handleModalClose} />
      </Section>
    </>
  )
}

export default App
