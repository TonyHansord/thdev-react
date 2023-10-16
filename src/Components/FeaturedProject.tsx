function FeaturedProject({ project }: any) {
  const { title, desc, tech, link } = project;

  return (
    <div className="card">
      <div className="card-content">
        <div className="left-container">
          <h2 className="fproject-title">
            <a href={link} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h2>
          <p className="fproject-desc">{desc}</p>
          <ul className="fptech-list">
            {tech.map((tech: string, index: number) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <span>
            <a
              className="flive-site"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
          </span>
        </div>
        <div className="right-container">
          <img
            className="fproject-image"
            src="https://via.placeholder.com/300"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
