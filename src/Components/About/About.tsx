import { SkillsList } from './Skills'

import React from 'react'

export function About () {
  return (
    <div id='about' className='about-container'>
      <img className='tony-img' src='assets/tony-head-bw.jpg' alt='Tony' />
      <div className='heading-container'>
        <h1 className='name'>Hello! I am Tony.</h1>
        <h2 className='sub-heading'>I am a Full Stack Developer</h2>
        <p className='about-me'>
          Based in Melbourne, I have a strong passion for solving problems and
          creating beautiful, functional websites and apps. I am a full stack
          developer with experience in building web apps from scratch.
        </p>
        <p id='skills-heading'>
          Below are some of the technologies I have experience in
        </p>
        <SkillsList />
      </div>
    </div>
  )
}
