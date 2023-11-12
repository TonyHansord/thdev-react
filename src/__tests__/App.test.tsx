
import { render, screen } from '@testing-library/react';
import App from '../App';
import { projects } from '../data/constants';
import FeaturedProject from '../Components/FeaturedProject';
import OtherProject from '../Components/OtherProject';

describe('App', () => {
  it('renders Logo', () => {
    render(<App />);
    const linkElement = screen.getByText(/Logo/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders Contact Form', () => {
    render(<App />);
    const linkElement = screen.getByText(/Contact/i);
    expect(linkElement).toBeInTheDocument();
  });
});

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  video?: string;
}

describe('Projects', () => {
  const { featured, other } = projects;

  describe('Featured Projects', () => {
    it('renders FeaturedProject', () => {
      featured.forEach((project: Project) => {
        render(<FeaturedProject project={project} />);
        const titleElement = screen.getByText(project.title);
        expect(titleElement).toBeInTheDocument();
      });
    });
  });

  describe('Other Projects', () => {
    it('renders OtherProject', () => {
      other.forEach((project: Project) => {
        render(<OtherProject project={project} />);
        const titleElement = screen.getByText(project.title);
        expect(titleElement).toBeInTheDocument();
      });
    });

    it('renders OtherProject with image', () => {
      other.forEach((project: Project) => {
        render(<OtherProject project={project} />);
        const imageElement = screen.getByAltText(project.title);
        expect(imageElement).toBeInTheDocument();
      });
    });
  });
});
