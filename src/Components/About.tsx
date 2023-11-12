export function About() {
  return <div className="about-container">
  <img className="tony-img" src="assets/tony-head-bw.jpg" alt="Tony" />
  <div className="heading-container">
    <h1 className="name">Hello! I am Tony.</h1>
    <h2 className="sub-heading">I am a Mobile app and Web Developer</h2>
    <p className="about-me">
      Based in Melbourne, I have a strong passion for solving problems
      and creating beautiful, functional websites and apps. I am a
      full stack developer with experience in building mobile apps
      from scratch.
    </p>
    <p id="skills-heading">
      Below are some of the technologies I have experience in
    </p>
    <div id="skills-wrapper">
      <ul className="skills-list">
        <li id="js" className="tech-skills">Javascript</li>
        <li id="html" className="tech-skills">HTML</li>
        <li id="css" className="tech-skills">CSS</li>
        <li id="react" className="tech-skills">React</li>
      </ul>
      <ul className="skills-list">
        <li id="ruby" className="tech-skills">Ruby on Rails</li>
        <li id="swift" className="tech-skills">Swift</li>
        <li id="git" className="tech-skills">Git</li>
        <li id="firebase" className="tech-skills">Firebase</li>
      </ul>
    </div>
  </div>
</div>
}
