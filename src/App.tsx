import './index.css'
import logo from './assets/vioreed.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <>
      <div className="flex flex-col h-screen bg-[#0F162B] text-white font-sans">
        <header className="flex items-center justify-center mt-32 mb-4">
          <img src={logo} className="h-48 rounded-full" alt="logo" />
        </header>
        <main className="flex flex-col items-center justify-center m-4">
          <h1 className="text-8xl font-semibold mb-4">Hi. I’m Predi.</h1>
          <p className="text-6xl font-semibold mb-4">A Backend Developer.</p>
          <p className="text-lg text-center">I’m a skilled Backend Developer with a passion for creating efficient and reliable Restful API.</p>
        </main>
        <footer className="flex items-center justify-center my-4">
          <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="mx-4">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
          <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="mx-4">
            <FontAwesomeIcon icon={faWhatsapp} size="3x" />
          </a>
          <a href="https://github.com/vioreed" target="_blank" rel="noopener noreferrer" className="mx-4">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="mx-4">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="mx-4">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </footer>
      </div>
    </>
  )
}

export default App
