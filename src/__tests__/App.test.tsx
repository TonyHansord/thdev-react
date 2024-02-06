import { render, screen } from '@testing-library/react'
import { projects } from '../data/constants'
import FeaturedProject from '../Components/Project/FeaturedProject'
import OtherProject from '../Components/Project/OtherProject'
import React from 'react'

describe('App', () => {})

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  link: string
  video?: string
}

describe('Projects', () => {
  const { featured, other } = projects

  describe('Featured Projects', () => {
    it('renders FeaturedProject', () => {
      featured.forEach((project: Project) => {
        render(<FeaturedProject project={project} />)
        const titleElement = screen.getByText(project.title)
        expect(titleElement).toBeInTheDocument()
      })
    })
  })

  describe('Other Projects', () => {
    it('renders OtherProject', () => {
      other.forEach((project: Project) => {
        render(<OtherProject project={project} />)
        const titleElement = screen.getByText(project.title)
        expect(titleElement).toBeInTheDocument()
      })
    })

    it('renders OtherProject with image', () => {
      other.forEach((project: Project) => {
        render(<OtherProject project={project} />)
        const imageElement = screen.getByAltText(project.title)
        expect(imageElement).toBeInTheDocument()
      })
    })
  })
})
