import React from 'react'
import { ProjectTechItem } from './ProjectTechItem'

interface ProjectProps {
  project: {
    title: string
    description: string
    tech: string[]
    repo: string
    link: string
    media: {
      hasVideo: boolean
      video: string
      image: string
    }
  }
}

export const Project = ({ project }: ProjectProps) => {
  const { title, description, tech, repo, link, media } = project

  const { hasVideo, video, image } = media

  return (
    <div className='card'>
      {hasVideo ? (
        <video
          className='fproject-video'
          playsInline
          autoPlay
          src={video}
          loop
          muted
          controls
        ></video>
      ) : (
        <img src={image} alt={title} />
      )}
      <div className='card-content'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <ul>
            {tech.map((tech: string, index: number) => (
              <ProjectTechItem key={index} tech={tech} />
            ))}
          </ul>
        </div>
      </div>
      <div className='card-links'>
        {repo ? (
          <a href={repo} target='_blank' rel='noreferrer'>
            <i className='fab fa-github'></i>
          </a>
        ) : null}

        <a className='live-site' href={link} target='_blank' rel='noreferrer'>
          <i className='fa-solid fa-arrow-up-right-from-square'></i>
        </a>
      </div>
    </div>
  )
}
