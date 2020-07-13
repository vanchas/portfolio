import Parallax from '../components/parallax/Parallax'
import Background_01 from '../assets/images/scooter.jpg'
import MeBg from '../assets/images/me-bg.png'
import Background_02 from '../assets/images/cycle.jpg'
import Intro from '../components/intro/Intro'
import Skills from '../components/skills/Skills'
import About from '../components/about/About'
import Education from '../components/education/Education'
import Contacts from '../components/contacts/Contacts'
import { useRef, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'

const Main = ({ scrollToElement }) => {
  const introRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const educationRef = useRef(null)
  const contactsRef = useRef(null)

  const blocks = [
    { image: MeBg, speed: 2, component: <div ref={introRef}><Intro /></div> },
    { image: null, speed: null, component: <div ref={aboutRef}><About /></div> },
    { image: Background_01, speed: 2, component: <div ref={skillsRef}><Skills /></div> },
    { image: null, speed: null, component: <div ref={educationRef}><Education /></div> },
    { image: Background_02, speed: 1, component: <div ref={contactsRef}><Contacts /></div> }
  ]

  useEffect(() => {
    executeScroll(scrollToElement)
  }, [scrollToElement])

  const scrollToRef = (ref) => window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth"
  })

  const executeScroll = (ref) => {
    if (ref === 'Intro') {
      scrollToRef(introRef)
    } else if (ref === 'About') {
      scrollToRef(aboutRef)
    } else if (ref === 'Skills') {
      scrollToRef(skillsRef)
    } else if (ref === 'Experience') {
      scrollToRef(educationRef)
    } else if (ref === 'Education') {
      scrollToRef(educationRef)
    } else if (ref === 'Contacts') {
      scrollToRef(contactsRef)
    }
  }

  return (
    <>
      {blocks.map((block, index) => (
        index % 2 == 0
          ? <Parallax
            key={index.toString()}
            imageUrl={block.image}
            parallaxSpeed={block.speed}>
            <div className="content">
              {block.component}
            </div>
          </Parallax>
          : <div
            key={index.toString()}
            className="content">
            {block.component}
          </div>
      ))}
    </>
  )
}

const mapStateToProps = (state) => ({
  scrollToElement: state.app.scrollToElement
})

export default connect(mapStateToProps, null)(Main)