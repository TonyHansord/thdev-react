import FeaturedProject from './FeaturedProject';
import OtherProject from './OtherProject';
import { projects } from '../data/constants';
import { useCallback } from 'react';

export function Projects() {
  const renderFeatured = useCallback(() => {
    return projects.featured.map((project, index) => (
      <FeaturedProject key={index} project={project} />
    ));
  }, []);

  const renderOther = useCallback(() => {
    return projects.other.map((project, index) => (
      <OtherProject key={index} project={project} />
    ));
  }, []);

  return (
    <div id="card-container">
      <h1>Featured Projects</h1>
      <div className="featured grid">{renderFeatured()}</div>
      <h1>Other Projects</h1>
      <div className="other grid">{renderOther()}</div>
    </div>
  );
}
