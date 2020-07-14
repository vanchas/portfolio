import React from 'react'
import { connect } from 'react-redux'

const styles = {
  text: {
    lineHeight: '2em',
    textAlign: 'center',
    fontSize: '1.3em'
  }
}

function About({ language }) {
  return (
    <div className="py-5">
      <h3 className="text-center h2 mb-4 font-weight-bold">
        {language.header}</h3>
      <p style={styles.text}>{language.text.split('~~')[0]}
        <br /> {language.text.split('~~')[1]} <br /> {language.text.split('~~')[2]}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.app.language.about
})

export default connect(mapStateToProps, null)(About)
