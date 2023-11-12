const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-between items-center p-4">
        <li className="text-2xl font-bold">Logo</li>
        <li className="text-xl">
          <a href="#about-section">About</a>
        </li>
        <li className="text-xl">
          <a href="#projects-section">Projects</a>
        </li>
        <li className="text-xl">
          <a href="#contact-section">Contact</a>
        </li>
        <li className="text-xl">
          <a href="">Blog</a>
        </li>
        <li className="text-xl">
          <a href="https://tonyhansord.github.io/markdown-cv/">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
