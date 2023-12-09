import React, { useRef, useState } from 'react';
import { Toggler } from './Toggler';

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navList = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    menuIsOpen
      ? navList.current?.classList.add('hidden')
      : navList.current?.classList.remove('hidden');
  };

  return (
    <nav>
      <div className="dropdown">
        <div id="nav-header" className="dropdown-content transition">
          <Toggler toggleMenu={toggleMenu} />
          <div id="logo-container">
            <a id="logo" href="index.html">
              <img src="assets/THlogo.svg" alt="Logo" />
              <p>Tony Hansord</p>
            </a>
          </div>
        </div>
        <ul
          id="nav-list"
          ref={navList}
          className=" flex hidden justify-between p-4"
        >
          {/* <li className="text-2xl font-bold">Logo</li> */}
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
            <a
              href="https://medium.com/@tonychansord"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
          <li className="text-xl">
            <a
              href="https://tonyhansord.github.io/markdown-cv/"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
