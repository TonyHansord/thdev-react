function FeaturedProject ({ project }: any) {
  const { title, description, tech, link, media } = project

  const {hasVideo, video, image} = media

  console.log(media)

  return (
    <div className='card'>
      <div className='card-content'>
        <div className='left-container'>
          <h2 className='fproject-title'>
            <a href={link} target='_blank' rel='noreferrer'>
              {title}
            </a>
          </h2>
          <p className='fproject-desc'>{description}</p>
          <ul className='fptech-list'>
            {tech.map((tech: string, index: number) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <span>
            <a
              className='flive-site'
              href={link}
              target='_blank'
              rel='noreferrer'
            >
              Live Site
            </a>
          </span>
        </div>
        <div className='right-container'>
          {hasVideo ? (
            <video
              className='fproject-video'
              src={video}
              autoPlay
              loop
              muted
              controls
            ></video>
          ) : (
            <img src={image} alt={title} />
          )}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProject
