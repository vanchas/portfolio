import React from 'react'
import Cources from '../../assets/images/cources.png'
import Experience from '../../assets/images/experience.png'
import EducationImage from '../../assets/images/education.png'
import s from './education.module.scss'
import { connect } from 'react-redux'

function Education({ language }) {

  const info = [
    { image: EducationImage, title: language.education.header, text: language.education.text },
    { image: Cources, title: language.cources.header, text: language.cources.text },
    { image: Experience, title: language.experience.header, text: language.experience.text }
  ]

  return (
    <div className="row p-0 m-0">
      {info.map(i => (
        <div key={i.title} className="px-1 col-md-4 col-sm-1">
          <div className={s.card}>
            <div className={`${s.card_face} ${s.face1}`}>
              <div className={s.content}>
                <img src={i.image} alt="" className={s.img1} />
                <h3 className={s.heading}>{i.title}</h3>
              </div>
            </div>
            <div className={`${s.card_face} ${s.face2}`}>
              <div className={s.content}>
                <p className={s.face2_text}>
                  {i.text.split('~~')[0]}
                  <br /> {i.text.split('~~')[1]}
                </p>
                <span>&#171;</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.app.language.education
})

export default connect(mapStateToProps, null)(Education)
