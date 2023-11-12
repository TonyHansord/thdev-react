import { render, screen } from '@testing-library/react';
import { About} from '../Components/About';

describe('About', () => {
  it('renders Name', () => {
    render(<About />);
    const name = screen.getByText(/Tony/i);
    expect(name).toBeInTheDocument();
  });

  // it('has a list of skills', () => {
  //   render(<About />);
  //   const skills = screen.getByRole('list');
  //   expect(skills).toBeInTheDocument();
  // });
});

