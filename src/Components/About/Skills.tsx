import React from 'react'
import { skills } from '../../data/constants'

export function SkillsList () {
  const firstHalf = skills.slice(0, Math.ceil(skills.length / 2))
  const secondHalf = skills.slice(Math.ceil(skills.length / 2), skills.length)
  const renderSkills = (half: any[]) => {
    return half.map((skill, index) => <Skill key={index} skill={skill} />)
  }

  return (
    <div id='skills-wrapper'>
      <ul className='skills-list'>{renderSkills(firstHalf)}</ul>
      <ul className='skills-list'>{renderSkills(secondHalf)}</ul>
    </div>
  )
}

function Skill ({ skill }: any) {
  return (
    <li className='tech-skills'>
      <i className={`icon ${skill.icon}`}></i>
      {skill.name}
    </li>
  )
}
