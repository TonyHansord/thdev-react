import React from 'react'
import { ProjectTechItem } from './ProjectTechItem'

function FeaturedProject ({ project }: any) {
  const { title, description, tech, link, media } = project

  const { hasVideo, video, image } = media

  console.log(media)

  return (
    <div className='card'>
      <h2 className='fproject-title'>{title}</h2>
      {hasVideo ? (
        <video
          className='fproject-video'
          src={video}
          loop
          muted
          controls
        ></video>
      ) : (
        <img src={image} alt={title} />
      )}
      <div className='card-content'>
        <p className='fproject-desc'>{description}</p>
        <ul className='fptech-list'>
          {tech.map((tech: string, index: number) => (
            <ProjectTechItem key={index} tech={tech} />
          ))}
        </ul>
        <span>
          <a
            className='flive-site'
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-solid fa-arrow-up-right-from-square'></i>
          </a>
        </span>
      </div>
    </div>
  )
}

export default FeaturedProject
