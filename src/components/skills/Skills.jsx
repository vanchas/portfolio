import React, { useEffect } from 'react'
import Bootstrap from '../../assets/images/logos/bootstrap.png'
import Css from '../../assets/images/logos/css.png'
import Html from '../../assets/images/logos/html.png'
import Jquery from '../../assets/images/logos/jquery.png'
import Js from '../../assets/images/logos/js.png'
import Material from '../../assets/images/logos/material.png'
import Next from '../../assets/images/logos/next.png'
import Pwa from '../../assets/images/logos/pwa.png'
import ReactLogo from '../../assets/images/logos/react.png'
import Redux from '../../assets/images/logos/redux.png'
import Scss from '../../assets/images/logos/scss.png'
import s from './skills.module.scss'
import $ from 'jquery'
import { connect } from 'react-redux'

const skillsList = [
  { image: Html, title: 'Semantic HTML' },
  { image: Css, title: 'CSS' },
  { image: Scss, title: 'SCSS' },
  { image: Js, title: 'Javascript' },
  { image: Bootstrap, title: 'Bootstrap' },
  { image: Jquery, title: 'jQuery' },
  { image: ReactLogo, title: 'React' },
  { image: Material, title: 'Meterial Design' },
  { image: Next, title: 'SSR / Next js' },
  { image: Pwa, title: 'PWA' },
  { image: Redux, title: 'Redux' }
]

function Skills({ language }) {

  return (
    <div className="py-5">
      <h3 className={`${s.header} text-center h1 mb-4 font-weight-bold`} style={{ marginTop: '-1em' }}>{language.header}</h3>
      <ul className={s.skills_list}>
        {skillsList.map(skill => (
          <li key={skill.title} className={`shadow-lg rounded d-flex justify-content-center py-2 ${s.tooltip}`}>
            <img src={skill.image} alt={skill.title} />
            <span className={s.tooltiptext}>{skill.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.app.language.skills
})

export default connect(mapStateToProps, null)(Skills)
