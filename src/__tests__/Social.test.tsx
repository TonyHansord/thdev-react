import { render, screen } from '@testing-library/react' // Add this import statement
import SocialBar from '../Components/Social/SocialBar' // Add this import statement

describe('SocialBar', () => {
  it('renders SocialBar', () => {
    render(<SocialBar />)
    const socialBar = screen.getByRole('navigation')
    expect(socialBar).toBeInTheDocument()
  })

  it('renders 4 anchor tags', () => {
    render(<SocialBar />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(4)
  })

  it('renders 4 icons', () => {
    render(<SocialBar />)
    const icons = screen.getAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'i'
    })
    expect(icons.length).toBe(4)
  })
})
