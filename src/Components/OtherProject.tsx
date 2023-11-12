import { useState } from 'react';

export default function OtherProject({ project }: any) {
  const { title, type, description, tech, repo, link, img } = project;
  const [isFlipped, setIsFlipped] = useState(false);

  const renderContent = () => {
    if (isFlipped) {
      return (
        <>
          <p className="project-desc">{description}</p>
          <ul className="tech-list">
            {tech.map((tech: string, index: number) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <p>
            <span>
              <a
                className="live-site"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </span>
            <span>
              <a className="repo" href={repo} target="_blank" rel="noreferrer">
                Repo
              </a>
            </span>
          </p>
        </>
      );
    } else {
      return <img src={img} alt={title} />;
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <p className="project-type">{type}</p>
        <p className="turn" onClick={() => setIsFlipped(!isFlipped)}>
          {'=>'}
        </p>
        <h2 className="project-title">{title}</h2>
        {renderContent()}
      </div>
    </div>
  );
}
