import s from './layout.module.scss'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { useEffect, useState } from 'react'
import Circle from '../circle-animation/Circle'
import Head from 'next/head'
import { connect } from 'react-redux'
import { scrollToElementFunc } from '../../redux/appActions'
import $ from 'jquery'

const Layout = ({ children, scrollToElement, scrollToElementFunc }) => {
  const [showAnimation, setShowAnimation] = useState(false)

  const scrollHandler = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        scrollToElementFunc('Khoroshevskyi Ivan')
        $('.scroll_to_top').fadeOut(1000)
      } else if (window.scrollY > 1500) {
        $('.scroll_to_top').fadeIn(1000)
      } else if (window.scrollY <= 1500) {
        $('.scroll_to_top').fadeIn(1000)
      }
    });
  }

  useEffect(() => {
    scrollHandler()
    setTimeout(() => setShowAnimation(false), 9000)
  }, [])

  return (
    <>
      <div className={`scroll_to_top ${s.scroll_to_top}`}
        onClick={() => window.scrollTo({
          top: 0, behavior: "smooth"
        })}>
        <span>&#xab;</span>
      </div>
      <Head>
        <title>{scrollToElement}</title>
      </Head>
      {showAnimation
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

const mapStateToProps = (state) => ({
  scrollToElement: state.app.scrollToElement
})

export default connect(mapStateToProps, { scrollToElementFunc })(Layout)
