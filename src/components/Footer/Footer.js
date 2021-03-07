import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-inner' >
        <a className='github-link' href='https://github.com/Likvidas' >
          <div className='github-logo' ></div>
          <span>Likvidas</span>
        </a>
        <div className='year'>2021</div>
        <a className='course-link' href='https://rs.school/react/'>
          <div className='course-logo'></div>
        </a>
      </div>
    </footer>
  )
}

export default Footer;