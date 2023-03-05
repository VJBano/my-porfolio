import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faGolang,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import Me from '../../assets/images/me.jpg'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">

        <div className="text-zone">

        <div className='picture'>
        <img src={Me} alt="Logo"  className='me-picture'/>
        </div>
        
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <h2>
          "Difficult Roads Lead to Beautiful Destinations"
          </h2>
          <p>
          
          Hi! I'm Vincent Jay Bano, a Junior Sftware Engineer from Bohol, Philippines. 
          I graduated in Bohol Island State University - Candijay Campus with a degree of Bachelor of Science in Computer Science. 
          I love facing challenging things or problems and finding a simple yet beautiful solution on it. 
          And with that, I can't deny that I enjoy programming and coding wether it could be JavaScript, Go, PHP and more.
          </p>
    
          <p>
          I believe that every problem has it's solution that comes with a nice result. 
          That's why I embraced in becoming a programmer and an efficient Back-End Web developer, with the trainings and experiences that I undergone, undergoing and will undergo. 
          Though programmers seem like introvert people but I am not. And I am looking forward to get along and work with you!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGolang} color="#0e23df" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
