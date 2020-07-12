import React from 'react'
import Cources from '../../assets/images/cources.png'
import Experience from '../../assets/images/experience.png'
import EducationImage from '../../assets/images/education.png'
import s from './education.module.scss'

const info = [
  { image: EducationImage, title: 'Education', text: 'College of Technology and Economics - Food Industry Technology' },
  { image: Cources, title: 'Courses', text: 'Solovov’s English School (intermediate) \n IT School Hillel - Frontend Web Developer' },
  { image: Experience, title: 'Web Development Experience', text: 'PADILO.PRO (Development of Industries WEB-solutions, SEO promotion, sell automatization, CRM Integration). Web Developer, currently work for.' }
]

export default function Education() {
  return (
    <div className="row">
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
                <p className={s.face2_text}>{i.text}</p>
                <span>&#171;</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

{/* <div key={i.title} className="px-1 col-md-4 col-sm-1">
          <div className={`card shadow-sm rounded h-100 ${s.card}`} >
            <div className="card-body">
              <h5 className="card-title h3">{i.title}</h5>
              <p className="card-text h6 mb-3">{i.text}</p>
            </div>
          </div>
        </div> */}
