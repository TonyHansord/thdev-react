import React from 'react'

type NavBarLinkProps = {
  href: string
  isExternal?: boolean
  label: string
}

export const NavBarLink = ({ href, isExternal, label }: NavBarLinkProps) => {
  return (
    <li className='text-xl'>
      {isExternal ? (
        <a href={href} target='_blank' rel='noreferrer'>
          {label}
        </a>
      ) : (
        <a href={href}>{label}</a>
      )}
    </li>
  )
}
