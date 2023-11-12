import './App.css';
import './styles.css';
import ContactForm from './Components/ContactForm';
import Section from './Components/Section';
import NavBar from './Components/NavBar';
import FeaturedProject from './Components/FeaturedProject';
import OtherProject from './Components/OtherProject';
import { projects } from './data/constants';
import { useCallback } from 'react';
import { About } from './Components/About';

function App() {
  const renderFeatured = useCallback(() => {
    return projects.featured.map((project, index) => (
      <FeaturedProject key={index} project={project} />
    ));
  }, []);

  const renderOther = useCallback(() => {
    return projects.other.map((project, index) => (
      <OtherProject key={index} project={project} />
    ));
  }, []);

  return (
    <>
      <Section id="nav-section" backgroundColor="">
        <NavBar />
      </Section>
      <Section id="about-section" backgroundColor="bg-gray-100">
        <About />
      </Section>
      <Section id="projects-section" backgroundColor="light-section">
        <div className="featured grid">{renderFeatured()}</div>
        <div className="other grid">{renderOther()}</div>
      </Section>

      <Section id="contact-section" backgroundColor="dark-section">
        <ContactForm />
      </Section>
    </>
  );
}

export default App;
