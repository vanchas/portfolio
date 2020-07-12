import React from 'react'
import Me from '../../assets/images/me.jpg'
import s from './intro.module.scss'

export default function Intro() {
  return (
    <div className={`${s.intro}`}>
      <h1>Hello, I am Ivan</h1>
      <p>Javascript developer <br /> from Ukraine</p>
    </div>
  )
}
