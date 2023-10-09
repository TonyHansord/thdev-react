import React from 'react';
import './App.css';
import ContactForm from './Components/ContactForm';
import Section from './Components/Section';

function App() {
  return (
    <Section id="contact-section" backgroundColor="bg-gray-100">
      <ContactForm />
    </Section>
  );
}

export default App;
