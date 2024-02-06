import React, { useRef, useState } from 'react'
import { Toggler } from './Toggler'
import { NavBarLink } from './NavBarLink'
import { navlinks } from '../../data/constants'

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const navList = useRef<HTMLUListElement>(null)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
    menuIsOpen
      ? navList.current?.classList.add('hidden')
      : navList.current?.classList.remove('hidden')
  }

  const renderLinks = () => {
    return navlinks.map((link, index) => (
      <NavBarLink
        key={index}
        href={link.href}
        label={link.label}
        isExternal={link.isExternal}
      />
    ))
  }

  return (
    <nav>
      <div className='dropdown'>
        <div id='nav-header' className='dropdown-content transition'>
          <Toggler toggleMenu={toggleMenu} />
          <div id='logo-container'>
            <a id='logo' href='index.html'>
              <p>Tony Hansord</p>
            </a>
          </div>
        </div>
        <ul
          id='nav-list'
          ref={navList}
          className=' flex hidden justify-between p4'
        >
          {renderLinks()}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
