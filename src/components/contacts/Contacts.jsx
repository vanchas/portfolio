import React from 'react'
import s from './contacts.module.scss'
import ContactsImage from '../../assets/images/contacts.png'
import { connect } from 'react-redux'

function Contacts({ language }) {
  return (
    <div className={`${s.contacts} row align-content-center`}>
      <div className="col-md-6 col-sm-12">
        <h5 className="h3 text-center mb-5">{language.header}</h5>
        <div className={`shadow ${s.card}`}>
          <div className={s.img_container}>
            <img src={ContactsImage} alt="contacts" />
          </div>
          <div className={s.text_content}>
            <h3 className="text-center h5">
              <address>{language.location}</address>
            </h3>
            <p className={s.text}>
              {language.phone}: <a href="tel:+380932345170">093-2345-170</a>
              {language.email}: <a href="mailto:ivan93mail@gmail.com">ivan93mail@gmail.com</a>
              Telegram: <a href="https://web.telegram.org/@ivancha" target="_blank" rel="noopener noreferrer">@vancha</a>
              LinkedIn: <a href="https://www.linkedin.com/in/khoroshevslyi-ivan/" target="_blank" rel="noopener noreferrer">@Khoroshevslyi-Ivan</a>
              {/* Portfolio: <a href="https://portfolio.vanchas.vercel.app/" target="_blank" rel="noopener noreferrer">https://portfolio.vanchas</a> */}
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-0"></div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.app.language.contacts
})

export default connect(mapStateToProps, null)(Contacts)
