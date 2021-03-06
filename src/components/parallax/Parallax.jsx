import { useEffect, useRef } from "react"
import s from './parallax.module.scss'

export default function Parallax(props) {
  const parallaxDiv = useRef(null)

  useEffect(() => {
    window.addEventListener("scroll", onParallax)
    return () => {
      window.removeEventListener("scroll", onParallax)
    }
  }, [])

  const onParallax = () => {
    const { parallaxSpeed } = props,
      speed = parallaxSpeed ? parallaxSpeed : 3,
      windowScrollTop =
        window.pageYOffset || document.body.scrollTop,
      parallaxDivOffsetTop = parallaxDiv.current.offsetTop,
      parallaxDivHeight = parallaxDiv.current.offsetHeight,
      parallaxDivLimit = parallaxDivOffsetTop + parallaxDivHeight;

    if (
      windowScrollTop > parallaxDivOffsetTop &&
      windowScrollTop <= parallaxDivLimit
    ) {
      (window.innerWidth > 767)
        ? parallaxDiv.current.style.backgroundPosition =
        '50% ' + (windowScrollTop - parallaxDivOffsetTop) / speed + "px"
        : parallaxDiv.current.style.backgroundPosition =
        '90% ' + (windowScrollTop - parallaxDivOffsetTop) / speed + "px"
      // : parallaxDiv.current.style.background = 'none'
    } else {
      parallaxDiv.current.style.backgroundPositionY = "50% 0";
    }
  };

  const { children, imageUrl } = props;

  const styles = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className={`${s.parallax} parallax`} style={styles} ref={parallaxDiv}>
      {children}
    </div>
  );
}
