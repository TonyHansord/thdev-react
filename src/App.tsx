import React, { useCallback } from 'react';
import './App.css';
import './styles.css';
import ContactForm from './Components/ContactForm';
import Section from './Components/Section';
import NavBar from './Components/NavBar';
import FeaturedProject from './Components/FeaturedProject';
import { projects } from './data/constants';

function App() {
  const renderFeatured = () => {
    return projects.featured.map((project, index) => (
      <FeaturedProject key={index} project={project} />
    ));
  };

  return (
    <>
      <Section id="nav-section" backgroundColor="bg-teal-100">
        <NavBar />
      </Section>
      {/* <Section id="about-section" backgroundColor="bg-gray-100">

      </Section> */}
      <Section id="projects-section" backgroundColor="bg-gray-100">
        <div>{renderFeatured()}</div>
      </Section>

      <Section id="contact-section" backgroundColor="bg-gray-100">
        <ContactForm />
      </Section>
    </>
  );
}

export default App;
