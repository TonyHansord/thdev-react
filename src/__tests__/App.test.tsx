import { render, screen } from '@testing-library/react'
import { projects } from '../data/constants'
import { Projects } from '../Components/Project/Projects'

describe('App', () => {
  it('renders Featured Projects Heading', () => {
    render(<Projects />)
    const projectElement = screen.getByText(/Featured Projects/i)
    expect(projectElement).toBeInTheDocument()
  })

  it('renders all Featured projects', () => {
    render(<Projects />)
    const featured = screen.getByTestId('featured') // Replace direct Node access with getByTestId
    expect(featured.childNodes.length).toBe(projects.featured.length)
  })

  it('renders Other Projects Heading', () => {
    render(<Projects />)
    const projectElement = screen.getByText(/Other Projects/i)
    expect(projectElement).toBeInTheDocument()
  })

  it('renders all Other projects', () => {
    render(<Projects />)
    const other = screen.getByTestId('other') // Replace direct Node access with getByTestId
    expect(other.childNodes.length).toBe(projects.other.length)
  })
})
