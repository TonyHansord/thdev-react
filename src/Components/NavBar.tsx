import React, { useRef, useState } from 'react';

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navModal = useRef<HTMLDivElement>(null);

  if (!menuIsOpen) {
    navModal.current?.classList.add('hidden');
    toggler.current?.classList.remove('open');
  } else {
    toggler.current?.classList.add('open');
    navModal.current?.classList.remove('hidden');
  }

  return (
    <nav>
      <div className="dropdown">
       
        <div id="logo-container">
          <a id="logo" href="index.html">
            <img src="assets/THlogo.svg" alt="Logo" />
            <p>Tony Hansord</p>
          </a>
        </div>
        <div
          id="nav-modal"
          ref={navModal}
          className="dropdown-content hidden transition"
        >
          <ul id="nav-list" className=" flex justify-between p-4">
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
      </div>
    </nav>
  );
};

export default NavBar;
