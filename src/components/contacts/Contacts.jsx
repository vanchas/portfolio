import React from 'react'
import s from './contacts.module.scss'
import ContactsImage from '../../assets/images/contacts.png'

export default function Contacts() {
  return (
    <div className={`${s.contacts} row align-content-center`}>
      <div className="col-md-6 col-sm-12">
        <h5 className="h3 text-center mb-5">Contacts</h5>
        <div className={`shadow ${s.card}`}>
          <div className={s.img_container}>
            <img src={ContactsImage} alt="contacts" />
          </div>
          <div className={s.text_content}>
            <h3 className="text-center h5">
              <address>Ukraine, Dnipro</address>
            </h3>
            <p className={s.text}>
              Phone: <a href="tel:+380932345170">093-2345-170</a>
              Email: <a href="mailto:ivan93mail@gmail.com">ivan93mail@gmail.com</a>
              Telegram: <a href="https://web.telegram.org/@ivancha" target="_blank" rel="noopener noreferrer">@ivancha</a>
              LinkedIn: <a href="https://www.linkedin.com/in/khoroshevslyi-ivan/" target="_blank" rel="noopener noreferrer">@Khoroshevslyi-Ivan</a>
              Portfolio: <a href="http://" target="_blank" rel="noopener noreferrer">portfolio link</a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-0"></div>
    </div>
  )
}
