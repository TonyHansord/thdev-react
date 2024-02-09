import React from 'react'

type NavBarLinkProps = {
  href: string
  isExternal?: boolean
  label: string
}

export const NavBarLink = ({ href, isExternal, label }: NavBarLinkProps) => {
  return (
    <li>
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
