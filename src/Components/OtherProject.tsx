import { ProjectTechItem } from './ProjectTechItem'

export default function OtherProject ({ project }: any) {
  const { title, description, tech, repo, link, img } = project

  return (
    <div className='card' tabIndex={0}>
      <h2 className='project-title'>{title}</h2>
      <img src={img} alt={title} />
      <div className='card-content'>
        <p className='project-desc'>{description}</p>
        <ul className='tech-list'>
          {tech.map((tech: string, index: number) => (
            <ProjectTechItem key={index} tech={tech} />
          ))}
        </ul>
        <p>
          <span>
            <a
              className='live-site'
              href={link}
              target='_blank'
              rel='noreferrer'
            >
              Live Site
            </a>
          </span>
          <span>
            <a className='repo' href={repo} target='_blank' rel='noreferrer'>
              Repo
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}
