import React from 'react';
import './App.css';
import ContactForm from './Components/ContactForm';
import Section from './Components/Section';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <Section id="nav-section" backgroundColor="bg-teal-100">
        <NavBar />
      </Section>
      <Section id="contact-section" backgroundColor="bg-gray-100">
        <ContactForm />
      </Section>
    </>
  );
}

export default App;
