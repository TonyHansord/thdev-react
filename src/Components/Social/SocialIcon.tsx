import React from 'react'

export default function SocialIcon ({
  link,
  iconClass
}: {
  link: string
  iconClass: string
}) {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <i className={iconClass}></i>
    </a>
  )
}
