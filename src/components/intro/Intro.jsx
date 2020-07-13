import React from 'react'
import Me from '../../assets/images/me.jpg'
import s from './intro.module.scss'
import { connect } from 'react-redux'

function Intro({ language }) {
  return (
    <div className={`${s.intro}`}>
      <h1>{language.header}</h1>
      <p>{language.subheading.split('~~')[0]}
        <br />
        {language.subheading.split('~~')[1]}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.app.language.intro
})

export default connect(mapStateToProps, null)(Intro)
