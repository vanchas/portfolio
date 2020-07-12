import s from './layout.module.scss'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { useEffect, useState } from 'react'
import Circle from '../circle-animation/Circle'

const Layout = ({ children }) => {
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    setTimeout(() => setShowAnimation(false), 9000);
  }, [])

  return (
    <>{showAnimation
      ? <div className={s.intro_animation}>
        <Circle />
      </div>
      : <div className={s.wrapper}>
        <div className={s.blue_rect}></div>
        <div className={`${s.layout} rounded`}>
          <header>
            <Header />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>}
    </>
  )
}

export default Layout
