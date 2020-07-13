import React, { useState } from "react"
import { connect } from "react-redux"
import { setLanguageData, scrollToElementFunc } from '../../redux/appActions'

function Navbar({ language, setLanguageData, scrollToElementFunc }) {
  const [dropDown, setDropDown] = useState(false)

  const toggleOpen = () => setDropDown(!dropDown)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <a className="navbar-brand" href="#" onClick={() => scrollToElementFunc('Khoroshevskyi Ivan')}>{language.name}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav justify-content-end w-100">
          <li className="nav-item">
            <a className="nav-link" href="#"
              onClick={() => scrollToElementFunc('About')}>
              {language.linkAbout}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"
              onClick={() => scrollToElementFunc('Skills')}>
              {language.linkSkills}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"
              onClick={() => scrollToElementFunc('Experience')}>
              {language.linkExperience}</a>
          </li>
          {/* <li className="nav-item">
            <select className="form-control border-0 bg-light p-0 text-muted">
              <option value="default" hidden>{language.selectLanguages}</option>
              <option>{language.english}</option>
              <option>{language.russion}</option>
            </select>
          </li> */}
          <li className="nav-item dropdown" onClick={toggleOpen}>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {language.selectLanguages}
            </a>
            <div className={`dropdown-menu ${dropDown && 'show'}`} aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#" onClick={() => setLanguageData('en')}>{language.english}</a>
              <a className="dropdown-item" href="#" onClick={() => setLanguageData('ru')}>{language.russion}</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"
              onClick={() => scrollToElementFunc('Contacts')}>
              {language.linkContacts}</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  language: state.app.language.navbar
})

const mapDispatchToProps = {
  setLanguageData, scrollToElementFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
