import React from 'react'
import s from './circle.module.scss'

export default function Circle() {
  return (
    <div className={s.circle_wrapper}>
      <div className={s.circle_1} >
        <span className={s.text}>K</span>
        <span className={s.text_2}>I</span>
        <div className={s.circle_2}>
          <span className={`${s.text} ${s.i_1}`}>H</span>
          <span className={s.text_2}>Y</span>
          <div className={s.circle_3} >
            <span className={s.text}>O</span>
            <span className={s.text_2}>K</span>
            <div className={s.circle_4} >
              <span className={s.text}>R</span>
              <span className={s.text_2}>S</span>
              <div className={s.circle_5} >
                <span className={s.text}>O</span>
                <span className={`${s.text_2} ${s.i_2}`}>V</span>
                <div className={s.circle_6} >
                  <span className={s.text}>S</span>
                  <span className={`${s.text_2} ${s.i_2}`}>E</span>
                  <div className={s.circle_head}>
                    <span className={s.text_h_1}>H</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
