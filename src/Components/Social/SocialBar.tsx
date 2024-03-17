import SocialIcon from './SocialIcon'

export default function SocialBar () {
  return (
    <footer id='social-bar' role='navigation'>
      <SocialIcon
        link='https://www.linkedin.com/in/thdev'
        iconClass='fa-brands fa-linkedin'
      />
      <SocialIcon
        link='https://github.com/TonyHansord'
        iconClass='fab fa-github'
      />
      <SocialIcon
        link='https://medium.com/@tonychansord'
        iconClass='fab fa-medium'
      />
      <SocialIcon
        link='https://www.youtube.com/@tonyhansorddev'
        iconClass='fab fa-youtube'
      />
    </footer>
  )
}
