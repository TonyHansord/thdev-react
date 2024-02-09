import { Project } from './Project'
import { projects } from '../../data/constants'
import { useCallback } from 'react'
import { SectionHeading } from '../Section/SectionHeading'

export function Projects () {
  const renderProjects = useCallback((type: any[]) => {
    return type.map((project, index) => (
      <Project key={index} project={project} />
    ))
  }, [])

  return (
    <div className='project-container'>
      <SectionHeading heading='Featured Projects' />
      <div id='featured'>{renderProjects(projects.featured)}</div>
      <SectionHeading heading='Other Projects' />
      <div id='other'>{renderProjects(projects.other)}</div>
    </div>
  )
}
