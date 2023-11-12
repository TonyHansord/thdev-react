import { render, screen } from '@testing-library/react';
import { About } from '../Components/About';

import { skills } from '../data/constants';

describe('About', () => {
  it('renders Name', () => {
    render(<About />);
    const name = screen.getByText(/Tony/i);
    expect(name).toBeInTheDocument();
  });

  it('has a list of skills', () => {
    render(<About />);
    const skills = screen.getAllByRole('list');
    expect(skills.length).toBe(2);
  });
  
  it('has a list item for each skill', () => {
    render(<About />);
    const skillItem = screen.getAllByRole('listitem');
    expect(skillItem.length).toBe(skills.length);
  });
});
