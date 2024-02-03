import { render, screen } from '@testing-library/react'
import NavBar from '../Components/NavBar/NavBar'

describe('NavBar', () => {
  describe('Nav', () => {
    it('renders NavBar', () => {
      render(<NavBar />)
      const nav = screen.getByRole('navigation')
      expect(nav).toBeInTheDocument()
    })

    it('renders 5 anchor tags', () => {
      render(<NavBar />)
      const links = screen.getAllByRole('link')
      expect(links.length).toBe(6)
    })
  })
  describe('About', () => {
    it('renders About', () => {
      render(<NavBar />)
      const linkElement = screen.getByText(/About/i)
      expect(linkElement).toBeInTheDocument()
    })

    it('links to About Section', () => {
      render(<NavBar />)
      const linkElement = screen.getByText(/About/i)
      expect(linkElement).toHaveAttribute('href', '#about-section')
    })
  })

  describe('Projects', () => {
    it('renders Projects', () => {
      render(<NavBar />)
      const projectElement = screen.getByText(/Projects/i)
      expect(projectElement).toBeInTheDocument()
    })

    it('links to Projects Section', () => {
      render(<NavBar />)
      const projectElement = screen.getByText(/Projects/i)
      expect(projectElement).toHaveAttribute('href', '#projects-section')
    })
  })

  describe('Contact', () => {
    it('renders Contact', () => {
      render(<NavBar />)
      const linkElement = screen.getByText(/Contact/i)
      expect(linkElement).toBeInTheDocument()
    })
    it('links to Contact Section', () => {
      render(<NavBar />)
      const linkElement = screen.getByText(/Contact/i)
      expect(linkElement).toHaveAttribute('href', '#contact-section')
    })
  })
})
