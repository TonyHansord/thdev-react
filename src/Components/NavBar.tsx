const NavBar = () => {
  return (
    <nav>
      <div id="nav-list">
        <div id="logo-container">
          <a id="logo" href="index.html">
            <img src="assets/THlogo.svg" alt="Logo" />
            <p>Tony Hansord</p>
          </a>
        </div>
        <div className="dropdown">
          <div className="hamburger toggle">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div id="nav-modal" className="dropdown-content hidden transition">
            <a className="menu-link" href="#header-section">
              <p className="menu-item about-item">About</p>
            </a>
            <a className="menu-link" href="#work-section">
              <p className="menu-item skills-item">Work</p>
            </a>
            <a className="menu-link" href="#contact-section">
              <p className="menu-item contact">Contact</p>
            </a>
            <a
              className="btn menu-item blog"
              href="https://medium.com/@tonychansord"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
