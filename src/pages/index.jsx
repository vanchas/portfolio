import Parallax from '../components/parallax/Parallax'
import Background_01 from '../assets/images/scooter.jpg'
import MeBg from '../assets/images/me-bg.png'
import Background_02 from '../assets/images/cycle.jpg'
import Intro from '../components/intro/Intro'
import Skills from '../components/skills/Skills'
import About from '../components/about/About'
import Education from '../components/education/Education'
import Contacts from '../components/contacts/Contacts'

const blocks = [
  { image: MeBg, speed: 2, component: <Intro /> },
  { image: null, speed: null, component: <About /> },
  { image: Background_01, speed: 2, component: <Skills /> },
  { image: null, speed: null, component: <Education /> },
  { image: Background_02, speed: 1, component: <Contacts /> }
]

const Main = () => (
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

export default Main