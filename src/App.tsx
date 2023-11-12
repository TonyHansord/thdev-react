import './App.css';
import './styles.css';
import ContactForm from './Components/ContactForm';
import Section from './Components/Section';
import NavBar from './Components/NavBar';
import { Projects } from './Components/Projects';
import { About } from './Components/About';

function App() {
  return (
    <>
      <Section id="nav-section" backgroundColor="">
        <NavBar />
      </Section>
      <Section id="about-section" backgroundColor="dark-section">
        <About />
      </Section>
      <Section id="projects-section" backgroundColor="light-section">
        <Projects />
      </Section>
      <Section id="contact-section" backgroundColor="dark-section">
        <ContactForm />
      </Section>
    </>
  );
}

export default App;
